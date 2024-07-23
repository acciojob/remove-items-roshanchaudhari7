//your JS code here. If required.
let btn = document.querySelector('input[type="button"][value="Select and Remove"]');
let select = document.querySelector("#colorSelect");

btn.addEventListener("click", deletedList);

function deletedList() {
    select.remove(select.selectedIndex);
}