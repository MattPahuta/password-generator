/* 
  Requirements: 
  - Use an array to hold all possible password characters
  - Button to generate 4 random pw options
  - Display pw options
  - Stretch: Ability to set pw length 
  - Stretch: 1-click copy pw to user's clipboard
*/

const passwordChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "@", "$", "&", "%", "(", ")", ">", "<", "+", "-", "^", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const pwLength = document.querySelector('#pw-length');
const button = document.querySelector('button');
const passwords = document.querySelectorAll('.password');
const pwContainers = document.querySelectorAll('.password-container');
const pwMessage = document.querySelector('.pw-message');

function generatePasswords(length) {
  const newPW = [];

  for (let i = 0; i < length; i += 1) {
    const randomChar = passwordChars[Math.floor(Math.random() * passwordChars.length)];
    newPW.push(randomChar)
  }
  return newPW.join('').toString();

}

function renderPasswords () {
  const length = Number(pwLength.value);

  if (length < 8 || length > 30) {
    alert('Enter a number between 8 and 30');
    pwLength.value = '';
    return;
  }

  passwords.forEach(function (pw) {
    pw.textContent = generatePasswords(length);
    pw.classList.add('accent');
    pw.classList.add('generated-pw');
    pwLength.value = '';
  });

  addClickToCopy();
  pwMessage.removeAttribute('hidden');

}

// function copyToClipboard() {
//   var copyText = document.getElementById("content").value;
//   navigator.clipboard.writeText(copyText).then(() => {
//       alert("Copied to clipboard");
//   });
// }

function addClickToCopy() {
// const addCopy = () => {
  passwords.forEach(function(pw) {
    pw.addEventListener('click', function(e) {
      // console.log(e.target.textContent);
      let copyText = e.target.textContent;
  
      navigator.clipboard.writeText(copyText).then(() => {
        alert('copied to clipboard')
      })
    });
  })
}

button.addEventListener('click', renderPasswords);
