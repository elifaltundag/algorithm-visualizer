export function generateSortedArr(num: number): Array<number> {
    const sortedArr = []

    for (let i = 1; i <= num; i++) {
        sortedArr.push(i)
    }
    
    return sortedArr
}



export function shuffleArr(sortedArr: Array<number>): Array<number> {
    let shuffledArr = [...sortedArr]
    const size = shuffledArr.length

    for (let i = size - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * i)
            const temp = shuffledArr[randomIndex]
            shuffledArr[randomIndex] = shuffledArr[i]
            shuffledArr[i] = temp
    }
 
    return shuffledArr
}

