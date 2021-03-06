import { prisma } from './generated/prisma-client'

async function main() {

  const axios = require('axios');
  
  let page_number = 1;
  
  const school_ids = [];
  
  //7175 schools total
  while(page_number < 72) {
    await axios.get('https://api.data.gov/ed/collegescorecard/v1/schools?fields=id&per_page=100&api_key=5G7zPR2o6I4cwdfQKEl7nbxvetfWqHHiiqyDn8ez&page=' + page_number)
      .then(response => {
        console.log("loading id for page "+ page_number);
        school_ids.push(...response.data.results.map(x => x.id));
      })
      .catch(error => {
        console.log(error);
      });
    page_number = page_number + 1;
  }
  
  for (const id of school_ids) {
    //traverse all schools and insert record
    let schoolObj;
    await axios.get('https://api.data.gov/ed/collegescorecard/v1/schools?api_key=5G7zPR2o6I4cwdfQKEl7nbxvetfWqHHiiqyDn8ez&id=' + id)
      .then(response => {
        console.log(response.data.results[0].school.name);
        schoolObj = response.data.results[0]; 
      })
      .catch(error => {
        console.log(error);
      });
    if (schoolObj) {
      console.log("writing school");
      await prisma.createSchoolDetailsItem({
          overview: {
            create: {
              name: schoolObj.school.name,
              url: schoolObj.school.school_url,
              menOnly: schoolObj.school.men_only ? true : false,
              womenOnly: schoolObj.school.women_only ? true : false,
              operating: schoolObj.school.operating === '1' ? true : false,
              onlineOnly: schoolObj.school.online_only ? true : false,
              location: {
                create: {
                  latitude: parseFloat(schoolObj.location.lat),
                  longitude: parseFloat(schoolObj.location.lon),
                  state: schoolObj.school.state,
                  city: schoolObj.school.city,
                  zip: schoolObj.school.zip
                } // end create
              } // end location
            } // end create
          }, // end overview
          admission: {
            create: {
              acceptanceRate: parseFloat(schoolObj.latest.admissions.admission_rate.overall),
              actScores: {
                create: {
                  percentile25th: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.act_scores['25th_percentile'].writing),
                      english: parseInt(schoolObj.latest.admissions.act_scores['25th_percentile'].english),
                      math: parseInt(schoolObj.latest.admissions.act_scores['25th_percentile'].math),
                      cumulative: parseInt(schoolObj.latest.admissions.act_scores['25th_percentile'].cumulative)
                    } // end create
                  }, // end percentile25th
                  mid: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.act_scores.midpoint.writing),
                      english: parseInt(schoolObj.latest.admissions.act_scores.midpoint.english),
                      math: parseInt(schoolObj.latest.admissions.act_scores.midpoint.math),
                      cumulative: parseInt(schoolObj.latest.admissions.act_scores.midpoint.cumulative) 
                    } // end create
                  }, // end mid
                  percentile75th: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.act_scores['75th_percentile'].writing),
                      english: parseInt(schoolObj.latest.admissions.act_scores['75th_percentile'].english),
                      math: parseInt(schoolObj.latest.admissions.act_scores['75th_percentile'].math),
                      cumulative: parseInt(schoolObj.latest.admissions.act_scores['75th_percentile'].cumulative)
                    } // end create
                  } // end percentile75th
                } // end create
              }, // end actScores
              satScores: {
                create: {
                  percentile25th: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.sat_scores['25th_percentile'].writing),
                      reading: parseInt(schoolObj.latest.admissions.sat_scores['25th_percentile'].critical_reading),
                      math: parseInt(schoolObj.latest.admissions.sat_scores['25th_percentile'].math),
                    } // end create
                  }, // end percentile25th
                  mid: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.sat_scores.midpoint.writing),
                      reading: parseInt(schoolObj.latest.admissions.sat_scores.midpoint.critical_reading),
                      math: parseInt(schoolObj.latest.admissions.sat_scores.midpoint.math),
                    } // end create
                  }, // end mid
                  percentile75th: {
                    create: {
                      writing: parseInt(schoolObj.latest.admissions.sat_scores['75th_percentile'].writing),
                      reading: parseInt(schoolObj.latest.admissions.sat_scores['75th_percentile'].critical_reading),
                      math: parseInt(schoolObj.latest.admissions.sat_scores['75th_percentile'].math),
                    } // end create
                  } // end percentile75th
                } // end create
              } // end satScores
            } // end create
          }, // end admission
          // academics: {}, // end academics
          cost: {
            create: {
              tuitionUndergrad: parseInt(schoolObj.latest.cost.tuition.out_of_state)
            }
          }, // end cost
          geography: {
            create: {
              location: {
                create: {
                  latitude: parseFloat(schoolObj.location.lat),
                  longitude: parseFloat(schoolObj.location.lon),
                  state: schoolObj.school.state,
                  city: schoolObj.school.city,
                  zip: schoolObj.school.zip
                } // end create
              } // end location
            } // end create
          }, // end geography
          demographics: {} // end demographics
        })
      //reset school obj
      schoolObj = null;
    }
    
  }
  
  

  // Create a new user called `Alice`
  // const newSchool = await prisma.createSchoolDetailsItem({})
  // console.log(`Created new user: (ID: ${newSchool.id})`)

}

main().catch(e => console.error(e))