const listItems = document.querySelector(".items");
const gridWrapper = document.querySelector(".wrapper-grid");
document.getElementById("bar").addEventListener("click", handleDropDown);

function handleDropDown() {
    if (listItems.style.top !== "50px") {
        listItems.style.top = "50px";
        listItems.style.zIndex = "1";
        gridWrapper.style.marginTop = "17rem";
    } else {
        listItems.style.top = "-260px";
        gridWrapper.style.marginTop = "0";
    }
}