// import 'boxicons'

// added this at 12:36pm on 1/23/21 

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
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 100}); 
sr.reveal('.about__text',{delay: 100}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 100}); 

// Contact Form Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyClpi-FX03vmlOhfUeYQPMzHvhV9bG1G2k",
    authDomain: "augie-personal-site.firebaseapp.com",
    projectId: "augie-personal-site",
    storageBucket: "augie-personal-site.appspot.com",
    messagingSenderId: "1037920827938",
    appId: "1:1037920827938:web:7d1b5bce9c4ba828e3e87b",
    measurementId: "G-NBELX7PMZB"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact__form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //  Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    // console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact__form").reset();
  }
  
  // Save info to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });

    retrieveInfo();
  }

  // Retrieve info from Firebase
  function retrieveInfo() {
    let ref = firebase.database().ref("info");
    ref.on("value", gotData)
  }
  
  function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
      let infoData = keys[i]
      let name = info[infoData].name
      let email = info[infoData].email
      let message = info[infoData].message
      console.log(name, email, message)

      let infoResults = document.querySelector(".infoResults");

      infoResults.innerHTML += 
        `<div>
            <p><strong>Name: <strong/>${name} <br/>
            <a><strong>Email: <strong/>${email} </a><br/>
            <a><strong>Message: <strong/>${message} </a>
          </p>
        </div>`;
    }
  }