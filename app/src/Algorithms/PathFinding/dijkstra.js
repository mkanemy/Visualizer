export default function dijkstraAlgorithm(arr, start, end) {
    console.log(arr, start, end);
    arr[start[0]+1][start[1]][1].style.backgroundColor = 'red';
    arr[start[0]-1][start[1]][1].style.backgroundColor = 'yellow';
    arr[start[0]][start[1]+1][1].style.backgroundColor = 'orange';
    arr[start[0]][start[1]-1][1].style.backgroundColor = 'purple';
}