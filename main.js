const mainContainer= document.querySelector('.container');

function checkEmail(formContainer,inputEmail,error){
    let email=inputEmail.value
    let emailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
    if(!email.match(emailPattern) && !email.value){
        printError(formContainer,error)
        return true
    }else{
      formContainer.classList.remove('show-error');
      return false;
    }
}
function printError(formContainer,error){
    formContainer.classList.add('show-error');
    error.innerHTML='Valid email required'
}
function printSucess(inputEmail){
    mainContainer.classList.remove('signUp');
    mainContainer.innerHTML=''
   var sectionContainer = document.createElement("section");
   sectionContainer.className='success animate__animated animate__zoomIn'
     sectionContainer.innerHTML= `
        <img src="assets/images/icon-list.svg" class='animate__animated animate__slower	infinite animate__bounceIn' alt="">
        <h1 class='animate__animated animate__bounceIn'>Thanks for subscribing!</h1>
        <p class='animate__animated animate__delay-1s animate__bounceIn'>A confirmation email has been sent to <span class="user-email">
            ${inputEmail.value}
        </span> . Please open it and click the button inside to confirm your subscription.</p>
        <button class="subscription-btn animate__animated animate__delay-1s animate__bounceIn">
        Dismiss message
        </button>
    `
    sectionContainer.querySelector('.subscription-btn').addEventListener('click',function(){
      signup()
    })
    mainContainer.append(sectionContainer)
}
function signup(){
    document.querySelector('main').innerHTML=''
    var mainSectionContainer = document.createElement("section");
    mainSectionContainer.className='signUp';
    var imageContainer = document.createElement("div");
    imageContainer.className=''
    imageContainer.innerHTML=`
   <picture>
      <source srcset="assets/images/illustration-sign-up-desktop.svg" media="(min-width:50em)">
      <img src="assets/images/illustration-sign-up-mobile.svg" alt="sign up imge" class="animate__animated animate__fast animate__zoomIn">
    </picture>
   `
   var sectionContainer = document.createElement("section");
   sectionContainer.className='content-container animate__animated animate__delay-1s animate__zoomIn '
   sectionContainer.innerHTML=`
      <h1 class='animate__animated animate__delay-1s animate__fadeInLeftBig'>Stay updated!</h1>
      <p class='animate__animated animate__delay-1s animate__bounceIn'>Join 60,000+ product managers receiving monthly updates on:</p>
      <ol class='animate__animated animate__delay-1s animate__bounceIn'>
        <li><img src="assets/images/icon-list.svg" alt="" aria-hidden="true">Product discovery and building what matters</li>
        <li><img src="assets/images/icon-list.svg" alt="" aria-hidden="true">Measuring to ensure updates are a success</li>
          <li><img src="assets/images/icon-list.svg" alt="" aria-hidden="true">And much more!</li>
      </ol>
      <div class="subscription animate__animated animate__delay-2s animate__bounceIn">
        <div class="subscription-email">
          <label for="email">Email address</label>
          <span class="error"></span>
          <input type="email" id="email">
        </div>
          <button class="subscription-btn">
            Subscribe to monthly newsletter
          </button>
      </div>
   `
   imageContainer.className='image-container'
   sectionContainer.querySelector('.subscription .subscription-btn').addEventListener('click',function(){
    const inputEmail=sectionContainer.querySelector('.subscription .subscription-email #email')
    const formContainer=sectionContainer.querySelector('.subscription .subscription-email')
    const error=sectionContainer.querySelector('.subscription .subscription-email .error')
      if(!checkEmail(formContainer,inputEmail,error)){
        printSucess(inputEmail)
      }
    })
    mainSectionContainer.append(imageContainer)
    mainSectionContainer.append(sectionContainer)
    mainContainer.append(mainSectionContainer)
}
document.addEventListener("DOMContentLoaded", () => {
    signup()
});