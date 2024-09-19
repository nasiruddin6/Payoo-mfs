// add money to the account


// s-1: add event handler
// prevent page reload after form submit
// s-1:add event handler prvent page reloadafter for, submit
// s-2:get money to be added to the account}




// step-1 add the event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
        event.preventDefault();

// step -2:get money to be added to the account
 const addMoneyInput = document.getElementById('input-add-money').value;
 console.log(addMoneyInput);

//  get the pin number provided
const pinNumberInput = document.getElementById('input-Pin-number').value;
console.log(pinNumberInput);

});