import json

# Load JSON from file
with open('results.json', 'r') as infile:
    data = json.load(infile)

# Convert JSON to strings
strings = []
for obj in data:
    file_name = obj['file'].split('.')[0]
    owner = 'q2d2'
    strings.append(f"- name: {file_name}\n  owner: {owner}\n  tool_panel_section_label: QIIME 2\n")

# Save strings to file
with open('strings.txt', 'w') as outfile:
    outfile.write('\n'.join(strings))
