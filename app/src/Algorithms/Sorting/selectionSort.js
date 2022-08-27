function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function selectionSort(arr, time) {

    var elements = document.getElementsByClassName('bar');

    var animationSeq = getAnimationSeq(arr);

    var orange = null;

    for (var i = 1; i < animationSeq.length; i++) {

        if (animationSeq[i][0] == 2) {
            await delay(time);
            var arrStyleOne = elements[animationSeq[i][1]].style;
            if (orange != null) {
                orange.backgroundColor = '#f5f0e5';
            }
            arrStyleOne.backgroundColor = 'orange';
            orange = arrStyleOne;
            continue;
        }

        var arrStyleOne = elements[animationSeq[i][1]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            arrStyleOne.backgroundColor = 'red';
            await delay(time);
            arrStyleOne.backgroundColor = '#f5f0e5';
        } else {
        // height change
            var arrStyleTwo = elements[animationSeq[i][2]].style;
            await delay(time);
            var temp = arrStyleOne.height;
            arrStyleOne.height = arrStyleTwo.height;
            arrStyleTwo.height = temp;
        }

    }
}

function getAnimationSeq(arr) {
    var seq = [[]];

    var n = arr.length;

    var j, min;

    // One by one move boundary of unsorted subarray
    for (var i = 0; i < n-1; i++) {
        // Find the minimum element in unsorted array
        min = i;
        for (j = i + 1; j < n; j++) {
            seq.push([0, j]);
            if (arr[j] < arr[min]) {
                seq.push([2, j]);
                min = j;
            }
        }

        // Swap the found minimum element with the first element
        seq.push([1, i, min]);
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return seq;
}