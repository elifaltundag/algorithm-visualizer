export function bubbleSort(shuffledNumsArr: Array<number>): {
            algorithmSteps: Array<any>,
            iterationCount: number,
            swapCount: number
    } {

    const size = shuffledNumsArr.length
    let swapCount = 0
    let iterationCount = 0
    
    let isSorted = false
    while (!isSorted) {
        isSorted = !isSorted

        for (let indx = 0; indx < size; indx++) {
            iterationCount += 1

            if (shuffledNumsArr[indx] > shuffledNumsArr[indx + 1]) {
                const temp = shuffledNumsArr[indx];
                shuffledNumsArr[indx] = shuffledNumsArr[indx + 1]
                shuffledNumsArr[indx + 1] = temp
                swapCount += 1
                isSorted = false
            }
        }
    }


    return ({
        algorithmSteps: [],
        iterationCount: iterationCount,
        swapCount: swapCount
    })
}