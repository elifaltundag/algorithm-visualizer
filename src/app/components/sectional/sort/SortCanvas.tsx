import React, { useEffect } from "react";

import "../../../../design/components/canvas.scss";

import { SortAlgorithmStep } from "../../../functions/sortFuncs";
import { generateBars, generateBubbleSortFrame, animateBubbleSort } from "../../../functions/drawFuncs"; 

interface SortCanvasProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    shuffledArr: Array<number>;
    sortedArr: Array<number>;
    algorithmSteps: Array<SortAlgorithmStep>
}

export default function SortCanvas(props: SortCanvasProps) {
    const { canvasRef, shuffledArr, sortedArr, algorithmSteps } = props;


    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const canvasContext = canvas.getContext("2d")

            if (canvasContext) {
                animateBubbleSort(canvasContext, algorithmSteps)
            }
        }
    })


    return (
        <div className="canvasContainer">
            <canvas 
                    ref={canvasRef}
                    className="canvas"
                    width={1200}
                    height={600}
                / >
        </div>
    )
}

