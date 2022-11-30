import React, { useRef } from "react";

// Model data
import { sortData } from "../../../model/data";
// View component
import SortCanvas from "./SortCanvas";

// Functions 
import { generateSortedArr, shuffleArr } from "../../../functions/arrayFuncs";

export default function ControlSortCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Get number of elements 
    const numElms = sortData.numElms
    
    // Set sorted and shuffled arrays (initially empty)
    const sortedArray = generateSortedArr(numElms)
    sortData.sortedArr = sortedArray
    
    const shuffledArray = shuffleArr(sortedArray)
    sortData.shuffledArr = shuffledArray


    return (
        <SortCanvas 
            canvasRef={canvasRef}
            width={1200}
            height={1200}
            numElms={numElms}
            sortedArr={sortedArray}
            shuffledArr={shuffledArray}
        />
    )
}