// ==========================================
// Mithu Web IDE Website
// script.js
// Part 1
// ==========================================

// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(link.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ----------------------------
// Header Scroll Effect
// ----------------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(9,15,28,.92)";

        header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(9,15,28,.72)";

        header.style.boxShadow="none";

    }

});

// ----------------------------
// Active Navigation
// ----------------------------

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".nav_links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.offsetHeight;

        if(scrollY>=top){

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

// ----------------------------
// Fade Up Animation
// ----------------------------

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

document.querySelectorAll(

".feature_card,.shot,.big_stat,.faq_item,.roadmap_item,.timeline_item"

).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// ----------------------------
// Back To Top
// ----------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="backTop";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

    position:"fixed",

    right:"25px",

    bottom:"25px",

    width:"52px",

    height:"52px",

    borderRadius:"50%",

    border:"none",

    cursor:"pointer",

    background:"#7C3AED",

    color:"#fff",

    fontSize:"22px",

    display:"none",

    zIndex:"9999",

    boxShadow:"0 10px 30px rgba(124,58,237,.45)"

});

window.addEventListener("scroll",()=>{

    topBtn.style.display=

    window.scrollY>400

    ?"block"

    :"none";

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================================
// Mithu Web IDE Website
// script.js
// Part 2
// ==========================================

// ------------------------------------------
// Animated Statistics Counter
// ------------------------------------------

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter=entry.target;

        const target=Number(counter.dataset.target);

        let current=0;

        const speed=Math.max(target/120,1);

        const timer=setInterval(()=>{

            current+=speed;

            if(current>=target){

                counter.innerHTML=target.toLocaleString();

                clearInterval(timer);

            }

            else{

                counter.innerHTML=Math.floor(current).toLocaleString();

            }

        },15);

        counterObserver.unobserve(counter);

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// ------------------------------------------
// FAQ Accordion
// ------------------------------------------

document.querySelectorAll(".faq_item").forEach(item=>{

    const question=item.querySelector(".faq_question");

    const answer=item.querySelector(".faq_answer");

    if(!question || !answer) return;

    answer.style.maxHeight="0px";

    answer.style.overflow="hidden";

    answer.style.transition=".35s";

    question.addEventListener("click",()=>{

        document.querySelectorAll(".faq_answer").forEach(a=>{

            if(a!==answer){

                a.style.maxHeight="0px";

            }

        });

        if(answer.style.maxHeight==="0px"){

            answer.style.maxHeight=

            answer.scrollHeight+"px";

        }

        else{

            answer.style.maxHeight="0px";

        }

    });

});

// ------------------------------------------
// Download Button Animation
// ------------------------------------------

document.querySelectorAll(".download_btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px) scale(1)";

    });

});

// ------------------------------------------
// Screenshot Hover Zoom
// ------------------------------------------

document.querySelectorAll(".shot img").forEach(img=>{

    img.addEventListener("mousemove",e=>{

        const rect=img.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width)*100;

        const y=((e.clientY-rect.top)/rect.height)*100;

        img.style.transformOrigin=x+"% "+y+"%";

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

        img.style.transformOrigin="center";

    });

});

// ------------------------------------------
// Roadmap Progress Animation
// ------------------------------------------

const roadmapItems=document.querySelectorAll(".roadmap_item");

const roadmapObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

roadmapItems.forEach(item=>{

    roadmapObserver.observe(item);

});

// ------------------------------------------
// Video Popup
// ------------------------------------------

const demoBtn=document.getElementById("watchDemo");

if(demoBtn){

    demoBtn.addEventListener("click",()=>{

        const url="";

        if(url===""){

            alert("Demo video will be uploaded soon.");

            return;

        }

        window.open(url,"_blank");

    });

}

// ------------------------------------------
// Copy Version
// ------------------------------------------

const version=document.getElementById("version");

if(version){

    version.addEventListener("click",()=>{

        navigator.clipboard.writeText(version.innerText);

    });

}

// ==========================================
// Mithu Web IDE Website
// script.js
// Part 3 (Final)
// ==========================================

