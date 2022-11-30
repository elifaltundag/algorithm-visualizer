import React, { useEffect } from "react";

import "../../styles/components/canvas.scss";

import { generateBars } from "../../../functions/drawFuncs"; 

interface SortCanvasProps {
    width: number;
    height: number;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    numElms: number;
    sortedArr: Array<number>;
    shuffledArr: Array<number>
}

export default function SortCanvas(props: SortCanvasProps) {
    const { width, height, canvasRef, numElms, sortedArr, shuffledArr } = props;



    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const canvasContext = canvas.getContext("2d")

            if (canvasContext) {
                generateBars(sortedArr, canvasContext);
                generateBars(shuffledArr, canvasContext, 600);
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