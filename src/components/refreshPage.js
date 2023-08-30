import React from "react";
import "../index.css"

function RefreshPage({refresh}) {
    return (
        <div>
            <h1 className="refresh-heading">No Tours Left</h1>
            <div className="refresh-btn-div">
                <button className="refresh-button btn btn-success" onClick={refresh}>Refresh</button>
            </div>
        </div>
    )
}
export default RefreshPage;