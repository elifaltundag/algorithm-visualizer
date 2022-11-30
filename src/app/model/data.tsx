// Sectional interfaces
/* 
interface TraversalData {
    * BFS vs DFS 
    10 2D maps 
    
}


interface SearchData {
 
    * Linear vs Binary Search 
    number of elements
    array: [1, 2, .... n] 
    target: number
    iteration count = {
        linear search: number
        binary search: number
    } 
    numElms: number;
    searchArr: Array<number>;
    target: number;
    iterationCount : {
        linear: number;
        binary: number
    }
    
    
}
*/




// Data object: 
// !hard-coded 
class SortData {
    constructor(
        public _numElms: number,
        public _sortedArr: Array<number> = [],
        public _shuffledArr: Array<number> = [],
        public _iterationCount: number = 0,
        public _swapCount: number = 0,
        public _algorithmSteps: Array<object> = []
    ) {}

    // Getters 
    public get numElms() {
        return this._numElms
    }

    public get sortedArr() {
        return this._sortedArr
    }

    public get shuffledArr() {
        return this._shuffledArr
    }

    public get iterationCount() {
        return this._iterationCount
    }

    public get swapCount() {
        return this._swapCount
    }

    public get algorithmSteps() {
        return this._algorithmSteps
    }

    // Setters
    public set numElms(newNumElms: number) {
        this._numElms = newNumElms
    }

    public set sortedArr(newArr: Array<number>) {
        this._sortedArr = newArr
    }

    public set shuffledArr(newArr: Array<number>) {
        this._shuffledArr = newArr
    }

    public set iterationCount(iter: number) {
        this._iterationCount = iter
    }

    public set swapCount(swap: number) {
        this._swapCount = swap
    }

    public set algorithmSteps(newArr: Array<object>) {
        this._algorithmSteps = newArr
    }
}

export const sortData = new SortData(20)