import { SchoolInfo, School } from "./SchoolInfo";

const SCHOOL_MOCK_1: School = {
    name: "University of Wisconsin - Madison",
    usRank: 1,
    worldRank: 1,
    satMin: 2000,
    imageUrl: ""

};

const SCHOOL_MOCK_2: School = {
    name: "University of Washington",
    usRank: 3,
    worldRank: 10,
    satMin: 1900,
    imageUrl: ""
};

const SCHOOL_MOCK_3: School = {
    name: "Yale University",
    usRank: 6,
    worldRank: 2,
    satMin: 1800,
    imageUrl: ""
};

const SCHOOL_MOCK_4: School = {
    name: "Chicago University",
    usRank: 100,
    worldRank: 9,
    satMin: 17000,
    imageUrl: ""
};

const SCHOOL_MOCK_5: School = {
    name: "Princeton University",
    usRank: 8,
    worldRank: 4,
    satMin: 2100,
    imageUrl: ""
};


class SchoolInfoStore {
    private schoolInfo: SchoolInfo;

    constructor() {
        this.schoolInfo = {
            schoolList: [SCHOOL_MOCK_1, SCHOOL_MOCK_2, SCHOOL_MOCK_3, SCHOOL_MOCK_4, SCHOOL_MOCK_5],
            resultList: [SCHOOL_MOCK_1, SCHOOL_MOCK_2, SCHOOL_MOCK_3, SCHOOL_MOCK_4, SCHOOL_MOCK_5]
        };
    }

    /**
     * Return current schoolInfo.
     * @returns {SchoolInfo}
     */
    getSchoolInfo(): SchoolInfo {
        return this.schoolInfo;
    }

    /**
     * Update store with new filtering instances.
     */
    onUpdate() {

    }

}

export { SchoolInfoStore }