// Selection Sort 
function selectionSort(arr) {
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
    document.body.innerHTML = " ";
    document.body.innerHTML = `
    <h1>Selection Sort</h1>
    <form id="selectionSortID">
        <label for="txt-input">Text(space in-between required) </label>
        <input type="text" id="txt-input" placeholder=".e.g. 59 94 120 21"><br><br>
        <button type="submit">Send-inn</button>
    </form>
    <p id="resultat"></p>
    <p id="time"></p>`;

    const form = document.getElementById("selectionSortID")
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let paragraphRestultat = document.getElementById("resultat");
        let paragraphTime = document.getElementById("time");
        paragraphRestultat.innerHTML = "";
        paragraphTime.innerHTML = "";
        const txtInputValue = document.getElementById("txt-input");
        let txtArr = txtInputValue.value.split(" ");
        const start = performance.now();
        paragraphRestultat.innerHTML = `<strong>Sorted Text:</strong> ${selectionSort(txtArr).join(" ")}`;
        const end = performance.now();
        paragraphTime.innerHTML = `<strong>Time Taken:</strong> ${end - start} ms`;
    })
});