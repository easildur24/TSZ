# RAW DATA SPECIFICATION

[POWERED BY API.DATA.GOV](https://github.com/RTICWDT/open-data-maker/blob/master/API.md)
# This specification documents raw data entries from the https://api.data.gov/ed/collegescorecard/v1/schools API.


Sample Url to get entire data able for a single university. For example, Yale University:

```
https://api.data.gov/ed/collegescorecard/v1/schools?api_key=u8Qh1oOdrQ2edqFnbYO4kEn9qRY9jNsBZXc2U6Un&school.name=yale%20university
```
Full sample results can be find from [SampleSchoolDataYale.json](https://github.com/easildur24/TSZ/blob/master/api_data_gov/SampleSchoolDataYale.json). The following contains partial results that would be sufficient for our project, at least initially.
```javascript
{
    "metadata": { // The metadata of the result entry.
        "total": 1, // The number of results.
    },
    "results": [ // The array of result objects.
        {
            "1996": {}, // Result is defined by year, from 1996, this can be used for our trend based analysis. Previous-year data has the same fields as the lastest.
            "1997": {},
            "1998": {},
            "1999": {},
            "2000": {},
            "2001": {},
            "2002": {},
            "2003": {},
            "2004": {},
            "2005": {},
            "2006": {},
            "2007": {},
            "2008": {},
            "2009": {},
            "2010": {},
            "2011": {},
            "2012": {},
            "2013": {},
            "2014": {},
            "2015": {},
            "2016": {},
            "school": {
                "degrees_awarded": {
                    "predominant": 3, // 当年主流毕业生的学位 3=undergrad 4=grad
                    "highest": 4, // 当年最毕业学历
                    "predominant_recoded": 3 // no need
                },
                "open_admissions_policy": 2,
                "price_calculator_url": "admissions.yale.edu/yale-net-price-calculator", // Official link for calculate price. Good addition for detail page.
                "city": "New Haven",
                "ft_faculty_rate": 0.7376,
                "locale": 12,
                "institutional_characteristics": {},
                "main_campus": 1,
                "faculty_salary": 18333,
                "state": "CT",
                "operating": 1, // Current operating = 1
                "state_fips": 9,
                "zip": "06520",
                "women_only": 0,
                "religious_affiliation": null,
                "under_investigation": 0,
                "region_id": 1,
                "carnegie_basic": 15,
                "branches": 1,
                "men_only": 0,
                "school_url": "www.yale.edu",
                "online_only": 0,
                "ownership": 2,
                "minority_serving": {},
                "accreditor_code": "NEACHE",
                "name": "Yale University",
                "degree_urbanization": null,
                "carnegie_size_setting": 17,
                "title_iv": {}
                },
                "id": 130794,
                "latest": { //This has the same fields as yearly data. This is probalby the one we want to use for most recent data, aka general sorting/filtering.
                    "completion": {},
                    "earnings": {},
                    "cost": {},
                    "student": {},
                    "academics": {},
                    "admissions": {},
                    "aid": {},
                    "repayment": {}
                },
                "ope6_id": 1426,
                "ope8_id": 142600,
                "location": {
                    "lon": 
                    "lat":
                }
            }
        }
    ]
}
```