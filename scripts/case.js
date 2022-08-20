document.getElementById('btn-case-plus').addEventListener('click', function(){
  const caseCount = itemQuantity(true, 'case-number-field');
  itemTotalPrice('case-total', caseCount, 59);
  calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseCount = itemQuantity(false, 'case-number-field');
    itemTotalPrice('case-total', caseCount, 59);
    calculateSubTotal();
  });

// function updateCaseNumber(isNumber){
//     const caseNumberfield = document.getElementById('case-number-field');
//     const caseNumberfieldString = caseNumberfield.value;
//     const caseNumberValue = parseInt(caseNumberfieldString);

//     let newCaseValue;
//     if(isNumber === true){
//         newCaseValue = caseNumberValue + 1;
//     }
//     else{
//         newCaseValue = caseNumberValue - 1;
//     }
//     caseNumberfield.value = newCaseValue;
//     return newCaseValue;
// }