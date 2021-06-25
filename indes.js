var burger = document.querySelector(".burger");
var secoundpart = document.querySelector(".secoundpart")
var navbar = document.querySelector(".navbar");
burger.addEventListener("click" , function(){
    secoundpart.classList.toggle("secoundpart-active");
    // secoundpart.classList.toggle("v-resp");
    // secoundpart.classList.toggle("v-down-resp")
    

});





let progressbar = document.querySelector(".progressbar");
window.addEventListener("scroll" , function(){


   scrollpageheight = document.documentElement.scrollHeight - this.window.innerHeight;
//    console.log(scrollheight);
    let scrollheight = window.scrollY;
    // console.log(heigh);
    let final = scrollheight/(scrollpageheight/100);
   
    progressbar.style.width = final + "%";
});




window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    // document.getElementById("nav").style.border = "5px solid pink";
    // document.getElementById("nav").innerHTML = "scroll px solid pink";


    // #3cda7d
    if(scroll > 2){
    // document.getElementById("nav").style.background = "#94d0cc";
    // document.getElementById("nav").style.background = "#1eae98";
    
    }
    // else{
    // document.getElementById("nav").style.background = "#f6f6f6";

    // }
    
});

// document.getElementById("mousehov").addEventListener("onmouseover" , function(){
//     document.getElementsByClassName("progressbar").style.width = "0px";
// });

// let letsstart = document.getElementById("letsstart");
// letsstart.addEventListener("click",function(){
//     let scroll = window.scrollY;
//     let a = window.scrollBy({top:(720-scroll) , behavior:"smooth"});
    
    
    
// });

// document.getElementById("more").addEventListener("click" , function(){
        // if(document.getElementById("*submenu1").style.display == "none"){
        //     document.getElementById("*submenu1").style.display = "flex";
        // }
        // else{
        //     document.getElementById("*submenu1").style.display = "flex";
        // }
        // alert("rohit");

        // document.querySelector(".submenu1 li").classList.toggle("submenu1a");
// });

$("#letsstart").click(function() {
    $('html, body').animate({
        scrollTop: $("#move").offset().top += -82
    }, 300);
});

document.getElementById("more").addEventListener("click" , function(){
    
        if(document.getElementById("submenu11").style.display == "flex"){
            document.getElementById("submenu11").style.display = "none";
        }
        else
            document.getElementById("submenu11").style.display = "flex"
});
document.getElementById("practice").addEventListener("click" , function(){
    
        if(document.getElementById("submenu-0").style.display == "flex"){
            document.getElementById("submenu-0").style.display = "none";
        }
        else
            document.getElementById("submenu-0").style.display = "flex"
});