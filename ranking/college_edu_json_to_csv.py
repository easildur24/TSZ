import urllib2
import json
import csv

def writeObj(f, level, obj):
    for key in obj.keys():
        if type(obj[key]) is dict:
            writerow(f, level, key)
            writeObj(f, level + 1, obj[key])
        else:
            writerow(f, level, key, obj[key])
        
def writerow(f, level, key, value=None):
    l = []
    for i in range(0, level):
        l.append('')
    data = key
    if value:
        data  = data + '(' + str(value) + ')'
    l.append(data)
    f.writerow(l)

def main():
    r = urllib2.urlopen('https://api.data.gov/ed/collegescorecard/v1/schools?id=164924&api_key=htRVpUNNAb4exVMeEce57R2xG5pBpaEkBv1EBSxW')
    html = json.loads(r.read())

    with open('some.csv', 'w') as f:
        writer = csv.writer(f)
        level = 0
        writeObj(writer, level, html['results'][0])
        

        

main()
    
