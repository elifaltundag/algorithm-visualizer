import React from "react";

import "../../../design/components/animation-controls.scss";
import "../../../design/components/algorithm-controls.scss";


export default function Controller() {
    return (
        <div className="controller">
            <div className="animation-controls">
                <label id="speed-label" htmlFor="animation-speed">Animation Speed</label>
                <input id="speed-control" type="range" name="animation-speed" min="1" max="100" defaultValue="50" />
                
                <button id="btn--start">Start</button>
                <button id="btn--pause">Pause</button>
                <button id="btn--restart">Restart</button>
            </div>

            <div className="algorithm-controls">
                <button id="btn--prev-step">Prev Step</button>
                <button id="btn--next-step">Next Step</button>
            </div>
            
        </div>
    )
}