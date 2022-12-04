import React, { useEffect } from "react";

import "../../../../design/components/canvas.scss";

import { SortAlgorithmStep } from "../../../functions/sortFuncs";
import { generateBars, generateBubbleSortFrame } from "../../../functions/drawFuncs"; 

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
                generateBars(shuffledArr, canvasContext)
                generateBubbleSortFrame(canvasContext, algorithmSteps[0])
            }
        }
    })

    // console.log(algorithmSteps[1])

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

