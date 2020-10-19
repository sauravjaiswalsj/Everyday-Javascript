// Importing Buttorns
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
// Importing Counters
let counter = document.getElementById('SpanText');
let count =parseInt(counter.innerText);;
const setCount = (count)=>{
    counter.innerHTML=count;
    if(count>0){
        counter.style.color="green";
    }else if(count<0){
        counter.style.color="red";
    }else{
        counter.style.color="#222";
    }

}
const counterIncrease = ()=>{
    count++;
    
    setCount(count);
}
const counterDecrease = ()=>{
    count--;
    setCount(count)
}
const counterReset=()=>{
    count=0;
    setCount(count);
}
increase.addEventListener('click', counterIncrease);
decrease.addEventListener('click', counterDecrease);
reset.addEventListener('click', counterReset);