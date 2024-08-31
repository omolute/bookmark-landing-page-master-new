// features navigation
var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');

function tab1_display(){
    tab1.style.display = 'flex';
    tab2.style.display = 'none';
    tab3.style.display = 'none';
}
function tab2_display(){
    tab1.style.display = 'none';
    tab2.style.display = 'flex';
    tab3.style.display = 'none';
}
function tab3_display(){
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    tab3.style.display = 'flex';
}


// FAQ display
document.querySelector('.question1').addEventListener('click', function(){
    var answer1 = document.getElementById('answer1');
    var arrow1 = document.getElementById('arrow1');
    var close1 = document.getElementById('close1');
   
    if(answer1.style.display === 'none'){
        answer1.style.display = 'block';
        arrow1.style.display = 'none';
        close1.style.display = 'block';
    }
    else{
        answer1.style.display = 'none';
        arrow1.style.display = 'block';
        close1.style.display = 'none';
    }
});
document.querySelector('.question2').addEventListener('click', function(){
    var answer2 = document.getElementById('answer2');
    var arrow2 = document.getElementById('arrow2');
    var close2 = document.getElementById('close2');

    if(answer2.style.display === 'none'){
        answer2.style.display = 'block';
        arrow2.style.display = 'none';
        close2.style.display = 'block';
    }
    else{
        answer2.style.display = 'none';
        arrow2.style.display = 'block';
        close2.style.display = 'none';
    }
});
document.querySelector('.question3').addEventListener('click', function(){
    var answer3 = document.getElementById('answer3');
    var arrow3 = document.getElementById('arrow3');
    var close3 = document.getElementById('close3');

    if(answer3.style.display === 'none'){
        answer3.style.display = 'block';
        arrow3.style.display = 'none';
        close3.style.display = 'block';
    }
    else{
        answer3.style.display = 'none';
        arrow3.style.display = 'block';
        close3.style.display = 'none';
    }
});
document.querySelector('.question4').addEventListener('click', function(){
    var answer4 = document.getElementById('answer4');
    var arrow4 = document.getElementById('arrow4');
    var close4 = document.getElementById('close4');

    if(answer4.style.display === 'none'){
        answer4.style.display = 'block';
        arrow4.style.display = 'none';
        close4.style.display = 'block';
    }
    else{
        answer4.style.display = 'none';
        arrow4.style.display = 'block';
        close4.style.display = 'none';
    }
});


// mobile navigation display
var hamburger = document.getElementById('hamburger');
var close_icon = document.getElementById('close');
var mobile_nav = document.querySelector('.mobile_nav');

function open_nav(){
    close_icon.style.display = 'block';
    hamburger.style.display = 'none';
    mobile_nav.style.display = 'block';
}
function close_nav(){
    close_icon.style.display = 'none';
    hamburger.style.display = 'block';
    mobile_nav.style.display = 'none';
}


// email validation
document.getElementById('anchor').addEventListener('click', function(validate){
    validate.preventDefault();

    var email = document.getElementById('email').value;
    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var error = document.querySelector('.error');
    var error_message = document.getElementById('error_message');
    var email_props = document.getElementById('email');

    if(email_check){
        error_message.style.display = 'none';
        error.style.borderStyle = 'none';
        email_props.style.backgroundImage = 'none';
    }else{
        error_message.style.display = 'block';
        error.style.borderStyle = 'solid';
        email_props.style.backgroundImage = 'url(./images/icon-error.svg)'
    }
});