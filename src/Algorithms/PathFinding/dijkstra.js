function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export class Node {
    constructor(x, y, char, dis, parent, el) {
        this.dis = dis;
        this.car = char;
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.el = el;
        this.visited = false;
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
                start = [i+1, j];
                node.dis = 0;
            } else if (node.color == 'black') {
                node.char = 'E';
                end = [i+1, j];
            } else if (node.color == 'blue') {
                node.char = 'X'
                node.visited = true;
            } 
            arr2.push(node);
        }
        arr.push(arr2);
    }
    dijkstras(arr, start, end);
}

function checkDis(neighbour, current) {
    if (current.dis + 1 < neighbour.dis) {
        neighbour.dis = current.dis + 1;
    }
}

var visit = [];
async function dijkstras(arr, start, end) {
    visit.push(start);
    while (visit.length != 0) {
        await delay(0.5);
        var current = visit[0];
        var box = arr[current[0]][current[1]];
        if (current != start) {
            box.el.style.backgroundColor = "yellow";
        }
        box.visited = true;
        dijkstrasVisit(arr, current, end);
        visit.shift();
    }
}

async function drawPath(arr, x, y) {
    var box = arr[x][y];
    box.el.style.backgroundColor = "red"
    var dis = box.dis - 1;

    await delay(3);

    if (x > 1) {
        var left = arr[x-1][y];
        if (left.dis == dis) {
            drawPath(arr, x-1, y);
            return;
        }
    }
    if (x < arr.length - 1) {
        var right = arr[x+1][y];
        if (right.dis == dis) {
            drawPath(arr, x+1, y);
            return;
        }
    }
    if (y < arr[1].length - 1) {
        var up = arr[x][y+1];
        if (up.dis == dis) {
            drawPath(arr, x, y+1);
            return;
        }
    }
    if (y > 0) {
        var down = arr[x][y-1];
        if (down.dis == dis) {
            drawPath(arr, x, y-1);
            return;
        }
    }   
}

function dijkstrasVisit(arr, start, end) {
    var x = start[0];
    var y = start[1];
    var current = arr[x][y];

    if (x == end[0] && y == end[1]) {
        while (visit.length != 0) {
            visit.shift();
        }
        drawPath(arr, x, y);
        return;
    }

    if (x > 1) {
        var left = arr[x-1][y];
        if (!left.visited) {
            checkDis(left, current);
            if (!visit.some((v) => v[0] == x-1 && v[1] == y)) {
                visit.push([x-1, y]);
            }
        }
    }
    if (x < arr.length - 1) {
        var right = arr[x+1][y];
        if (!right.visited) {
            checkDis(right, current);
            if (!visit.some((v) => v[0] == x+1 && v[1] == y)) {
                visit.push([x+1, y]);
            }
        }
    }
    if (y < arr[1].length - 1) {
        var up = arr[x][y+1];
        if (!up.visited) {
            checkDis(up, current);
            if (!visit.some((v) => v[0] == x && v[1] == y+1)) {
                visit.push([x, y+1]);
            }
        }
    }
    if (y > 0) {
        var down = arr[x][y-1];
        if (!down.visited) {
            checkDis(down, current);
            if (!visit.some((v) => v[0] == x && v[1] == y-1)) {
                visit.push([x, y-1]);
            }
        }
    }
}