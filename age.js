const form = document.querySelector('#frm')
const result = document.querySelector('.result');
const p = document.querySelector('#res');

const d = new Date();
const current = d.getTime();

function setMaxDate(){
 d.setDate(d.getDate()-1);
 let year = d.getFullYear();
 let iMonth = d.getMonth()+1;
 let month = ( iMonth < 10) ? "0"+iMonth : iMonth;
 let iDay = d.getDate();
 let day = (iDay<10)? "0"+iDay : iDay;
 let maxDate = year+"-"+month+"-"+day;
 //console.log(maxDate);
 form.date1.max = maxDate;   
}

setMaxDate();

console.log(d.getFullYear(),d.getMonth(),d.getDate());
const getbirthdate = birth => {
    const diff = current-birth.getTime()
    const Y = diff/(1000*60*60*24*365);
    const M = (Y*12)%12;
    const D = (Math.floor( (Y*365)%365 ))%30;
    p.innerHTML = `SO YOUR APPROX AGE IS :<br> 
    <h3 id="resBlock">${Math.floor(Y)} years :${Math.floor(M)} months ; ${Math.round(D)} days</h3>`;
    result.style.display = 'block';
   
}

form.addEventListener('submit',e => {
    e.preventDefault();
    const birth = new Date(form.date1.value);
    if(birth.getTime() >= current){
        alert("Birth date cant be greater than current date");
    }else{
        getbirthdate(birth);
    } 
       
});
