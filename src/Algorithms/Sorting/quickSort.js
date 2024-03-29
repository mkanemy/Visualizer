var quickSec = [[]];

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function quickSort(arr, time) {

    quickSec = [[]];

    var elements = document.getElementsByClassName('bar');

    var length = elements.length;

    arr = quick(arr);

    var animationSeq = quickSec;

    for (var i = 1; i < animationSeq.length; i++) {

        if (length != elements.length) {
            return;
        }

        var arrStyleOne = elements[animationSeq[i][1]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            await delay(time/2);
            arrStyleOne.backgroundColor = 'red';
            await delay(time/2);
            arrStyleOne.backgroundColor = '#f5f0e5';
        } else if (animationSeq[i][0] == 1) {
        // height change
            var arrStyleTwo = elements[animationSeq[i][2]].style;
            await delay(time);
            var temp = arrStyleOne.height;
            arrStyleOne.height = arrStyleTwo.height;
            arrStyleTwo.height = temp;
        } else {
            arrStyleOne.backgroundColor = 'green';
        }

    }
}

function partition(arr, start, end) {
    const pivotValue = arr[start];
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            swapIndex++
            if (i !== swapIndex) {
                // SWAP
                var temp = arr[i];
                arr[i] = arr[swapIndex];
                arr[swapIndex] = temp;
                quickSec.push([1, i, swapIndex]);
            }
        }
    }
    if (swapIndex !== start) {
        // Swap pivot into correct place
        var temp = arr[start];
        arr[start] = arr[swapIndex];
        arr[swapIndex] = temp;
        quickSec.push([1, start, swapIndex]);
    }
    return swapIndex;
}

function quick(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end);
    // Left
    quick(arr, start, pivotIndex - 1)
    // Right
    quick(arr, pivotIndex + 1, end)
    return arr
}