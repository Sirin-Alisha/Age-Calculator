let userInput=document.querySelector("input");
userInput.max=new Date().toISOString().split("T")[0];
let para=document.querySelector("p");
function clearCalculator() {
 userInput.value = "";
  para.textContent = "";
}
function calculateAge(){
    let birth=new Date(userInput.value);
    let today=new Date();

    let d1=birth.getDate();
    let m1=birth.getMonth()+1;
    let y1=birth.getFullYear();
        
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let years=y2-y1;
    let months=m2-m1;
    let days=d2-d1;

    if(days <0){
        months--;
        let daysinPrevMonth= new Date(y2,m2,0).getDate();
        days += daysinPrevMonth;
    }
    if(months<0){
        years--;
        months+=12;
    }
    para.textContent=`You are ${years} years, ${months} months, ${days} days`;
}