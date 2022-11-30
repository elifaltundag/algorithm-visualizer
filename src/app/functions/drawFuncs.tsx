export function generateBars(barsArr: Array<number>, ctx: CanvasRenderingContext2D, start = 60, unitLength = 10) {
    let lastStartPos = start

    ctx.fillStyle = "hsl(200, 50%, 50%)";

    for (let bar of barsArr) {
        ctx.fillRect(lastStartPos + 2 * unitLength, unitLength, unitLength, bar * unitLength * 2)
        lastStartPos += 2 * unitLength
    }
}