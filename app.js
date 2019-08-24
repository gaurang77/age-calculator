const now = new Date();
const form = document.querySelector('#frm')
const result = document.querySelector('.result');
const p = document.querySelector('#res');

const getbirthdate = birth => {
    const diff = now.getTime()-birth.getTime()
    const Y = diff/1000/60/60/24/365;
    const M = (Y*12)%12;
    const D = (Y*365)%30;
    p.innerHTML = `YOUR APPROX AGE IS :<br> 
    ${Math.floor(Y)} years :${Math.floor(M)} months ; ${Math.round(D)} days`;
    result.style.display = 'block';
   
}

form.addEventListener('submit',e => {
    e.preventDefault();
    const birth = new Date(form.date1.value);
    console.log(birth);
    //console.log(birth.getTime()); 
    getbirthdate(birth);   
});
