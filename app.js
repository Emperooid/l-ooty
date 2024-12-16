// document.getElementById('hamburger').addEventListener('click', function() {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.toggle('show'); // Toggle the 'show' class
// });


const tl = gsap.timeline();

    // Animate the "L"
    tl.fromTo("#l", 
      { x: "-100px", opacity: 0 }, 
      { x: "0px", opacity: 1, duration: 1 }
    )
    .to("#l", 
      { scale: 1, duration: 0.5 }
    );

    // Animate the first globe (O1)
    tl.to("#o1", 
      { y: "50px", opacity: 1, scale: 1, duration: 1 }
    );

    // Animate the second globe (O2)
    tl.to("#o2", 
      { y: "50px", opacity: 1, scale: 1, duration: 1 }
    );

    // Animate the "T"
    tl.fromTo("#t", 
      { x: "100px", opacity: 0 }, 
      { x: "0px", opacity: 1, duration: 1 }
    );

    // Animate the "Y"
    tl.fromTo("#y", 
      { y: "-50px", opacity: 0 }, 
      { y: "0px", opacity: 1, duration: 1 }
    );  