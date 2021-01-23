// import 'boxicons'

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

// // Firebase configuration
// var firebaseConfig = {
//     apiKey: "xxxxx",
//     authDomain: "xxxxx",
//     databaseURL: "xxxxx",
//     projectId: "xxxxx",
//     storageBucket: "xxxxx",
//     messagingSenderId: "xxxxx",
//     appId: "xxxxx",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // Refernece contactInfo collections
//   let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact__form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //  Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
//   // Save info to Firebase
//   function saveContactInfo(name, email, message) {
//     let newContactInfo = contactInfo.push();
  
//     newContactInfo.set({
//       name: name,
//       email: email,
//       message: message,
//     });
//   }
