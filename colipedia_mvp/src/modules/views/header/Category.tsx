import * as React from 'react';

import "../../../assets/css/TopPanelContainer.scss"

class Category extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="CategoryButtonsContainer">
                <button type="button" className="Left">{"Find My College"}</button>
                <button type="button" className="Center">{"School Details"}</button>
                <button type="button" className="Right">{"My Profile"}</button>
            </div>
        );
    }
}

export { Category };