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
        <label for="txt-input">Text </label>
        <input type="text" id="txt-input"><br><br>
        <button type="submit">Send-inn</button>
    </form>
    <p id="resultat"></p>`;

    const form = document.getElementById("selectionSortID")
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let paragraphRestultat = document.getElementById("resultat");
        paragraphRestultat.innerHTML = "";
        const txtInputValue = document.getElementById("txt-input");
        let txtArr = txtInputValue.value.split(" ");
        paragraphRestultat.innerHTML = selectionSort(txtArr).join(" ");
    })
});