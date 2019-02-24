import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./views/App";
import { SchoolInfoStore } from "./stores/SchoolInfo/SchoolInfoStore";

class WebClient {
    constructor() {}

    initialize() {}

    load() {
        const uiStores = {
            schoolInfoStore: new SchoolInfoStore()
        };

        ReactDOM.render(
            React.createElement(App, uiStores, null),
            document.getElementById('root') as HTMLElement
        );
    }
}

export { WebClient }