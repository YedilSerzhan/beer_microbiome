import json

# Load JSON from file
with open('results.json', 'r') as infile:
    data = json.load(infile)

# Convert JSON to strings
strings = []
for obj in data:
    file_name = obj['file'].split('.')[0]
    owner = 'destination: tpv_dispatcher'
    strings.append(f"    - id: {file_name}\n      {owner}\n")

# Save strings to file
with open('job_conf.txt', 'w') as outfile:
    outfile.write(''.join(strings))


    # - id: interactive_tool_wilson
    #   destination: tpv_dispatcher