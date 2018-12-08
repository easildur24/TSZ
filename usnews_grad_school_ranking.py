import requests
from BeautifulSoup import BeautifulSoup
import re
import csv

REQUEST_HEADER = {'User-Agent': 'Mozilla/5.0'}


def Crawl(urls, output):
    ranks, names, links, tuitions, enrollments = [], [], [], [], []
    for url in urls:
        r = requests.get(url, headers=REQUEST_HEADER)
        soup = BeautifulSoup(r.text)
        # jpvx17-0-Box-cwadsP bAOdPa everything
        for rank in soup.findAll('ul', attrs={'class': 'Hide-s18sxv0v-0 bxLBHg DetailCardCompare__CardRankList-awcj9b-0 jTibOC RankList__List-s12osxea-0 cveOqa'}):
            ranks.append(int(re.findall('\d+', rank.text)[0]))
        for college in soup.findAll('h3', attrs={'class': 'sc-bdVaJa fmHOUD'}):
            names.append(college.getText())
        for link in soup.findAll('h3', attrs={'class': 'sc-bdVaJa fmHOUD'}):
            links.append(link.a['href'])
        for tuition in soup.findAll('div', attrs={'class': 'Box-jpvx17-0 BvoUX'}):
            if tuition.p and tuition.p['class'] == 'fqygwe-0-Paragraph-hHEPzZ gscYiA':
                tuitions.append(tuition.getText())
        for enrollment in soup.findAll('p', attrs={'class': 'fqygwe-0-Paragraph-hHEPzZ bOVhLv'}):
            enrollments.append(enrollment.getText())
        print 'Done crawling page: ', url
    print len(ranks), len(names), len(links), len(tuitions), len(enrollments)
    with open(output, 'wb', buffering=0) as csv_file:
        writer = csv.writer(csv_file)
        for i in range(len(ranks)):
            record = [i + 1, ranks[i], names[i].encode('utf-8'), links[i], tuitions[i], enrollments[i]]
            writer.writerow(record)


Crawl(urls=['https://www.usnews.com/best-graduate-schools/top-business-schools/mba-rankings'], output='ranking_data/mba_ranks.csv')