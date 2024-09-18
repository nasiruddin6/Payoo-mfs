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

//    step-3: get the phone number
const phoneNumber = document.getElementById('phon-number').value;
console.log(phoneNumber);
})