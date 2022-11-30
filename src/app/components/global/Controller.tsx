import React from "react";

import "../../../design/components/animation-controls.scss";
import "../../../design/components/algorithm-controls.scss";


export default function Controller() {
    return (
        <div className="controller">
            <div className="animation-controls">
                <label id="speed-label" htmlFor="animation-speed">Animation Speed</label>
                <input id="speed-control" type="range" name="animation-speed" min="0" max="100" defaultValue="50" />
                
                <button id="btn--start" className="btn--control">Start</button>
                <button id="btn--pause" className="btn--control">Pause</button>
                <button id="btn--restart" className="btn--control">Restart</button>
                <button id="btn--shuffle" className="btn--control">Shuffle</button>
            </div>

            <div className="algorithm-controls">
                <button id="btn--prev-step" className="btn--control">Prev Step</button>
                <button id="btn--next-step" className="btn--control">Next Step</button>
            </div>
            
        </div>
    )
}