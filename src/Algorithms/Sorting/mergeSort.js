var seq = [[]];

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function mergeSort(arr, time) {

    var elements = document.getElementsByClassName('bar');

    var length = elements.length;

    arr = mergeSortSeq(arr, 0 , arr.length);

    var animationSeq = seq;

    for (var i = 1; i < animationSeq.length; i++) {

        if (length != elements.length) {
            return;
        }

        var arrStyleOne = elements[animationSeq[i][1]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            await delay(time / 2);
            arrStyleOne.backgroundColor = 'red';
            await delay(time / 2);
            arrStyleOne.backgroundColor = '#f5f0e5';
        } else {
        // height change
            // var arrStyleTwo = elements[animationSeq[i][2]].style;
            await delay(time);
            arrStyleOne.height = `${animationSeq[i][2]}px`; // GETTING OVERWRITTEN!!!! cant swap 2 elements??
        }

    }
}

function merge(left, right, l, mid, r) {
    var leftI = l;
    var rightI = r;

    let sortedArr = []; // the sorted items will go here
    let indices = [];
    
    var compOne = l;
    var compTwo = mid;

    while (left.length && right.length) {
        if (compOne - l < left.length) {
            seq.push([0, compOne]);
            compOne++;
        }
        if (compTwo - mid < right.length) {
            seq.push([0, compTwo]);
            compTwo++;
        }
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
            l++;
            // seq.push([1, sortedArr.length - 1, index])
        } else {
            sortedArr.push(right.shift());
            mid++;
            // seq.push([1, sortedArr.length - 1, index])
        }
    }

    sortedArr = [...sortedArr, ...left, ...right];

    var x = 0;
    for (var i = leftI; i < rightI; i++) {
        seq.push([1, i, sortedArr[x]]);
        x++;
    }

    return sortedArr;
}

function mergeSortSeq(arr, l, r) {
    // Base case
    if ((r - l) <= 1) {
        return [arr[r]];
    }
    let mid = Math.floor((l + r) / 2)
    // seq.push([0, mid]);
    // Recursive calls
    let left = mergeSortSeq(arr, l, mid);
    let right = mergeSortSeq(arr, mid, r);
    return merge(left, right, l, mid, r);
}