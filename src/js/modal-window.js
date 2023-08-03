let isValid = false;
const minLength = 2;
const maxLength = 61;
const namePattern = /^[a-zA-Z]{1,30} [a-zA-Z]{1,30}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]380\d{9}$/;

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    validateInput();
    toggleModal();
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    isValid === true && 
    refs.modal.classList.toggle("is-hidden");  
  }
  
  function submitForm(event) {
    event.preventDefault(); 
  }

  function validateInput() {
    const inputName = document.getElementById("user-name") 
    const inputEmail = document.getElementById("user-mail") 
    const inputPhone = document.getElementById("user-phone") 


    var nameError = document.getElementById("name-error")
    var mailError = document.getElementById("mail-error")
    var phoneError = document.getElementById("phone-error")


    const inputNameValue = inputName.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputPhoneValue = inputPhone.value.trim()
    
    if (inputNameValue.length < minLength || inputEmailValue.length > maxLength || inputEmailValue.length < minLength || inputPhoneValue.length > maxLength || inputPhoneValue.length < minLength || inputNameValue.length > maxLength) {
      isValid = false;
    }
    else {
      console.log(inputNameValue)
      isValid = true;
    }

    if (!namePattern.test(inputNameValue)) {
      isValid = false;
      inputName.classList.add('error-border')
      nameError.innerHTML = "First and Last Name with a space in between"
    }
    else {
      inputName.classList.remove('error-border')
      nameError.innerHTML = ""
    }

    if (!emailPattern.test(inputEmailValue)) {
      isValid = false;
      inputEmail.classList.add('error-border')
      mailError.innerHTML = "Example: rarara@gmail.com"
    }
     else {
      inputEmail.classList.remove('error-border')
      mailError.innerHTML = ""
    }

    if (!phonePattern.test(inputPhoneValue)) {
      isValid = false;
      inputPhone.classList.add('error-border')
      phoneError.innerHTML = "Begin with +380"
    }
      else {
      inputPhone.classList.remove('error-border')
      phoneError.innerHTML = ""
    }

    
console.log(isValid)
}

})();