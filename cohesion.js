addToCartModule = (function () {
    let login = function () {   /* login code */ }
    let selectProduct = function () { /* select product code */ }
    let getShippingDetails = function () { /* get shipping details code */ }
    let printReceipt = function () { /* print receipt code */ }
    let calculatePrice = function () { /* calculate price code */ }

    return {
        login: login,
        selectProduct: selectProduct,
        getShippingDetails: getShippingDetails,
        printReceipt: printReceipt,
        calculatePrice: calculatePrice
    }

})();


/////////////////////////////////////

addToCartModule = (function () {
    let selectProduct = function () { /* select product code */ }
    let getShippingDetails = function () { /* get shipping details code */ }
    let calculatePrice = function () { /* calculate price code */ }

    return {
        selectProduct: selectProduct,
        getShippingDetails: getShippingDetails,
        calculatePrice: calculatePrice
    }

}());


/////////////////////////////////////

//Functional Cohesion
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

/////////////////////////////////////
