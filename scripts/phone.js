document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneCount = itemQuantity(true, 'phone-number-field');
    itemTotalPrice('phone-total', phoneCount, 1219);
    calculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneCount = itemQuantity(false, 'phone-number-field');
    itemTotalPrice('phone-total', phoneCount, 1219);
    calculateSubTotal();
});

// function upadtePhoneQuantity(isQuantity){
//     const phoneNumberFieldElement = document.getElementById('phone-number-field');
//     const phoneNumberFieldString = phoneNumberFieldElement.value;
//     const phoneNumberField = parseInt(phoneNumberFieldString);

//     let phoneNumber;
//     if(isQuantity === true){
//         phoneNumber = phoneNumberField + 1;
//     }
//     else{
//         phoneNumber = phoneNumberField - 1;
//     }
//     phoneNumberFieldElement.value = phoneNumber;
//     return phoneNumber;
// }