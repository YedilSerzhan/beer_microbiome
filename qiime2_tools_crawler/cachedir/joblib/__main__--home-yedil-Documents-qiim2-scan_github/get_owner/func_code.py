# first line: 17
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
