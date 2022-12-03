import React, { useEffect } from "react";

import "../../../../design/components/canvas.scss";

import { generateBars } from "../../../functions/drawFuncs"; 

interface SortCanvasProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    shuffledArr: Array<number>;
    sortedArr: Array<number>
}

export default function SortCanvas(props: SortCanvasProps) {
    const { canvasRef, shuffledArr, sortedArr } = props;

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const canvasContext = canvas.getContext("2d")

            if (canvasContext) {
                generateBars(shuffledArr, canvasContext);
                generateBars(sortedArr, canvasContext, 600)
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