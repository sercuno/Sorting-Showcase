// Selection Sort 
function selectionSort(arr) {
    if (arr.length === 0) {
        return "empty";  
    }
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_indx = i;
        for (let j = i + 1; j < n; j++) {
            if (!isNaN(arr[j]) && !isNaN(arr[min_indx])) {
                if (Number(arr[j]) < Number(arr[min_indx])) {
                    min_indx = j;
                }
            } else {
                if (String(arr[j]).localeCompare(String(arr[min_indx])) < 0) {
                    min_indx = j;
                }
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_indx];
        arr[min_indx] = temp;
    }
    return arr;
}

// bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr; 
}

// selection sort page
document.getElementById("selectionSort").addEventListener('click', function(event) {
    event.preventDefault();

    document.body.innerHTML = `
    <h1>Selection Sort</h1>
    <p>
    Selection Sort is a comparison-based sorting algorithm.
    It works by repeatedly selecting the smallest (or largest)
    element from the unsorted part of an array and swapping it with the first unsorted element. 
    This process continues until the entire array is sorted.
    </p>
    <p><strong>Time Complexity:</strong> O(n²)</strong></p>
    <p><strong>Auxiliary Space:</strong> O(1)</strong></p>
    <form id="selectionSortID">
        <label for="txt-input">Text (space in-between required):</label>
        <input type="text" id="txt-input" placeholder=".e.g. 59 94 120 21"><br><br>
        <button type="submit">Send-inn</button>
        <button onclick="location.reload()">Return</button>
    </form>
    <p id="resultat"></p>
    <p id="time"></p>`;

    const form = document.getElementById("selectionSortID");
    const input = document.getElementById("txt-input");
    const paragraphRestultat = document.getElementById("resultat");
    const paragraphTime = document.getElementById("time");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        paragraphRestultat.innerHTML = "";
        paragraphTime.innerHTML = "";
        const value = input.value.trim();
        if (value !== "") {
            let txtArr = value.split(" ");
            const start = performance.now();
            let result = selectionSort(txtArr);
            const end = performance.now();
            paragraphRestultat.innerHTML = `<strong>Sorted Text:</strong> ${result.join(" ")}`;
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> ${(end - start).toFixed(10)} ms`;
        } else {
            paragraphRestultat.innerHTML = `<strong>Sorted Text: Empty</strong>`;
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> 0 ms`;
        }
    });
});

// bubble sort page

document.getElementById("bubbleSort").addEventListener('click', function(event) {
    event.preventDefault();

    document.body.innerHTML = `
    <h1>Bubble Sort</h1>
    <p>
    Bubble Sort is a simple comparison-based sorting algorithm. 
    It works by repeatedly swapping adjacent elements if they are in 
    the wrong order (i.e., if the left element is greater than the right one). 
    This process continues until the array is completely sorted.
    </p>
    <p><strong>Time Complexity:</strong> O(n²)</strong></p>
    <p><strong>Auxiliary Space:</strong> O(1)</strong></p>
    <form id="bubbleSortID">
        <label for="txt-input">Text (space in-between required):</label>
        <input type="text" id="txt-input" placeholder=".e.g. 59 94 120 21"><br><br>
        <button type="submit">Send-inn</button>
        <button onclick="location.reload()">Return</button>
    </form>
    <p id="resultat"></p>
    <p id="time"></p>`;

    const form = document.getElementById("bubbleSortID");
    const input = document.getElementById("txt-input");
    const paragraphRestultat = document.getElementById("resultat");
    const paragraphTime = document.getElementById("time");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        paragraphRestultat.innerHTML = "";
        paragraphTime.innerHTML = "";
        const value = input.value.trim();
        if (value !== "") {
            let txtArr = value.split(" ");
            const start = performance.now();
            let result = bubbleSort(txtArr);
            const end = performance.now();
            paragraphRestultat.innerHTML = `<strong>Sorted Text:</strong> ${result.join(" ")}`;
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> ${(end - start).toFixed(10)} ms`;
        } else {
            paragraphRestultat.innerHTML = `<strong>Sorted Text: Empty</strong>`;
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> 0 ms`;
        }
    });
});
