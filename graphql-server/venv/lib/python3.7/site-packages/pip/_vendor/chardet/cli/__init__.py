import requests
import json

REQUEST_HEADER = {'User-Agent': 'Mozilla/5.0'}

page = 1
path = 'cb_compass_import.data'
with open(path, 'wb', buffering=0) as f:
    url = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=u8Qh1oOdrQ2edqFnbYO4kEn9qRY9jNsBZXc2U6Un&_per_page=10&_page=%s'%(page)
    r = requests.get(url, headers=REQUEST_HEADER)
    j = json.loads(r.text)
    for res in j['results']:
        nr = {}
        nr['id'] = res['ope8_id']
        nr['admissions'] = res['latest']['admissions']
        f.write(json.dumps(nr))
        f.write('\n')