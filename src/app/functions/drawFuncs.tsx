import { SortAlgorithmStep } from "./sortFuncs";

export function generateBars(barsArr: Array<number>, ctx: CanvasRenderingContext2D, start = 60, unitLength = 10) {    
    let lastStartPos = start

    ctx.fillStyle = "hsl(220, 30%, 70%)";

    for (let bar of barsArr) {
        ctx.fillRect(lastStartPos, ctx.canvas.clientHeight / 2 - 50, unitLength, - bar * unitLength)
        lastStartPos += unitLength
    }
}

export function generateBubbleSortFrame(ctx: CanvasRenderingContext2D, step: SortAlgorithmStep) {
    // Rect fill colors 
    const regularBarStyle = "hsl(220, 30%, 70%)"
    const swapRequiredHighlight = "hsl(0, 70%, 40%)"
    const noSwapRequiredHighlight = "hsl(120, 70%, 40%)"

    // Starting X position 
    let lastStartPos = 60

    // Object destructuring of each step
    const {firstIndex, secondIndex, requiresSwap, currentArray} = step

    for (let barIndex = 0; barIndex < currentArray.length; barIndex++) {
        if (barIndex === firstIndex || barIndex === secondIndex) {
            ctx.fillStyle = requiresSwap ? swapRequiredHighlight : noSwapRequiredHighlight
        } else {
            ctx.fillStyle = regularBarStyle
        }
        
        ctx.fillRect(lastStartPos, ctx.canvas.clientHeight / 2 + 200, 10, currentArray[barIndex] * (-10))
        lastStartPos += 10
    }
}