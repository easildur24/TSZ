import * as React from "react";

import "../../../assets/css/TopPanelContainer.scss"

import { Category } from "./Category";

class TopPanel extends React.Component {

    public render() {
        return (
            <div className="TopPanelContainer">
                <Category/>
            </div>
        );
    }

}

export { TopPanel }