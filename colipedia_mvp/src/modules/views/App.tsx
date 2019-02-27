import * as React from "react";
import "../../assets/scss/App.scss";

import { SchoolInfoStore } from "../stores/SchoolInfo/SchoolInfoStore";
import { UIStores } from "../UIStores";

import { TopPanel } from "./header/TopPanel";
import { ToolPanel } from "./tool/ToolPanel";
import {ResultFullView} from "./result/ResultFullView";


interface appProps {
    schoolInfoStore: SchoolInfoStore
}

class App extends React.Component<appProps> {

    constructor(props: UIStores) {
        super(props);
    }

    public render() {
        return (
            <div className="App">
                <TopPanel/>
                <ToolPanel/>
                <ResultFullView/>
            </div>
        );
    }
}

export { App };
