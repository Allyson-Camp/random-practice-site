//select boxes
function handleSelect(event) {
    event.preventDefault();
    const selection = document.getElementById("beverage").value;
}

// window.addEventListener("load", function () {
//     document
//         .getElementById("select-form")
//         .addEventListener("submit", handleSelect);
// });

//radio buttons

function handleRadio(event) {
    event.preventDefault();
    const radioSelection = document.querySelector(
        "input[name='flavor']:checked"
    ).value;
}

window.addEventListener("load", function () {

    document.getElementById("radio-form");
  document.addEventListener("submit", handleRadio);
  
    document.getElementById("select-form");
  document.addEventListener("submit", handleSelect);
  
    const dob = document.getElementById("born").value;
    const favoriteColor = document.getElementById("color").value;
});
