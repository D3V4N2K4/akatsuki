for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(i){
    var buttonclick=this.innerHTML;
    console.log(buttonclick);
    switch (buttonclick){
    case 'hidan':
    var Hidan = new Audio('sounds/Hidan.mp3');
    Hidan.play();
    break;
    case 'deidara':
    var deidara = new Audio('sounds/deidara.mp3');
    deidara.play();
    break;
    case 'itachi':
    var Itachi = new Audio('sounds/Itachi.mp3');
    Itachi.play();
    break;
    case 'kakuzu':
    var Katon = new Audio('sounds/Katon.mp3');
    Katon.play();
    break;
    case 'madara':
    var Madara = new Audio('sounds/Madara.mp3');
    Madara.play();
    break;
    case 'obito':
    var obito = new Audio('sounds/obito.mp3');
    obito.play();
    break;
    case 'pain':
    var pain = new Audio('sounds/pain.mp3');
    pain.play();
    break;
    default:
    break;
}

}
)
}