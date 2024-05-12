const btn = document.querySelector(".convert");
const result = document.querySelector("#result");
const input = document.querySelector("#inputValue");
const type = document.querySelector('#type');


function temperature(){
    const inputValue = parseFloat(input.value);
    const selectedOption = type.value;
    // console.log(selectedOption);
    // console.log(inputValue);
    if(inputValue == ""){
        alert("please enter any number");
        location.reload()
    }
    else if(selectedOption == "celsius"){
        let far = (inputValue*(9/5)) + 32;
        let kel = inputValue + 273.15;
        result.innerHTML = `${far.toFixed(2) + `&deg;F`} and ${kel.toFixed(2) + " K"}` ;
    }
    else if(selectedOption == "fahrenheit"){
        let cel = (inputValue - 32) * 5/9;
        let kel = (inputValue - 32) * 5/9 + 273.15;
        result.innerHTML = `${cel.toFixed(2) + `&deg;C`} and ${kel.toFixed(2) + " K"}`;
    }else{
        let cel = (inputValue - 273.15);
        let far = (inputValue - 273.15) * 9/5 +32;
        result.innerHTML = `${cel.toFixed(2) + `&deg;C`} and ${far.toFixed(2) + " &deg;F"}`;
    }
}


btn.addEventListener("click", () => {
    // console.log("click");
    temperature();

})

