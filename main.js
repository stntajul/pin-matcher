function hideFunction(){
    let matchMsg=document.getElementById('matchMsg');

    let notMatchMsg=document.getElementById('notMatchMsg');
    matchMsg.style.display ='none';
    notMatchMsg.style.display ='none';
}
let givenNumber;
let randomNumber;
hideFunction();

const generateBtn=document.getElementById('generate-btn');
generateBtn.addEventListener('click',function(){
    let number=Math.random();
    number*=10000;
    if(number<1000)
    {
        while(number<1000){
            number*=10;
        }
       

    }
    number=Math.round(number);
    //console.log(number);
    randomNumber=number;
    document.getElementById('input1').value=number;
    hideFunction();
   


})
const one =document.getElementById('one');
const two =document.getElementById('two');
const three =document.getElementById('three');
const four =document.getElementById('four');
const five =document.getElementById('five');
const six =document.getElementById('six');
const seven =document.getElementById('seven');
const eight =document.getElementById('eight');
const nine =document.getElementById('nine');
const zero =document.getElementById('zero');
const lt =document.getElementById('lt');
const cancel =document.getElementById('cancel');
const submitBtn =document.getElementById('submitBtn');
let idArray = [one,two,three,four,five,six,seven,eight,nine,zero];
let idArray2 = ['one','two','three','four','five','six','seven','eight','nine','zero'];
for (let i = 0; i < idArray.length; i++) {
    let element=idArray[i];
    //console.log(typeof(element));
    element.addEventListener('click',function(){
        //setNumber(idArray[i]);
       
        setNumber(idArray2[i]);
        
    })
    
}
lt.addEventListener('click',function(){
    let wrongNumber=document.getElementById('input2').value;
     let rightNumber=Math.floor(parseFloat(wrongNumber)/10)
     
     //console.log(typeof(wrongNumber));
     document.getElementById('input2').value=rightNumber;


})
cancel.addEventListener('click',function(){
    document.getElementById('input2').value='';

    
})
submitBtn.addEventListener('click',function(){
    randomNumber=document.getElementById('input1').value;
    givenNumber=document.getElementById('input2').value;
    console.log(randomNumber,' ',givenNumber);
    
    
    if(randomNumber===givenNumber){
       
    
        let matchMsg=document.getElementById('matchMsg');
        matchMsg.style.display ='block';

    }
    else
    {
        let notMatchMsg=document.getElementById('notMatchMsg');
  
    notMatchMsg.style.display ='block';

    }
})




function setNumber(id)
{
    const number=document.getElementById(id).innerText;
    document.getElementById('input2').value+=number;
    

}

