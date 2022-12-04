import React, { useRef } from "react";

// Model data
import { sortData } from "../../../model/data";
// View component
import SortCanvas from "./SortCanvas";

// Functions 
import { generateSortedArr, shuffleArr } from "../../../functions/arrayFuncs";
import { bubbleSortSteps } from "../../../functions/sortFuncs";

export default function ControlSortCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Get number of elements 
    const numElms = sortData.numElms
    
    // Set sorted and shuffled arrays (initially empty)
    const sortedArray = generateSortedArr(numElms)
    sortData.sortedArr = sortedArray
    
    const shuffledArray = shuffleArr(sortedArray)
    sortData.shuffledArr = shuffledArray


    const {algorithmSteps, iterationCount, swapCount} = bubbleSortSteps(shuffledArray)

    sortData.algorithmSteps = algorithmSteps
    sortData.iterationCount = iterationCount
    sortData.swapCount = swapCount


    return (
        <SortCanvas 
            canvasRef={canvasRef}
            shuffledArr={shuffledArray}
            sortedArr={sortedArray}
            algorithmSteps={algorithmSteps}
        />
    )
}