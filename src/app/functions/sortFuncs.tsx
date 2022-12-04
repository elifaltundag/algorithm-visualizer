export interface SortAlgorithmStep {
    firstIndex: number;
    secondIndex: number;
    currentArray: Array<number>;
}

export function bubbleSort(shuffledNumsArr: Array<number>): {
            algorithmSteps: Array<SortAlgorithmStep>,
            iterationCount: number,
            swapCount: number
    } {

    // Don't edit the original shuffled array
    const copyShuffledNumsArr = [...shuffledNumsArr] 
    const size = copyShuffledNumsArr.length
    
    let swapCount = 0
    let iterationCount = 0
    let algorithmSteps = [] // size = iterationCount + swapCount ??
    
    let isSorted = false
    while (!isSorted) {
        isSorted = true

        for (let barIndex = 0; barIndex < size - 1; barIndex++) {
            iterationCount += 1
            algorithmSteps.push({
                firstIndex: barIndex,
                secondIndex: barIndex + 1,
                currentArray: [...copyShuffledNumsArr]
            })



            if (copyShuffledNumsArr[barIndex] > copyShuffledNumsArr[barIndex + 1]) {
                const temp = copyShuffledNumsArr[barIndex];
                copyShuffledNumsArr[barIndex] = copyShuffledNumsArr[barIndex + 1]
                copyShuffledNumsArr[barIndex + 1] = temp
                swapCount += 1
                isSorted = false
                algorithmSteps.push({
                    firstIndex: barIndex + 1,
                    secondIndex: barIndex,
                    currentArray: [...copyShuffledNumsArr]
                })
            }
        }
    }


    return ({
        algorithmSteps: algorithmSteps,
        iterationCount: iterationCount,
        swapCount: swapCount
    })
}