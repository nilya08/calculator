let userInput = document.getElementById("date_input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
userInput.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click",()=>{
    agecalculator();
})

function agecalculator(){
    let birthdate = new Date(userInput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m1<=m2){
        m3= m2-m1;
    }
    else{
        y3--;
        m3 =12 + m2 - m1 ; 
    }

    if(d1<= d2){
        d3 = d2-d1;
    }else{
        d3 = GetDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `you are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old`;
    
    

    function GetDaysInMonth(year , month){
        return new Date(year,month,0).getDate();
    }

}