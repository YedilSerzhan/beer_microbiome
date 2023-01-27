import json
from urllib.request import Request, urlopen
import yaml
import time
from joblib import Memory
import os

location = './cachedir'
memory = Memory(location, verbose=0)

access_token = ''
headers = {'User-Agent': 'Mozilla/5.0', 'Authorization': f'Token {access_token}'}

if not os.path.exists('results'):
    os.mkdir('results')

@memory.cache
def get_owner(file_url):
    req = Request(url=file_url, headers=headers)
    with urlopen(req) as response:
        data = yaml.safe_load(response.read().decode())
        remaining_limit = int(response.getheader('x-ratelimit-remaining'))
        reset_time = int(response.getheader('x-ratelimit-reset'))
        current_time = time.time()
        time_to_sleep = reset_time - current_time + 10
        if remaining_limit < 10:
            print(f'rate limit reached, sleeping for {time_to_sleep} seconds')
            time.sleep(time_to_sleep)
    return data.get('owner')

def get_xml_files(folder_path):
    xml_files = []
    for file in folder_path:
        if file['name'].endswith('.xml'):
            xml_files.append(file['name'])
    return xml_files

def scan_github(repo_url):
    req = Request(url=repo_url, headers=headers)
    with urlopen(req) as response:
        files = yaml.safe_load(response.read().decode())
    results = []
    for file in files:
        if file['type'] == 'dir':
            folder_url = repo_url + '/' + file['name']
            req = Request(url=folder_url, headers=headers)
            with urlopen(req) as folder_response:
                xml_files = get_xml_files(yaml.safe_load(folder_response.read().decode()))
            for xml_file in xml_files:
                xml_file_url = folder_url + '/' + xml_file
                shed_yml_url = folder_url + '/.shed.yml'
                owner = get_owner(shed_yml_url)
                result = {'file':xml_file, 'owner':owner}
                results.append(result)
    with open('results/results.json', 'w') as f:
        json.dump(results, f)

scan_github('https://api.github.com/repos/qiime2/galaxy-tools/contents/tools')
