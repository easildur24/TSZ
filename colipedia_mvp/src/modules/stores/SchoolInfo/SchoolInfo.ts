interface SchoolInfo {
    schoolList: School[];
    resultList: School[];
}

interface School {
    name: string;
    usRank: number;
    worldRank: number;
    satMin: number;
}

export { SchoolInfo, School };

