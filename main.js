// index-page
var tl = gsap.timeline();

// Navbar animation
tl.from("#nav-logo", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
})
    .from("ul li a", {
        y: -40,
        duration: 0.6,
        stagger: 0.1,
        opacity: 0,
    }, "-=0.3");

// Hero-section animation
function breaktheText() {
    var h1 = document.querySelector("#hero h1");
    if (!h1) return;

    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var halfValue = Math.floor(splittedText.length / 2);

    var clutter = "";
    splittedText.forEach(function (elem, idx) {
        clutter += `<span class="${idx < halfValue ? "a" : "b"}">${elem}</span>`;
    });

    h1.innerHTML = clutter;
}

breaktheText();

tl.add("heroStart")
    .from("#hero h1 .a", {
        duration: 0.2,
        y: 30,
        stagger: 0.15,
        opacity: 0,
        ease: "power2.out",
    }, "heroStart")
    .from("#hero h1 .b", {
        duration: 0.6,
        y: 30,
        stagger: 0.15,
        opacity: 0,
        ease: "power2.out",
    }, "heroStart+=0.3");
tl.from("#hero p", {
    opacity: 0,
    y: -50,
    duration: 1,
})
tl.from("#hero-button", {
    y: 50,
    opacity: 0,
    duration: 0.6, // Add a duration
    ease: "power2.out", // Add easing for smooth animation
});

// couses-section

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#courses-section",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 0%",
        scrub: 2,
        toggleActions: "restart none none none",
    }
});
tl2.from("#courses-section .heading1 h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})
tl2.from("#courses-section .heading1 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})
// GSAP Animation for Cards
tl2.from(".main-card > div", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
});

// Campus Section

// GSAP Timeline for Campus Section
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#campus-section",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 0%",
        scrub: 2,
        toggleActions: "restart none none none",
    }
});
tl3.from("#campus-section .heading2 h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
tl3.from("#campus-section .heading2 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
}, "-=0.5");
// GSAP Timeline for Cards Section
var tlCards = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});
// Animate cards
tlCards.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

// Facility-section

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#facility-section",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 0%",
        scrub: 2,
        toggleActions: "restart none none none",
    }
});
tl4.from("#facility-section .heading3 h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
tl4.from("#facility-section .heading3 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
}, "-=0.5");
// Card Animations
tl4.from(".max-w-sm", {
    y: 100,
    opacity: 0,
    scale: 0.8,
    rotation: 10,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3,
});

// Tetimonial-section

// GSAP Timeline for Testimonials Section
var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonil",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});
// Heading animation
tl5.from(".testimonil .heading4 h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});
// Paragraph animation
tl5.from(".testimonil .heading4 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
}, "-=0.5");
// Cards flip and zoom animation
tl5.from(".card-1", {
    opacity: 0,
    rotationY: 180,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.2,
    transformOrigin: "center",
    transform: "perspective(1000px) rotateY(180deg)",
});


// fotter-section

gsap.registerPlugin(ScrollTrigger);
var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        markers: false,
        start: "top 100%",
        end: "top 10%",
        scrub: 1,
        toggleActions: "restart none none none",
    }
});
tl6.from("#footer", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.out",
});

// couses-page
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#courses-section",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
        toggleActions: "restart none none none",
    }
});
tl2.from("#courses-section .heading-1 h2", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})
tl2.from("#courses-section .heading-1 p", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})


// contact-page

var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#map",
        scroller: "body",
        markers: false,
        start: "top 92%",
        end: "top 0%",
        scrub: 2,
        toggleActions: "restart none none none",
    }
});
tl7.from("#map", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Timeline for Contact Section animations
var contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",          
        scroller: "body",            
        start: "top 80%",             
        end: "top 20%",          
        scrub: 1,                    
        toggleActions: "restart none none none", 
    }
});

// Animate each information item
contactTimeline.from("#contact .flex", {
    opacity: 0,                      
    x: -50,                         
    duration: 0.8,                   
    ease: "power2.out",              
    stagger: 0.2,                    
});

// Animate the form
contactTimeline.from("#contact form", {
    opacity: 0,                      
    scale: 0.9,                       
    duration: 1,                     
    ease: "power2.out",               
}, "-=0.5");                     

// Blogs-page

// GSAP and ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Left Side Animation
gsap.from("#content-Certification", {
    scrollTrigger: {
        trigger: "#Certification",
        markers:false,
        start: "top 40%", 
        end: "top 20%",  
        scrub: true,   
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
});

// Right Side Animation
gsap.from("#right-content", {
    scrollTrigger: {
        trigger: "#Certification",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        scrub: true,
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: "power3.out",
});


// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the form container
gsap.from("#blog", {
    scrollTrigger: {
        trigger: "#blog",          
        markers: false,
        start: "top 90%",
        end: "top 50%",           
        toggleActions: "play none none reverse",
    },
    opacity: 0,                   
    scale: 0.95,                  
    duration: 0.8,               
    ease: "power1.out",         
});

// Animate each input field and button
gsap.from("#blog", {
    scrollTrigger: {
        trigger: "#blog",
        start: "top 80%",       
    },
    opacity: 0,               
    scale:0,
    duration: 1,            
    ease: "power1.out",  
});

// About-page

// GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Heading Animation
gsap.from("#about-us h1", {
    scrollTrigger: {
        trigger: "#about-us",
        markers:false,
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: true,
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
});

// Paragraph Animation
gsap.from("#about-us p", {
    scrollTrigger: {
        trigger: "#about-us",
        markers:false,
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: true,
        },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
});

// Button Animation
gsap.from("#about-button a", {
    scrollTrigger: {
        trigger: "#about-us",
        markers:false,
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: true,
        },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: 0.4,
    ease: "elastic.out(1, 0.5)",
});

// Image Animation
gsap.from("#about-image", {
    scrollTrigger: {
        trigger: "#about-us",
        markers:false,
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: true,
        },
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: "power3.out",
});
