let textarea = document.getElementsByTagName('textarea')[0];
textarea.addEventListener('keydown', resize);

let val1;
let val2;
let val3;

function resize() {
    let el = this;
    setTimeout(function() {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 1);
}

function validMail() {
    let re = /^\w[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById("email").value;
    let valid = re.test(myMail);
    let output;
    if (valid) return valid;
}

function validName() {
    let re = /^[\u0400-\u04FF]+$/;
    let myName = document.getElementById("name").value;
    let valid = re.test(myName);
    if (valid) {
        return valid;
    }
}

function validTitle() {
    let re = /^[\u0400-\u04FF]+$/;
    let myTitle = document.getElementById("title").value;
    let valid = re.test(myTitle);
    if (valid) {
        return valid;
    }
}

function valid() {
    val1 = validName();
    val2 = validMail();
    val3 = validTitle();
    if(val1 && val2 && val3){
        document.getElementById("recall").innerHTML = "<b>Данные введены верно</b>";
    }
    else if(!(val1) && val2 && val3)
    {
        document.getElementById("recall").innerHTML = "<b>Неправильно введено имя</b>";
    }
    else if(val1 && !(val2) && val3)
    {
        document.getElementById("recall").innerHTML = "<b>Неправильно введена эл. почта</b>";
    }
    else if(val1 && val2 && !(val3))
    {
        document.getElementById("recall").innerHTML = "<b>Неправильно введен заголовок</b>";
    }
    else
    {
        document.getElementById("recall").innerHTML = "<b>Данные введены неправильно</b>"
    }
}
