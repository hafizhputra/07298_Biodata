window.addEventListener('scroll', () => {
  let content = document.querySelector('.transisi-font-nama');

  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight; //

  if (contentPosition < screenPosition) {
    // alert('hey msn');
    content.classList.add('active');
  }

  let content2 = document.querySelector('.h1-about');
  let contentPosition2 = content2.getBoundingClientRect().top;
  let screenPosition2 = window.innerHeight; //
  if (contentPosition2 < screenPosition2) {
    // alert('hey msn');
    content2.classList.add('active');
  }


  // skill
  
  // icon
  let content3 = document.querySelector('.animation-icon');
  let contentPosition3 = content3.getBoundingClientRect().top;
  let screenPosition3 = window.innerHeight; //
  if (contentPosition3 < screenPosition3) {
    // alert('hey msn');
    content3.classList.add('active');
  }

    // icon
    let content4 = document.querySelector('.animation-icon2');
    let contentPosition4 = content4.getBoundingClientRect().top;
    let screenPosition4 = window.innerHeight; //
    if (contentPosition4 < screenPosition4) {
      // alert('hey msn');
      content4.classList.add('active2');
    }


    // text
  let content6 = document.querySelector('.animation-text-skill');
  let contentPosition6 = content6.getBoundingClientRect().top;
  let screenPosition6 = window.innerHeight; //
  if (contentPosition6 < screenPosition6) {
    // alert('hey msn');
    content6.classList.add('active3');
  }

});
