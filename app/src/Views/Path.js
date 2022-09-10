import '../Styles/Path.css';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import dijkstraAlgorithm from '../Algorithms/PathFinding/dijkstra.js';

function initializeArray(x, y) {
    var arr = [];

    for (var i = 0; i < y; i++) {
        var arr2 = [];
        for (var j = 0; j < x; j++) {
            arr2[j] = 0;
        }
        arr[i] = arr2;
    }

    return arr;
}

function Path() {

    const [array, setArray] = useState([[]]);

    useEffect(() => {
        setArray(initializeArray(65, 35));
    }, [])

    return (
        <div className="Sort">

            <div className="Header">

                <Button className="Back" variant="contained" size="small" component={Link} to="../">Back</Button>

                <div className="Title">

                    <p>Path Finding Algorithms</p>
                </div>

                <div className="Form">

                    <Button variant="contained" size="small" onClick={() => { dijkstraAlgorithm() }}>Dijkstras</Button>
                </div>
            </div>
            <div className="Body">
                {array.map((x) => (
                    <div className="hr">
                        {x.map((y) => (
                            <div className="box" style={{height: '10px', width: '10px'}} /*key={x * y + y}*//>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Path;