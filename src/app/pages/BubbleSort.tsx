import React from "react";

import Header from "../components/global/Header";
import Controller from "../components/global/Controller";
import ControlSortCanvas from "../components/sectional/sort/ControlSortCanvas";

import { bubbleSort } from "../functions/sortFuncs";

export default function BubbleSort(props: object) {
    return (
        <div id="bubbleSort">
            <Header title="Bubble Sort" />
            <Controller />
            <ControlSortCanvas />
        </div>
    )
}