// Smooth fade animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Active navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});

// Hero title animation

const title=document.querySelector(".hero h1");

let glow=true;

setInterval(()=>{

if(glow){
title.style.textShadow="0 0 45px #00aaff";
}else{
title.style.textShadow="0 0 20px #00aaff";
}

glow=!glow;

},1000);

// Member card hover effect

document.querySelectorAll(".member").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,#174f80,#101826)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#101826";

});

});

// Gallery placeholder click

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("click",()=>{

alert("Gallery image will open here.");

});

});