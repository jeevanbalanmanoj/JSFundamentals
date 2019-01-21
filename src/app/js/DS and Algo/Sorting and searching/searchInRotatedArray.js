(function () {

    let binarySearch = function (a, start, end, key) {
        if (end < start)
            return -1;
        let mid = Math.floor((start + end) / 2);
        console.log(" Visiting ", a[mid]);
        if (a[mid] === key)
            return mid;
        if (key < a[mid])
            return binarySearch(a, start, mid - 1, key);
        return binarySearch(a, mid + 1, end, key);
    }
    let binarySearchInRotatedArray = function (a, start, end, key) {
        if (end < start)
            return -1;
        let mid = Math.floor((start + end) / 2);
        console.log(" Visiting ", a[mid]);

        if (a[mid] === key)
            return mid;

        let result = -1;
        if (key < a[mid]) {
            result = binarySearchInRotatedArray(a, start, mid - 1, key);
            // If not found and right is mid ordered recurse there
            if (result === -1 && a[end] < a[mid]) {
                result = binarySearchInRotatedArray(a, mid + 1, end, key);
            }
        }
        else {
            if (result === -1) {
                result = binarySearchInRotatedArray(a, mid + 1, end, key);
                // If not found and left is mid ordered recurse there
                if (result === -1 && a[start] > a[mid]) {
                    result = binarySearchInRotatedArray(a, start, mid - 1, key);
                }
            }
        }
        return result;
    }


    let a = [1, 2, 3, 4, 5];
    console.log(binarySearch(a, 0, a.length - 1, 5))

    let b = [4, 5, 1, 2, 3];
    console.log(binarySearchInRotatedArray(b, 0, b.length - 1, 5))


})();
