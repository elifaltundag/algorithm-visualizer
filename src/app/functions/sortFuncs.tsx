export interface SortAlgorithmStep {
    firstIndex: number;
    firstNum: number;
    secondIndex: number;
    secondNum: number;
    // requiresSwap: boolean;
}

export function bubbleSort(shuffledNumsArr: Array<number>): {
            algorithmSteps: Array<SortAlgorithmStep>,
            iterationCount: number,
            swapCount: number
    } {

    const copyShuffledNumsArr = [...shuffledNumsArr] 
    const size = copyShuffledNumsArr.length
    let swapCount = 0
    let iterationCount = 0
    let algorithmSteps = [] // size = iterationCount + swapCount ??
    
    let isSorted = false
    while (!isSorted) {
        isSorted = true

        for (let indx = 0; indx < size; indx++) {
            iterationCount += 1
            algorithmSteps.push({
                firstIndex: indx,
                firstNum: copyShuffledNumsArr[indx],
                secondIndex: indx + 1,
                secondNum: copyShuffledNumsArr[indx+1],
                // requiresSwap: false
            })



            if (copyShuffledNumsArr[indx] > copyShuffledNumsArr[indx + 1]) {
                const temp = copyShuffledNumsArr[indx];
                copyShuffledNumsArr[indx] = copyShuffledNumsArr[indx + 1]
                copyShuffledNumsArr[indx + 1] = temp
                swapCount += 1
                isSorted = false
                algorithmSteps.push({
                    firstIndex: indx,
                    firstNum: copyShuffledNumsArr[indx],
                    secondIndex: indx + 1,
                    secondNum: copyShuffledNumsArr[indx+1],
                    // requiresSwap: false
                })
                // algorithmSteps[algorithmSteps.length - 1].requiresSwap = true
            }
        }
    }


    return ({
        algorithmSteps: algorithmSteps,
        iterationCount: iterationCount,
        swapCount: swapCount
    })
}