// ------------------------------------------
// Auto Footer Year
// ------------------------------------------

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}

// ------------------------------------------
// Scroll Progress Bar
// ------------------------------------------

const progress=document.createElement("div");

progress.id="scrollProgress";

Object.assign(progress.style,{

    position:"fixed",

    top:"0",

    left:"0",

    height:"4px",

    width:"0%",

    background:"#7C3AED",

    zIndex:"999999",

    transition:"width .08s linear"

});

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const percent=(window.scrollY/total)*100;

    progress.style.width=percent+"%";

});

// ------------------------------------------
// Mouse Glow
// ------------------------------------------

const glow=document.createElement("div");

glow.id="cursorGlow";

Object.assign(glow.style,{

    position:"fixed",

    width:"250px",

    height:"250px",

    borderRadius:"50%",

    pointerEvents:"none",

    background:"radial-gradient(circle, rgba(124,58,237,.18), transparent 70%)",

    transform:"translate(-50%,-50%)",

    zIndex:"0",

    transition:"left .08s linear, top .08s linear"

});

document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

// ------------------------------------------
// Keyboard Shortcuts
// ------------------------------------------

document.addEventListener("keydown",e=>{

    if(e.ctrlKey && e.key==="d"){

        e.preventDefault();

        const btn=document.querySelector(".download_btn");

        if(btn){

            btn.click();

        }

    }

});

// ------------------------------------------
// Lazy Load Images
// ------------------------------------------

const lazyImages=document.querySelectorAll("img[data-src]");

const lazyObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const img=entry.target;

        img.src=img.dataset.src;

        img.removeAttribute("data-src");

        lazyObserver.unobserve(img);

    });

});

lazyImages.forEach(img=>{

    lazyObserver.observe(img);

});

// ------------------------------------------
// Developer Easter Egg
// ------------------------------------------

let keys=[];

document.addEventListener("keydown",e=>{

    keys.push(e.key.toLowerCase());

    if(keys.length>8){

        keys.shift();

    }

    if(keys.join("")==="samridd"){

        console.log(

`

███╗   ███╗██╗    ██╗
████╗ ████║██║    ██║
██╔████╔██║██║ █╗ ██║
██║╚██╔╝██║██║███╗██║
██║ ╚═╝ ██║╚███╔███╔╝
╚═╝     ╚═╝ ╚══╝╚══╝

Mithu Web IDE
Designed & Developed by

Samriddho Karmakar

A Product of
Samriddho Computer Education

`

        );

    }

});

// ------------------------------------------
// Preloader
// ------------------------------------------

window.addEventListener("load",()=>{

    const loader=document.getElementById("preloader");

    if(loader){

        loader.style.opacity="0";

        loader.style.pointerEvents="none";

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});

// ------------------------------------------
// Initial Animation
// ------------------------------------------

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ------------------------------------------
// Performance
// ------------------------------------------

window.addEventListener("resize",()=>{

    clearTimeout(window.resizeTimer);

    window.resizeTimer=setTimeout(()=>{

        console.log("Layout updated");

    },150);

});

// ------------------------------------------
// Future Theme Placeholder
// ------------------------------------------

const THEME={

    current:"dark",

    set(theme){

        this.current=theme;

        document.documentElement.dataset.theme=theme;

    }

};

// ------------------------------------------
// Console Greeting
// ------------------------------------------

console.log(

"%cWelcome to Mithu Web IDE",

"font-size:20px;color:#7C3AED;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Samriddho Karmakar",

"font-size:14px;color:#ffffff;"

);

console.log(

"%cA Product of Samriddho Computer Education",

"font-size:13px;color:#bbbbbb;"

);

// ------------------------------------------
// Initialization
// ------------------------------------------

(function(){

    console.log("MW IDE Website Loaded Successfully.");

})();
const tabs =
document.querySelectorAll(".tab");

const codes =
document.querySelectorAll(".editor-body pre");

tabs.forEach((tab,index)=>{

    tab.onclick=()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        codes.forEach(code=>{

            code.style.display="none";

        });

        tab.classList.add("active");

        codes[index].style.display="block";

    };

});