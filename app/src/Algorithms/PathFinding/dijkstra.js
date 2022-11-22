export default function dijkstraAlgorithm(arr, start, end) {
    var size = arr.length * arr[1].length;
    var current = start;
    var currentDis = 0;
    var newDis = 0;

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
        var val = arr[current[0]][current[1]+1];
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