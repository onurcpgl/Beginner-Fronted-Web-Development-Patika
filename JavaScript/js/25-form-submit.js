

// FORM SUBMIT:

let formDOM1 = document.querySelector("#userForm1")
formDOM1.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
    let sayi=document.querySelector('#sayi');
    console.log(sayi.value);
}
