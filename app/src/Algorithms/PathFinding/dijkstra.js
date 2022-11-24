export class Node {
    constructor(x, y, char, dis, parent, el) {
        this.dis = dis;
        this.car = char;
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.el = el;
    }

    get coords() {
        return [this.x, this.y];
    }

    get color() {
        return this.el.style.backgroundColor;
    }

    style(color) {
        this.el.style.backgroundColor = color;
    }
}

// Construct array
export default function dijkstraAlgorithm() {
    var arr = [[Node]];
    var start, end;
    var rows = document.getElementsByClassName("hr");
    for (var i = 0; i < rows.length; i++) {
        var box = rows[i].getElementsByClassName("box");
        var arr2 = [];
        for (var j = 0; j < box.length; j++) {
            var node = new Node(i+1, j, '0', Number.MAX_SAFE_INTEGER, null, box[j]);
            if (node.color == 'green') {
                node.char = 'S';
                var start = [i+1, j];
            } else if (node.color == 'black') {
                node.char = 'E';
                var end = [i+1, j];
            } else if (node.color == 'blue') {
                node.char = 'X'
                node.dis = -3;
            } 
            arr2.push(node);
        }
        arr.push(arr2);
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j].x, ", ", arr[i][j].y, ", ", arr[i][j].dis);
        }
    }
    dijkstras(arr, start, end);
}

function dijkstras(arr, start, end) {
    var size = arr.length * arr[1].length;
    var current = start;
    var currentDis = 0;
    var newDis = 0;
    var val = [];

    for (var i = size; i > 0; i--) {
        if (arr[current[0]][current[1]][0] == -2) {
            return;
        }
        if (currentDis != 0) {
            currentDis = arr[current[0]][current[1]][0];
        }

        if (current[0] < 0 || current[0] > arr.length || current[1] < 0 || current[1] > arr[1].length) {
            return;
        }

        arr[current[0]][current[1]][0] = -5;

        // if (arr[current[0]+1][current[1]][0] != -5) {
        //     arr[start[0]+1][start[1]][1].style.backgroundColor = 'blue';
        //     newDis = currentDis + 1;
        //     if (newDis < arr[current[0]+1][current[1]][0]) {
        //         arr[current[0]+1][current[1]][0] = newDis;
        //         // SET PARENT????
        //         current = arr[current[0]+1][current[1]][0];
        //     }
        // }
        // if (arr[current[0]-1][current[1]][0] != -5) {
        //     arr[start[0]-1][start[1]][1].style.backgroundColor = 'blue';
        //     newDis = currentDis + 1;
        //     if (newDis < arr[current[0]-1][current[1]][0]) {
        //         arr[current[0]-1][current[1]][0] = newDis;
        //         // SET PARENT????
        //     }
        // }
        val = arr[current[0]][current[1]+1];
        if (val[0] != -5) {
            val[1].style.backgroundColor = 'orange';
            newDis = currentDis + 1;
            console.log(newDis);
            if (newDis < val[0]) {
                val[0] = newDis;
                // SET PARENT????
                current = [current[0], current[1]+1];
            }
        }
        // if (arr[current[0]][current[1]-1][0] != -5) {
        //     arr[start[0]][start[1]-1][1].style.backgroundColor = 'blue';
        //     newDis = currentDis + 1;
        //     if (newDis < arr[current[0]][current[1]-1][0]) {
        //         arr[current[0]][current[1]-1][0] = newDis;
        //         // SET PARENT????
        //     }
        // }
    }
}