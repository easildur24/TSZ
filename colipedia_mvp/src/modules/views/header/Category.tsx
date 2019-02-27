import * as React from 'react';

import "../../../assets/scss/TopPanelContainer.scss";

class Category extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="CategoryButtonsWrapper">
                <button type="button" className="Left">{"Find My College"}</button>
                <button type="button" className="Center">{"School Details"}</button>
                <button type="button" className="Right">{"My Profile"}</button>
            </div>
        );
    }
}

export { Category };