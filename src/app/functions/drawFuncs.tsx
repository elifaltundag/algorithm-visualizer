import { SortAlgorithmStep } from "./sortFuncs";

export function generateBars(barsArr: Array<number>, ctx: CanvasRenderingContext2D, start = 60, unitLength = 10) {    
    let lastStartPos = start

    ctx.fillStyle = "hsl(200, 50%, 50%)";

    for (let bar of barsArr) {
        ctx.fillRect(lastStartPos, ctx.canvas.clientHeight / 2 - 50, unitLength, - bar * unitLength)
        lastStartPos += unitLength
    }
}

export function generateBubbleSortFrame(ctx: CanvasRenderingContext2D, step: SortAlgorithmStep) {
    // Rect fill colors 
    const regularBarStyle = "hsl(200, 50%, 50%)"
    const highlightedBarStyle = "hsl(20, 50%, 50%)"

    // Starting X position 
    let lastStartPos = 60

    // Object destructuring of each step
    const {firstIndex, secondIndex, currentArray} = step

    for (let barIndex = 0; barIndex < currentArray.length; barIndex++) {
        ctx.fillStyle = (barIndex === firstIndex || barIndex === secondIndex) ? highlightedBarStyle : regularBarStyle
        ctx.fillRect(lastStartPos, ctx.canvas.clientHeight / 2 + 200, 10, currentArray[barIndex] * (-10))
        lastStartPos += 10
    }
}