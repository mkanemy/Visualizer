export default function dijkstraAlgorithm(arr, start, end) {
    console.log(arr, start, end);
    console.log(start[0]+1, arr.length);
    if (start[0]+1 >= arr.length || start[0]-1 <= 0 || start[1]+1 >= arr[1].length || start[1]-1 <= 0) {
        return;
    }
    console.log(arr[start[0]][start[1]]);
    if (arr[start[0]][start[1]][0] == 'E') {
        return;
    }
    arr[start[0]+1][start[1]][1].style.backgroundColor = 'red'; // down
    arr[start[0]-1][start[1]][1].style.backgroundColor = 'yellow'; // up
    arr[start[0]][start[1]+1][1].style.backgroundColor = 'orange'; // right
    arr[start[0]][start[1]-1][1].style.backgroundColor = 'purple'; // left
    start[1]++;
    dijkstraAlgorithm(arr, start, end);
}