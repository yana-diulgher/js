function onClickButton () {
    alert('вы нажали на меня');
}
function onDBLClickButton () {
    alert('вы нажали на меня дважды');
}


// var counter = 0;

// function onClickButton () {
//    counter++;
//    console.log(counter);
// }

 var counter = 0;

 function onClickButtont (el) {
   counter++;
   el.innerHTML = 'вы нажали на кнопку: ' + counter;
   el.style.background = "red";
   el.style.color = "blue";

//    el.style.cssText = "bordr-radius: 5px; border: 0; font-size: 20px";
   console.log(el.name);
 }

 function oninput(el) {
    if (el == "hi")
    alert('и тебе привет');
    console.log(el.value);

    var text = docyment.getElementById('text');
    console.log(text.id);
    console.log(text.title);
    text.title = "new text";

    text.style.color = "red";

} 
 