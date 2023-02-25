let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/enq-1998-_3RRh4RFyoo-unsplash.jpg') {
      myImage.setAttribute('src', 'images/07 micros_1985_wallpapers_final_greenlogo.jpg');
    } else {
      myImage.setAttribute('src', 'images/enq-1998-_3RRh4RFyoo-unsplash.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  