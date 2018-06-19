'use strict';

(function () {
    let limit = 5;
    const interval = 1000;
    let i = 1;
    let timer = function(){
        setTimeout(function () {
            if (i > limit)
                return;
            console.log(i++);
            timer();
        }, interval);
    }
    timer();
})();