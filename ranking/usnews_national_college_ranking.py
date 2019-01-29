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
    with open(path, 'wb', buffering=0) as csv_file:
        writer = csv.writer(csv_file)
        for i in range(len(ranks)):
            record = [i + 1, ranks[i], names[i].encode('utf-8')]
            writer.writerow(record)


# National universities rankings
ranks, names = Crawl(
    urls=['http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+2', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+3', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+4', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+5', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+6', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+7', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+8', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+9', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+10', \
          'http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities/data/page+11'],
    rank_tag='span', rank_attrs={'class': 'text-strong'},
    college_tag='div', college_attrs={'class': 'text-strong text-large block-tighter'})
WriteToCsv('ranking_data/national_universities_ranking.csv', ranks, names)
