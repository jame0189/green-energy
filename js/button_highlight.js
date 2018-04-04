let switches = document.querySelectorAll(".buttons button");


function highlight(ev){
    
    let clickedButton = ev.target;
    
    for( let i = 0; i < switches.length; i++){
        if (switches[i].hasAttribute("class")){
           switches[i].removeAttribute("class");
           }
    }
    
    clickedButton.setAttribute("class","active");
    clickedButton.setAttribute("span","fa");
}

for(let i = 0; i < switches.length; i++){
    switches[i].addEventListener("click",highlight);
}


