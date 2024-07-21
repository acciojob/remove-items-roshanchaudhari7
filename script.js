//your JS code here. If required.
let butt_on = document.querySelector('input[type="button"][value="Select and Remove"]');
let select = document.querySelector("#colorSelect");

butt_on.addEventListener("click", deleted);

function deleted() {
	let selected = select.selected;
    select.remove(selected);
}