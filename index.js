//document.getElementById("count-el").innerText = 5

//intialize the count as 0
//listen for clicks on the increment button
//increment the count button when the button is clicked
//change the count-el to reflect the count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
save()

