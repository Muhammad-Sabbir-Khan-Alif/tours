import React from "react";
import '../index.css'

function LoadingPage() {
    return (
        <div className="spinner">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default LoadingPage