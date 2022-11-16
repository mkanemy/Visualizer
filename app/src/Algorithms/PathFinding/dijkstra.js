export default function dijkstraAlgorithm(arr, start, end) {
    console.log(arr, start, end);
    console.log(start[0]+1, arr.length);
    if (start[0]+1 >= arr.length || start[0]-1 <= 0) {
        return;
    }
    arr[start[0]+1][start[1]][1].style.backgroundColor = 'red';
    arr[start[0]-1][start[1]][1].style.backgroundColor = 'yellow';
    // arr[start[0]][start[1]+1][1].style.backgroundColor = 'orange';
    // arr[start[0]][start[1]-1][1].style.backgroundColor = 'purple';
    dijkstraAlgorithm(arr, [start[0]+1, start[1]], end);
    dijkstraAlgorithm(arr, [start[0]-1, start[1]], end);
}