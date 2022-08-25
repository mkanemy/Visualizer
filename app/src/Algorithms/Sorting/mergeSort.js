var seq = [[]];
var index;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function bubbleSort(arr) {

    var elements = document.getElementsByClassName('bar');

    mergeSort(arr);

    var animationSeq = seq;

    for (var i = 1; i < animationSeq.length; i++) {

        var arrStyleOne = elements[animationSeq[i][1]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            await delay(5);
            arrStyleOne.backgroundColor = 'red';
            await delay(5);
            arrStyleOne.backgroundColor = '#f5f0e5';
        } else {
        // height change
            var arrStyleTwo = elements[animationSeq[i][2]].style;
            await delay(5);
            var temp = arrStyleOne.height;
            arrStyleOne.height = arrStyleTwo.height;
            arrStyleTwo.height = temp;
        }

    }
}

function merge(left, right) {
    let sortedArr = []; // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
            seq.push([1, sortedArr.length - 1, index - left.length])
        } else {
            sortedArr.push(right.shift());
            seq.push([1, sortedArr.length - 1, index])
        }
    }

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    seq.push([0, mid]);
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    index = left.length;
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}