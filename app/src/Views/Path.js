import '../Styles/Path.css';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import dijkstraAlgorithm from '../Algorithms/PathFinding/dijkstra.js';
import { hover } from '@testing-library/user-event/dist/hover';

function initializeArray(x, y) {
    var arr = [];

    var index = 0;

    for (var i = 0; i < y; i++) {
        var arr2 = [];
        for (var j = 0; j < x; j++) {
            arr2[j] = index;
            index++;
        }
        arr[i] = arr2;
    }

    return arr;
}

function initStartEnd() {
    if (document.getElementById('965')) {
        document.getElementById('918').style.backgroundColor = 'green';
        document.getElementById('965').style.backgroundColor = 'black';
    }
}

function Path() {

    const [array, setArray] = useState([[]]);

    let start, end = false;
    var startElement, endElement = undefined;

    useEffect(() => {
        startElement = document.getElementById('918');
        endElement = document.getElementById('965');
    })

    window.mouseDown = false;
    document.onmousedown = function() {
        window.mouseDown = true;
        // console.log('click');
    }
    document.onmouseup = function() {
        window.mouseDown = false;
        // console.log('unclick');
    }

    useEffect(() => {
        setArray(initializeArray(65, 35));
    }, [])

    useEffect(() => {
        initStartEnd();
    })

    function hover(x) {
        var el = document.getElementById(x).style;

        if (window.mouseDown) {
            if (el.backgroundColor != 'green' && el.backgroundColor != 'black') {
                el.backgroundColor = 'blue';
            }
        }
    }

    function click(x) {
        var el = document.getElementById(x).style;

        if (el.backgroundColor == 'blue') {
            el.backgroundColor = 'white';
        } else {
            if (start) {
                if (startElement != undefined) {
                    startElement.style.backgroundColor = 'white';
                }
                el.backgroundColor = 'green';
                startElement = document.getElementById(x);
                start = false;
            } else if (end) {
                if (endElement != undefined) {
                    endElement.style.backgroundColor = 'white';
                }
                el.backgroundColor = 'black';
                endElement = document.getElementById(x);
                end = false;
            } else if (el.backgroundColor != 'green' && el.backgroundColor != 'black') {
                el.backgroundColor = 'blue';
            }
        }
    }

    function clearBoard() {
        var els = document.getElementsByClassName("box");
        for (var i = 0; i < els.length; i++) {
            els[i].style.backgroundColor = 'white';
        }
        startElement = document.getElementById('918');
        endElement = document.getElementById('965');
        initStartEnd();
    }

    function drawStart() {
        start = true;
    }

    function drawEnd() {
        end = true;
    }

    return (
        <div className="Path">

            <div className="Header">

                <Button className="Back" variant="contained" size="small" component={Link} to="../">Back</Button>

                <div className="Title">

                    <p>Path Finding Algorithms</p>
                </div>

                <div className="FormPath">
                    <div className="Algos">
                        <Button variant="contained" size="small" onClick={() => { dijkstraAlgorithm() }}>Dijkstras</Button>
                    </div>
                    <div className="Settings">
                        <Button variant="contained" size="small" onClick={() => { clearBoard() }}>Clear</Button>
                        <Button variant="contained" size="small" onClick={() => { drawStart() }}>Start Node</Button>
                        <Button variant="contained" size="small" onClick={() => { drawEnd() }}>End Node</Button>
                    </div>
                </div>
            </div>
            <div className="BodyPath">
                {array.map((x) => (
                    <div className="hr">
                        {x.map((y) => (
                            <button className="box" id={y} onMouseOver={() => { hover(y) }} onMouseDown={() => { click(y) }} style={{height: '10px', width: '10px'}} /*key={x * y + y}*//>
                        ))
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Path;