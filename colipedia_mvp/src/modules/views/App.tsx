import * as React from "react";
import "../../assets/css/App.css";

import { SchoolInfoStore } from "../stores/SchoolInfo/SchoolInfoStore";
import { UIStores } from "../UIStores";
import { TopPanel } from "./header/TopPanel";



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
            </div>
        );
    }
}

export { App };
