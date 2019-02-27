interface SchoolInfo {
    schoolList: School[];
    resultList: School[];
}

interface School {
    name: string;
    usRank: number;
    worldRank: number;
    satMin: number;
    imageUrl: any;
}

export { SchoolInfo, School };

