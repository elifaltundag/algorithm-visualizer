import { SortAlgorithmStep } from "./sortFuncs";

export function generateBars(barsArr: Array<number>, ctx: CanvasRenderingContext2D, start = 60, unitLength = 10) {    
    let lastStartPos = start

    ctx.fillStyle = "hsl(200, 50%, 50%)";

    for (let bar of barsArr) {
        ctx.fillRect(lastStartPos + 2 * unitLength, ctx.canvas.clientHeight / 2, unitLength, - bar * unitLength)
        lastStartPos += unitLength
    }

    /* 
    If index === (first || second)Index --> different color
    Else original color 
    */
}

export function regenerateBars(barsArr: Array<number>, algorithmSteps: Array<SortAlgorithmStep>, ctx: CanvasRenderingContext2D, start = 60, unitLength = 10) {
    const regularBarStyle = "hsl(200, 50%, 50%)";
    const highlightedBarStyle = "hsl(20, 50%, 50%)";

    let lastStartPos = start

    // Just draw the first step
    for (let barIndex = 0; barIndex < barsArr.length; barIndex++) {
        if (barIndex === algorithmSteps[1].firstIndex || barIndex === algorithmSteps[1].secondIndex) {
            ctx.fillStyle = highlightedBarStyle
        } else {
            ctx.fillStyle = regularBarStyle
        }
        ctx.fillRect(lastStartPos + 2 * unitLength, ctx.canvas.clientHeight / 2, unitLength, - barsArr[barIndex] * unitLength)
        lastStartPos += unitLength
    }
}

export function runBubbleSort(bubbleSortAlgorithmSteps: Array<SortAlgorithmStep>) {
    /* 
    If index === (first || second)Index --> different color
    Else original color 
    */
     

}