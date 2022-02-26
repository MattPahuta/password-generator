/* 
  Requirements: 
  - Use an array to hold all possible password characters
  - Button to generate 4 random pw options
  - Display pw options
  - Stretch: Ability to set pw length 
  - Stretch: 1-click copy pw to user's clipboard
    (use <input type="text"> to display the pw options)
*/

const passwordChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "@", "$", "&", "%", "(", ")", ">", "<", "+", "-", "^"];

const button = document.querySelector('button');
const passwords = document.querySelectorAll('.password');

function generatePasswords(length = 12) {
  const newPW = [];

  for (let i = 0; i < length; i += 1) {
    const randomChar = passwordChars[Math.floor(Math.random() * passwordChars.length)];
    newPW.push(randomChar)
  }
  return newPW.join('').toString();

}

function renderPasswords() {
  passwords.forEach(function (pw) {
    pw.textContent = generatePasswords();
    pw.classList.add('accent');
  });
}


button.addEventListener('click', renderPasswords);