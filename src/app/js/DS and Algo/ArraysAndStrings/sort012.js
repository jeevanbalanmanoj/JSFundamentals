function sort012(arr) {
    let start = 0;
    let mid = 0
    high = arr.length - 1;
    let temp  =0
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                temp = arr[start];
                arr[start] = arr[mid];
                arr[mid] = temp;
                start++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high--;
                break;
        }

    }
};

let numbers = [0, 2, 1, 2, 0, 0]
sort012(numbers);
console.log(numbers);