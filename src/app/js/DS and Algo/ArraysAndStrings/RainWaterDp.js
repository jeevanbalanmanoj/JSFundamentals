function getVolume(bar) {
    let max = 0;
    let  maxL =[]
    let maxR = []
    let volume = 0;
    // Get the largest bar on the left
    for (let i = 0; i < bar.length; i++) {
        maxL[i] = max;
        max = Math.max(max, bar[i]);
    }
    max = 0;
    // Get the largest bar on the right
    for (let i = bar.length - 1; i >= 0; i--) {
        maxR[i] = max;
        max = Math.max(max, bar[i]);
    }
    // water collected will be (smallest of two maximas - height of the current bar) 
    // or zero if the result is negative )
    for (let i = 0; i < bar.length; i++) {
        let min = Math.min(maxR[i], maxL[i]);
        volume += Math.max(0, min - bar[i]);
    }
    return volume;
}

    let bar = [ 5, 2, 5 ];
    console.log(getVolume(bar));
    bar = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
    console.log(getVolume(bar));
    bar = [ 5,3,1];
    console.log(getVolume(bar));

