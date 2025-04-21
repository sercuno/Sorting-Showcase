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

document.getElementById("selectionSort").addEventListener('click', function(event) {
    event.preventDefault();
    
    document.body.innerHTML = `
    <h1>Selection Sort</h1>
    <form id="selectionSortID">
        <label for="txt-input">Text (space in-between required):</label>
        <input type="text" id="txt-input" placeholder=".e.g. 59 94 120 21"><br><br>
        <button type="submit">Send-inn</button>
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
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> ${(end - start).toFixed(2)} ms`;
        } else {
            paragraphRestultat.innerHTML = `<strong>Sorted Text: Empty</strong>`;
            paragraphTime.innerHTML = `<strong>Time Taken:</strong> 0 ms`;
        }
    });
});
