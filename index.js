// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
document.body.classList.toggle("dark-mode");

}


// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);

// Set toggleDarkMode as the callback function.


// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");
const newSignatures = document.getElementById("newSignatures");

const addSignature = (person) => {
  //   // Write your code to manipulate the DOM here
  // const newSignature;
  // newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  // //const email = document.getElementById('email').value;
  // //const hometown = document.getElementById('hometown').value;

  // //const newSignature = '🖊️ ' + name + ' from ' + hometown + ' supports this.';

  // const p = document.createElement('p');
  // p.innerText = newSignature;
  // newSignatures.appendChild(p);
  let signatureSection = document.querySelector(".signatures");
    let newSignature = document.createElement("p");
    newSignature.innerText = "🖊️ " + person.name + " from " + person.hometown + " supports this.";
    newSignature.classList.add("sigs");
    signatureSection.appendChild(newSignature);
}

// Add a click event listener to the sign now button here

//signNowButton.addEventListener("click", addSignature);

// TODO: Remove the click event listener that calls addSignature()


// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;

    var petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
        name: petitionInputs[0].value,
        hometown: petitionInputs[1].value,
        email: petitionInputs[2].value
    }

    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {

        // TODO: Validate the value of each input
        if (petitionInputs[i].value.length < 2) {
            petitionInputs[i].classList.add('error');
            containsErrors = true;
        }
        else {
            petitionInputs[i].classList.remove('error');
        }
    }
    // TODO: Call addSignature() and clear fields if no errors
    if (containsErrors == false) {
        addSignature(person);
        toggleModal(person);
        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }

  // let containsErrors = false;

  // var petitionInputs = document.getElementById("sign-petition").elements;

  // let person = {
  //   name: petitionInputs[0].value // accesses and saves value of first input
    
  // }

  // for (let i = 0; i < petitionInputs.length; i++){
  //   if (person.hometown.length < 2){
      
  //     containsErrors = true;
  //     petitionInputs[i].classList.add('error');
  //   }
  //   else{
  //     petitionInputs[i].classList.remove('error');
  //   }
  // }
  // if (containsErrors == false){
  //   addSignature(person);
  //   toggleModal(person);
  //   for (let i = 0; i < petitionInputs.value.length; i++){
  //     petitionInputs[i].value = "";
  //     containsErrors = false;
  //   }
    
  // }

  
  // // TODO: Loop through all inputs

  
  // // TODO: Validate the value of each input



  // // TODO: Call addSignature() and clear fields if no errors

}

signNowButton.addEventListener('click', validateForm);


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

const revealable = document.querySelectorAll(".revealable");

const reveal = () => {
  let windowHeight = window.innerHeight;
  for (let i = 0; i < revealable.length; i++){
    
    let topOfRevealableContainer = revealable[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
  /* add the active class to the revealableContainer's classlist */
      revealable[i].classList.add("activate");
    } 
    else {
  /* remove the active class to the revealableContainer's classlist */
      revealable[i].classList.remove("activate");
    }
  }
}
window.addEventListener("scroll", reveal);

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = 'flex';
  modalContent.textContent = "Thank you " + person.name + " from " + person.hometown + " for supporting new immigrants!";

  setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
  }, 4000)

  let intervalId = setInterval(scaleImage, 500)
}

let scaleFactor = 1;
//let modalImage = document.images[0];
const modalImage = document.querySelector('.modal-content img');

const scaleImage = () => {
    if (scaleFactor === 1) {
        scaleFactor = 0.8;
    }
    else {
        scaleFactor = 1;
    }
    modalImage.style.transform = `scale(${scaleFactor})`
}


