import json

# Load JSON from file
with open('results.json', 'r') as infile:
    data = json.load(infile)

# Convert JSON to strings
strings = []
for obj in data:
    file_name = obj['file'].split('.')[0]
    owner = 'inherits: basic_docker_tool'
    strings.append(f"  {file_name}:\n    {owner}\n")

# Save strings to file
with open('docker_strings.txt', 'w') as outfile:
    outfile.write(''.join(strings))
