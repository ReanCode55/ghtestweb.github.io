function openNav() {
    document.getElementById("myNav").style.width = "130px";
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.transition = "all 0.2s ease";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$("#click-icon-search").click(function(){
    $("#myForm").slideToggle(100);
});

// form for desktop
$("#open-singup-for-desktop").click(function(){
    $("#main-user-signup-for-desktop").show(100);
});
$("#open-singup-for-desktop").click(function(){
    $("#main-user-login-for-desktop").hide(100);
});


$("#open-login-for-desktop").click(function(){
    $("#main-user-login-for-desktop").show(100);
});
$("#open-login-for-desktop").click(function(){
    $("#main-user-signup-for-desktop").hide(100);
});

// form for mobile
$("#user").click(function(){
    $("#form-for-mobile").show(100);
});
$("#user").click(function(){
    $("#myNav").hide(100);
});

$("#open-singup-for-mobile").click(function(){
    $("#main-user-signup-for-mobile").show(100);
});
$("#open-singup-for-mobile").click(function(){
    $("#main-user-login-for-mobile").hide(100);
});


$("#open-login-for-mobile").click(function(){
    $("#main-user-login-for-mobile").show(100);
});
$("#open-login-for-mobile").click(function(){
    $("#main-user-signup-for-mobile").hide(100);
});


$("#close-form-1").click(function(){
    $("#form-for-mobile").hide(100);
});
$("#close-form-2").click(function(){
    $("#form-for-mobile").hide(100);
});





