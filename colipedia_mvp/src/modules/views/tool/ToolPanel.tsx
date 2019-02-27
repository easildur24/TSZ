import * as React from 'react';

import "../../../assets/scss/ControlsContainer.scss";

class ToolPanel extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ControlsContainer">{"tools"}</div>
        );
    }
}

export { ToolPanel }