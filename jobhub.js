// navbar
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if($(this).scrollTop() > 500){
            $('.scrollup').addClass("show");
        } else {
            $('.scrollup').removeClass("show");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // slide up
    $('.scrollup').click(function(){
        $('html, body').animate({scrollTop: 0}, 1);
        return false;
    });
});


// tablinks
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
};

// typing animation 
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing", {
        strings: ["Director", "Editor" , "Developer", "Freelancer", "Designer", "Blogger" , "Pogi" , "Bilyarista"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykDkLubGu1pmzU8nkkdFbqHMYT1GF9KnEhYlCPoycVXRFo_24xdSrXPljTQ_Dq6J2s/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully."
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
    });
  });
  
