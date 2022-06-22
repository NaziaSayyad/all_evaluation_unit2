// All the JS Code for the Add Students Page Goes Here

document.querySelector("form").addEventListener("submit", myfunction);
let data_arr = JSON.parse(localStorage.getItem("admission")) || []

function myfunction(event) {
    event.preventDefault();
    let data_obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        ph_nu: document.querySelector("#phone").value,
        gender: document.querySelector("#gender").value,
        course: document.querySelector("#course").value,
    }
    data_arr.push(data_obj);
    localStorage.setItem("admission", JSON.stringify(data_arr));
}
