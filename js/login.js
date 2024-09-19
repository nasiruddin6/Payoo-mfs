// console.log('button clicking file added')

// document.getElementbyId ('id').addeEventListner 'click(. fun)
// document.getElementById('btn-login')
// .addEventListener('click', function(){
// })


// search: form submit reloding the page,

// step-1: set event handler
document.getElementById ('btn-login').addEventListener( 'click', function(event){

    // step-2:prevent default behavior (prevent reloading browser)
    event.preventDefault(); /*<----vejal to beginners
    */ 
   console.log('login button clicked');

//    step-3: get the phone number and the pin number
const phoneNumber = document.getElementById('phon-number').value;
const pinNumber =document.getElementById('pin-number').value
console.log(phoneNumber, pinNumber);

// step-4:validate phone and pin
// this is temporray. You should do like this

if(phoneNumber === '5' && pinNumber ==='1234'){
    console.log('you are logged in');
    window.location.href ='/home.html';

    // step-5:allow user to use the website
}
else{
    alert('wrong number &  pin');
}
})