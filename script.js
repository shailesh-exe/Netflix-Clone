const signinButton = document.getElementById('btn1');
const siginPopup = document.getElementById('signinPopup');

signinButton.addEventListener('click', () => {
    signinPopup.style.display = 'block';
});

function closeLoginPopup() {
    signinPopup.style.display = 'none';
}

const primaryButton1 = document.getElementById('btn2');
const primaryPopup1 = document.getElementById('signupPopup');

primaryButton1.addEventListener('click', () => {
    primaryPopup1.style.display = 'block';
});

function closeSignupPopup() {
    primaryPopup1.style.display = 'none';
}

const primaryButton2 = document.getElementById('btn3');
const primaryPopup2 = document.getElementById('signupPopup');

primaryButton2.addEventListener('click', () => {
    primaryPopup2.style.display = 'block';
});

function closeSignupPopup() {
    primaryPopup2.style.display = 'none';
}


let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
