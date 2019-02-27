import * as React from 'react';

import { School } from "../../stores/SchoolInfo/SchoolInfo";

import "../../../assets/scss/ResultCardContainer.scss";

interface ResultCardProps {
    school: School;
}

class ResultCard extends React.Component<ResultCardProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ResultCardContainer">
                <img src={this.props.school.imageUrl}/>
            </div>
        );
    }
}

export { ResultCard };