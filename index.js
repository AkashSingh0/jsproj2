//generate a random color

const randomcolor=function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()* 16)]
    }
    return color
}

let intervalId
const startMe=function(){
    if(!intervalId){
    intervalId=setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
    document.body.style.backgroundColor=randomcolor();
    }
};

document.querySelector('#Start').addEventListener('click',startMe)

const stopMe=function(){
    clearInterval(intervalId);
    intervalId=null;
    
};
document.querySelector('#Stop').addEventListener('click',stopMe)


