const images = document.querySelectorAll('.slider__img');
const header__images = document.querySelectorAll('.header__img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');


//!-------- HeaderImg ----------------

function removeHeaderActiveImg() {
    header__images.forEach((img) => {
        img.classList.remove('active');
    });
}

function nextHeaderImage() {
    hstep++;
    if (hstep >= header__images.length) {
      hstep = 0;
    }
    removeHeaderActiveImg();
    header__images[hstep].classList.add('active');
    resetInterval(); 
}

//!-------- sliderImg ----------------
let hstep = 0;
let step = 0;
let nbrImg = images.length;
let intervalId; 

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);
startInterval();

function removeLightDot() {
  dots.forEach((dot) => {
      dot.classList.remove('light');
  });
}

function removeActiveImg() {
    images.forEach((img) => {
        img.classList.remove('active');
    });
}

function startInterval() {
  intervalId = setInterval(() => {
    nextImage();
    nextHeaderImage();
  }, 4000);
}

function resetInterval() {
  clearInterval(intervalId); 
  startInterval(); 
}

function nextImage() {
  step++;
  if (step >= nbrImg) {
    step = 0;
  }
  removeActiveImg();
  removeLightDot();
  images[step].classList.add('active');
  dots[step].classList.add('light');
  resetInterval(); 
}

function prevImage() {
  step--;
  if (step < 0) {
    step = nbrImg - 1;
  }
  removeActiveImg();
  removeLightDot();
  images[step].classList.add('active');
  dots[step].classList.add('light');
  resetInterval(); 
}




