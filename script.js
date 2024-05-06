'use strict';

const switchBtn = document.querySelector('.swBtn-indicator');

let themNum = '';
function switchThem(){
  themNum = (themNum + 1 ) % 3; 

  // container style
  const container = document.querySelector('.container');
  container.classList.remove('backgroundStyle0','backgroundStyle1','backgroundStyle2');
  container.classList.add(`backgroundStyle${themNum}`);

  // header text color

  // switch button position
  if(themNum === 0){
    switchBtn.style.transform = "translateX(0%)";
    
  }else if (themNum === 1){
    switchBtn.style.transform = "translateX(150%)";
    
  }else{
    switchBtn.style.transform = "translateX(250%)";
  }
  //      THEM BUTTON INDICATOR COLORS
  switchBtn.classList.remove('swBtnInd-style-0','swBtnInd-style-1','swBtnInd-style-2')
  switchBtn.classList.add(`swBtnInd-style-${themNum}`)
  //    THEM BUDDON COLOR
  const switchplace = document.querySelector('.switchButton');
  switchplace.classList.remove('swBtn-style-0','swBtn-style-1','swBtn-style-2');
  switchplace.classList.add(`swBtn-style-${themNum}`)

  // header text color
const headerElements = document.querySelectorAll('.titles, .them-title, .them-numeration');
headerElements.forEach(headerElement  =>{
  headerElement.classList.remove('headertxt-0','headertxt-1','headertxt-2');
  headerElement.classList.add(`headertxt-${themNum}`);
  })
  // input section style
  const inputVel = document.querySelector('.input');
  inputVel.classList.remove('inputStyle-0','inputStyle-1','inputStyle-2');
  inputVel.classList.add(`inputStyle-${themNum}`)
  // numpad section style
  const numbpadBtn = document.querySelector('.buttons');
  numbpadBtn.classList.remove('button-sectionStyle-0','button-sectionStyle-1','button-sectionStyle-2')
  numbpadBtn.classList.add(`button-sectionStyle-${themNum}`)
  // num style
  const numbers = document.querySelectorAll('.num, .operatos' ,);
  numbers.forEach(nums =>{
    nums.classList.remove('btnStyle-0','btnStyle-1','btnStyle-2');
    nums.classList.add(`btnStyle-${themNum}`)
  })
  //  DEL RESET STYLE
  const delReset = document.querySelectorAll('.reset, .del')
  delReset.forEach(delresetBtn =>{
    delresetBtn.classList.remove('delRestStyle-0','delRestStyle-1','delRestStyle-2');
    delresetBtn.classList.add(`delRestStyle-${themNum}`)
  })
  // EQUA STYLE
  const equalBtn = document.querySelector('.equal');
  equalBtn.classList.remove('equalStyle-0','equalStyle-1','equalStyle-2')
  equalBtn.classList.add(`equalStyle-${themNum}`)
}

// calculator script
const numbpad = document.querySelectorAll('.num');
const inputField = document.querySelector('.input')

// Add event listener for each number button
let result = ''; 
let calculated = false;

numbpad.forEach(number =>{
  number.addEventListener('click',function(){
    if(!calculated){
      result += number.textContent
      inputField.value = result
    }else{
      result = '';
      inputField.value = result
      calculated = false
      result += number.textContent
      inputField.value = result
    }
  })
})

function operation(value){
  const operators = ['+', '-', '*', '.', '/'];
  if(operators.includes(value)){
    result += value;
    inputField.value = result;
    calculated = false
  }else{
    if(!calculated){
      result = inputField.value.slice(0,-1);
      inputField.value = result 
    }else{
      result = '';
      inputField.value = result
      calculated = false
    }
  }
}
function reset(){
  result = '';
  inputField.value = result;
  calculated = false;
}
function calculate(){
  result = eval(inputField.value);
  inputField.value = result;
  calculated = true;
}

