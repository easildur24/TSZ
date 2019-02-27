import * as React from 'react';

import "../../../assets/scss/ResultViewContainer.scss";

import { School } from "../../stores/SchoolInfo/SchoolInfo";
import { ResultCard } from "./ResultCard";

//import image:
import CU from "../../../assets/img/ChicagoUniversity.jpg"
import PU from "../../../assets/img/princetonUniversity.jpg"
import UWM from "../../../assets/img/uw-madison.jpg"
import UWS from "../../../assets/img/uw-seattle.jpg"
import Yale from "../../../assets/img/yale.jpg"

const SCHOOL_MOCK_1: School = {
    name: "University of Wisconsin - Madison",
    usRank: 1,
    worldRank: 1,
    satMin: 2000,
    imageUrl: UWM

};

const SCHOOL_MOCK_2: School = {
    name: "University of Washington",
    usRank: 3,
    worldRank: 10,
    satMin: 1900,
    imageUrl: UWS
};

const SCHOOL_MOCK_3: School = {
    name: "Yale University",
    usRank: 6,
    worldRank: 2,
    satMin: 1800,
    imageUrl: Yale
};

const SCHOOL_MOCK_4: School = {
    name: "Chicago University",
    usRank: 100,
    worldRank: 9,
    satMin: 17000,
    imageUrl: CU
};

const SCHOOL_MOCK_5: School = {
    name: "Princeton University",
    usRank: 8,
    worldRank: 4,
    satMin: 2100,
    imageUrl: PU
};

class ResultFullView extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ResultViewContainer">
                <ResultCard school={SCHOOL_MOCK_1}/>
                <ResultCard school={SCHOOL_MOCK_2}/>
                <ResultCard school={SCHOOL_MOCK_3}/>
                <ResultCard school={SCHOOL_MOCK_4}/>
                <ResultCard school={SCHOOL_MOCK_5}/>
            </div>
        );
    }
}

export { ResultFullView };