function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function bubbleSort(arr, time) {

    var elements = document.getElementsByClassName('bar');

    var animationSeq = getAnimationSeq(arr);

    for (var i = 1; i < animationSeq.length; i++) {

        var arrStyleOne = elements[animationSeq[i][1]].style;
        var arrStyleTwo = elements[animationSeq[i][2]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            arrStyleOne.backgroundColor = 'red';
            arrStyleTwo.backgroundColor = 'red';
            await delay(time);
            arrStyleOne.backgroundColor = '#f5f0e5';
            arrStyleTwo.backgroundColor = '#f5f0e5';
        } else {
        // height change
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

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            seq.push([0, j, j+1]);
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                seq.push([1, j, j+1]);
            }
        }
    }

    return seq;
}