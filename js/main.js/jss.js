var text = document.getElementById('text1');
// console.log(text.id);
text.title = "new title";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "new<br>string";


 document.getElementById('text1').style.color = 'white';


// var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple-text');

for(var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

document.getElementById('main-form').addEventListener('submit', checkForm);



// function checkForm(el) {


function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');
    // console.log("text");

    // var name = document.getElementById('name').value;
    // console.log(name);
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
     console.log(name + ' - ' + state + ' - ' + pass + ' - ' + repass);

    var error = '';
    if(name == '' || pass == '' || state == '')
    error = 'заполните все поля';
    else if(name.length <= 1 || name.length > 50)
    error = 'ввежите корректное имя';
    else if(pass != repass)
    error = 'пароли должны совпадать';
    else if(pass.split('#').length >1)
    error = 'некорретный пароль';

    if(error !='')
   
    document.getElementById('fail').innerHTML = error;
       
    
    // {
    //     document.getElementById('fail').innerHTML = error;
    //     return false;
    // } 
    else {
        alert('все данные корректно заполнены');
        // window.location = 'https://itproger.com';

        // return true;
    }

//    return false;
}
