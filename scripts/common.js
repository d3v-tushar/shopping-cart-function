function itemTotalPrice(itemId, itemQuantity, itemCost){
    const itemTotalElement = document.getElementById(itemId);
    const itemTotal = itemQuantity * itemCost;
    itemTotalElement.innerText = itemTotal;
}


function itemQuantity(count, quantityId){
    const itemNumberfield = document.getElementById(quantityId);
    const itemNumberfieldString = itemNumberfield.value;
    const itemNumberValue = parseInt(itemNumberfieldString);

    let newItemValue;
    if(count === true){
        newItemValue = itemNumberValue + 1;
    }
    else{
        newItemValue = itemNumberValue - 1;
    }
    itemNumberfield.value = newItemValue;
    return newItemValue;
}


function commonSubtotalPrice(subTotalPrice){
    const commonSubTotalElement= document.getElementById(subTotalPrice);
    const commonSubTotalString = commonSubTotalElement.innerText;
    const commonSubTotal = parseInt(commonSubTotalString);
    return commonSubTotal;
}


function setTextElementValueById(elementId, value){
    setTextElement = document.getElementById(elementId);
    setTextElement.innerText = value;
}


function calculateSubTotal(){
    // Sub-Total
    const phoneTotalPrice = commonSubtotalPrice('phone-total');
    const caseTotalPrice = commonSubtotalPrice('case-total');
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    setTextElementValueById('sub-total', subTotalPrice)

    // Tax Total
    const taxAmountString = (subTotalPrice * 0.01).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // Final Total
    const finalAmount = subTotalPrice + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}
