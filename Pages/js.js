// change navbar styles on scroll
window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  
  //show/hide faq answer
  const faqs = document.querySelectorAll(".faq");
  
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");
      // change icon
      const icon = faq.querySelector(".faq_icon i");
      if (icon.className === "uil uil-plus") {
        icon.className = "uil uil-minus";
      } else {
        icon.className = "uil uil-plus";
      }
    });
  });

// Start of Initialize Swiper 
var swiper = new Swiper(".courses_container", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });

  var swiper = new Swiper(".faculty_container ", {
    spaceBetween:20,
     grabCursor:true,
    loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
540: {
  slidesPerView: 1,
  
},
768: {
  slidesPerView: 2,
  
},
1024: {
  slidesPerView: 3,
  
},
},
});

  var swiper = new Swiper(".testimonials_container ", {
    spaceBetween:20,
     grabCursor:true,
    loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
540: {
  slidesPerView: 1,
  
},
768: {
  slidesPerView: 2,
  
},
1024: {
  slidesPerView: 3,
  
},
},
});

// End of Initialize Swiper 