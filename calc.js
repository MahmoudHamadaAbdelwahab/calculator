const input = document.querySelector("#input");

function add (e){
input.value += e;
}
function clear(){
    const clear = document.querySelector(".clear");
    clear.addEventListener("click" , function(){
        input.value = "";
    })
}
function exe(){
input.value = eval(input.value)
}
function cancel(){
input.value = input.value.substr(0, input.value.length-1)
}

