import React, { useEffect } from "react";

import "../../../../design/components/canvas.scss";

import { generateBars } from "../../../functions/drawFuncs"; 

interface SortCanvasProps {
    width: number;
    height: number;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    shuffledArr: Array<number>
}

export default function SortCanvas(props: SortCanvasProps) {
    const { width, height, canvasRef, shuffledArr } = props;



    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const canvasContext = canvas.getContext("2d")

            if (canvasContext) {
                generateBars(shuffledArr, canvasContext);
            }
        }
    })

    return (
        <div className="canvasContainer">
            <canvas 
                    ref={canvasRef}
                    width={width}
                    height={height}
                    className="canvas"
                / >
        </div>
    )
}