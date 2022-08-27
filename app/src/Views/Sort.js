import '../Styles/Sort.css';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import bubbleSort from '../Algorithms/Sorting/bubbleSort.js';
import insertionSort from '../Algorithms/Sorting/insertionSort';
import selectionSort from '../Algorithms/Sorting/selectionSort';
import quickSort from '../Algorithms/Sorting/quickSort';
import mergeSort from '../Algorithms/Sorting/mergeSort.js';
import Slider from '@mui/material/Slider';

function initializeArray(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * (Math.round(window.innerHeight / 100) * 80)) + 15); // random between 1 & Math.round(window.innerHeight / 100)
    }

    return arr;
}

function Sort() {

    const [array, setArray] = useState([]);
    const [time, setTime] = useState(10);

    const changeValue = (event, value) => {

        if (value == array.length) {
            return;
        }

        setArray(initializeArray(value));
        if (value < 20) {
            setTime(100);
        } else if (value < 50) {
            setTime(20);
        } else if (value < 100) {
            setTime(10);
        } else if (value < 150) {
            setTime(5);
        } else {
            setTime(2);
        }
    };

    useEffect(() => {
        setArray(initializeArray(100));
    }, [])

    return (
        <div className="Sort">

            <div className="Header">
                <div className="Title">Sorting Algorithms</div>

                <Slider onChangeCommitted={ changeValue } defaultValue={100} min={10} max={200} aria-label="Default" valueLabelDisplay="auto" />

                <div className="Form">

                    <Button variant="contained" size="small" onClick={() => { bubbleSort(array, time) }}>Bubble Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { insertionSort(array, time) }}>Insertion Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { selectionSort(array, time) }}>Selection Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { mergeSort(array, time) }}>Merge Sort</Button>
                    <Button variant="contained" size="small" onClick={() => { quickSort(array, time) }}>Quick Sort</Button>
                </div>
            </div>
            <div className="Body">
                {array.map((x, i) => (
                    <div className="bar" style={{height: `${x}px`, width: `${300 / array.length}px`}} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default Sort;