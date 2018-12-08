import requests
from BeautifulSoup import BeautifulSoup
import re
import csv

REQUEST_HEADER = {'User-Agent': 'Mozilla/5.0'}


def Crawl(urls, rank_tag, rank_attrs, college_tag, college_attrs):
    ranks = []
    names = []
    for url in urls:
        r = requests.get(url, headers=REQUEST_HEADER)
        soup = BeautifulSoup(r.text)
        for rank in soup.findAll(rank_tag, attrs=rank_attrs):
            ranks.append(int(re.findall('\d+', rank.text)[0]))
        for college in soup.findAll(college_tag, attrs=college_attrs):
            names.append(college.getText())
        print 'Done crawling page: ', url
    return ranks, names


# Write to csv
def WriteToCsv(path, ranks, names):
    with open(path, 'a+', buffering=0) as csv_file:
        writer = csv.writer(csv_file)
        for i in range(len(ranks)):
            record = [i + 1, ranks[i], names[i].encode('utf-8')]
            writer.writerow(record)


# National universities rankings
url_prefix = 'https://www.usnews.com/education/best-global-universities/rankings'
urls = [url_prefix]
for i in range(125, 126):
    urls.append('%s?page=%d' % (url_prefix, i))
print urls
ranks, names = Crawl(
    urls=urls,
    rank_tag='span', rank_attrs={'class': 'rankscore-bronze'},
    college_tag='h2', college_attrs={'class': 'h-taut'})
WriteToCsv('ranking_data/world_universities_ranking.csv', ranks, names)
