function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default async function insertionSort(arr) {

    var elements = document.getElementsByClassName('bar');

    var animationSeq = getAnimationSeq(arr);

    for (var i = 1; i < animationSeq.length; i++) {

        var arrStyleOne = elements[animationSeq[i][1]].style;
        var arrStyleTwo = elements[animationSeq[i][2]].style;

        // color change
        if (animationSeq[i][0] == 0) {
            await delay(25);
            arrStyleOne.backgroundColor = 'red';
            arrStyleTwo.backgroundColor = 'red';
            await delay(25);
            arrStyleOne.backgroundColor = '#f5f0e5';
            arrStyleTwo.backgroundColor = '#f5f0e5';
        } else {
        // height change
            await delay(25);
            var temp = arrStyleOne.height;
            arrStyleOne.height = arrStyleTwo.height;
            arrStyleTwo.height = temp;
        }

    }
}

function getAnimationSeq(arr) {
    var seq = [[]];

    var n = arr.length;
    var j, key;

    for (var i = 1; i < n; i++)  {  
        key = arr[i];  
        j = i - 1;  
    
        if (j >= 0) {
            seq.push([0, i, j]);
        }
        while (j >= 0 && arr[j] > key)  {  
            seq.push([1, j+1, j]);
            arr[j + 1] = arr[j];  
            j = j - 1;
            if (j >= 0) {
                seq.push([0, j+1, j]);
            }
        }  
        arr[j + 1] = key;  
    }  

    return seq;
}