import '../Styles/Sort.css';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import bubbleSort from '../Algorithms/Sorting/bubbleSort.js';
import insertionSort from '../Algorithms/Sorting/insertionSort';
import selectionSort from '../Algorithms/Sorting/selectionSort';
import quickSort from '../Algorithms/Sorting/quickSort';
import mergeSort from '../Algorithms/Sorting/mergeSort.js';

function initializeArray(arr, num) {
    for (var i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * (Math.round(window.innerHeight / 100) * 80)) + 15; // random between 1 & Math.round(window.innerHeight / 100)
    }
}

function Sort() {

    var array = [];

    return (
        <div className="Sort">

            <div className="Header">
                <div className="Title">Sorting Algorithms</div> {/* change after form submitted */}
                <div className="Form">

                    <Button variant="contained" size="small" onClick={() => { bubbleSort(array) }}>Bubble Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { insertionSort(array) }}>Insertion Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { selectionSort(array) }}>Selection Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { mergeSort(array) }}>Merge Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { quickSort(array) }}>Quick Sort</Button>
                </div>
            </div>
            <div className="Body">
                {initializeArray(array, 100)}
                {array.map((x, i) => (
                    <div className="bar" style={{height: `${x}px`}} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default Sort;