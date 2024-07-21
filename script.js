//your JS code here. If required.
let butt = document.querySelector('input[type="button"][value="Select and Remove"]');
let select = document.querySelector("#colorSelect");

butt.addEventListener("click", deleted);

function deleted() {
	let selected = select.selected;
    select.remove(selected);
}