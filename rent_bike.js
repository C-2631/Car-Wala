document.addEventListener("DOMContentLoaded", function () {
    const bikeContent = document.querySelector(".bikes-content");
  
    if (!bikeContent) {
        console.error("Error: '.bikes-content' not found in the document!");
        return;
    }

  const bikeData = [
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-1.png",
      tag: "Free Cancellation",
    },
    {
      name: "Ducati Multistrada",
      type: "SPORT TOURING",
      price: 20,
      image: "./bike-images/bike-2.png",
      tag: "Limited Offer",
    },
    {
      name: "Yamaha R1",
      type: "SUPERSPORT",
      price: 25,
      image: "./bike-images/bike-3.png",
      tag: "Best Seller",
    },
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-4.png",
      tag: "Free Cancellation",
    },
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-5.png",
      tag: "Free Cancellation",
    },
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-6.png",
      tag: "Free Cancellation",
    },
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-7.png",
      tag: "Free Cancellation",
    },
    {
      name: "BMW R1300GS",
      type: "ADVENTURE",
      price: 17,
      image: "./bike-images/bike-8.png",
      tag: "Free Cancellation",
    },
  ];

  const createBikeBox = (bike) => `
  <div class="bike-box">
      <img src="${bike.image}" alt="${bike.name}" class="box-img">
      <div class="title-price">
          <div class="title-data">
              <h2>${bike.name}</h2>
              <p>${bike.type}</p>
          </div>
          <h3 class="bike-price">$${bike.price}<span>/hour</span></h3>
      </div>
      <a href="#" class="book-btn">Book Bike</a>
      <span class="tag">${bike.tag}</span>
  </div>
`;

bikeData.forEach((bike) => {
  bikeContent.insertAdjacentHTML("beforeend", createBikeBox(bike));
});

// Initialize Swiper
var swiper = new Swiper(".destination-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
  },
  breakpoints: {
    280:{
        slidesPerView:1,
        spaceBetween:10,
    },
    320:{
        slidesPerView:1,
        spaceBetween:10,
    },
    510:{
        slidesPerView:2,
        spaceBetween:10,
    },
    750:{
        slidesPerView:3,
        spaceBetween:15,
    },
    900:{
        slidesPerView:4,
        spaceBetween:20,
    },
  }
});
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
}
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
              section.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();
});