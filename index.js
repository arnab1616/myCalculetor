for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var btnVal=this.innerText;
        showInDisplay(btnVal);
    });
   
}
document.addEventListener("keypress", (event)=>{
    var pressBtn = event.key;
    showInDisplay(pressBtn);
})
function showInDisplay(btn){
    // document.querySelector(".calculetor input").value +=btn;
    switch(btn){
        case 'AC':
            document.querySelector(".calculetor input").value = '';
        break;
        case 'Del':
            document.querySelector(".calculetor input").value = document.querySelector(".calculetor input").value.toString().slice(0,-1);
        break;
        case '00':
            document.querySelector(".calculetor input").value += '00';
        break;
        case '0':
            document.querySelector(".calculetor input").value += '0';
        break;
        case '=':
            document.querySelector(".calculetor input").value = eval(document.querySelector(".calculetor input").value);
        break;
        case 'Enter':
            document.querySelector(".calculetor input").value = eval(document.querySelector(".calculetor input").value);
        break;
        default:
            if(btn!== '=')
            document.querySelector(".calculetor input").value +=btn;
        break;
    }
}
