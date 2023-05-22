

// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateDiamondPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateDiamondPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity").value;
    var originalPrice = 50000; // Original price of each set of 10 nuggets
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount").textContent = "$" + purchasePrice.toLocaleString('en-US');
}






// THIS FUNCTION IS BY INDIVIDUAL NUGGETS
//
// function calculateCopperPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity2").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount2").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateCopperPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity2").value;
    var originalPrice = 20000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount2").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateTinPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity3").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount3").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateTinPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity3").value;
    var originalPrice = 20000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount3").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateCoalPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity4").value;
//     var originalPrice = 75000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount4").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateCoalPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity4").value;
    var originalPrice = 30000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount4").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateIronPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity5").value;
//     var originalPrice = 100000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount5").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateIronPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity5").value;
    var originalPrice = 40000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount5").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateSulfurPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity6").value;
//     var originalPrice = 100000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount6").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateSulfurPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity6").value;
    var originalPrice = 40000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount6").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateSilverPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity7").value;
//     var originalPrice = 187500; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount7").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateSilverPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity7").value;
    var originalPrice = 70000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount7").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateGoldPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity8").value;
//     var originalPrice = 250000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount8").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateGoldPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity8").value;
    var originalPrice = 100000; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount8").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateAlienPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity9").value;
//     var originalPrice = 3750000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount9").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateAlienPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity9").value;
    var originalPrice = 149600; // Original price of each diamond nugget
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount9").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



function calculateTotalPurchasePrice() {
    var nuggetQuantityDiamond = document.getElementById("nuggetQuantity").value;
    var nuggetQuantityCopper = document.getElementById("nuggetQuantity2").value;
    var nuggetQuantityTin = document.getElementById("nuggetQuantity3").value;
    var nuggetQuantityCoal = document.getElementById("nuggetQuantity4").value;
    var nuggetQuantityIron = document.getElementById("nuggetQuantity5").value;
    var nuggetQuantitySulfur = document.getElementById("nuggetQuantity6").value;
    var nuggetQuantitySilver = document.getElementById("nuggetQuantity7").value;
    var nuggetQuantityGold = document.getElementById("nuggetQuantity8").value;
    var nuggetQuantityAlien = document.getElementById("nuggetQuantity9").value;

    var diamondOriginalPrice = 50000;
    var copperOriginalPrice = 20000;
    var tinOriginalPrice = 20000;
    var coalOriginalPrice = 30000;
    var ironOriginalPrice = 40000;
    var sulfurOriginalPrice = 40000;
    var silverOriginalPrice = 70000;
    var goldOriginalPrice = 100000;
    var alienOriginalPrice = 149600;

    var totalAmount =
        calculatePurchasePrice(nuggetQuantityDiamond, diamondOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityCopper, copperOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityTin, tinOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityCoal, coalOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityIron, ironOriginalPrice) +
        calculatePurchasePrice(nuggetQuantitySulfur, sulfurOriginalPrice) +
        calculatePurchasePrice(nuggetQuantitySilver, silverOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityGold, goldOriginalPrice) +
        calculatePurchasePrice(nuggetQuantityAlien, alienOriginalPrice);

    document.getElementById("totalAmount10").textContent = "$" + totalAmount.toLocaleString("en-US");
}

function calculatePurchasePrice(nuggetQuantity, originalPrice) {
    var setQuantity = Math.floor(nuggetQuantity / 10);
    var remainingNuggets = nuggetQuantity % 10;
    return (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10));
}


// THIS IS TO FIND THE PERCENTAGE
// function calculateTotalPurchasePrice() {
//     // existing code for calculating the total purchase price
//
//     // Get the selected percentage value
//     var percentage = document.getElementById("percentageSelect").value;
//
//     // Calculate the individual purchase prices using the selected percentage
//     var diamondPurchasePrice = calculatePurchasePrice(nuggetQuantityDiamond, diamondOriginalPrice, percentage);
//     var copperPurchasePrice = calculatePurchasePrice(nuggetQuantityCopper, copperOriginalPrice, percentage);
//     var tinPurchasePrice = calculatePurchasePrice(nuggetQuantityTin, tinOriginalPrice, percentage);
//     var ironPurchasePrice = calculatePurchasePrice(nuggetQuantityIron, ironOriginalPrice, percentage);
//     var sulfurPurchasePrice = calculatePurchasePrice(nuggetQuantitySulfur, sulfurOriginalPrice, percentage);
//     var silverPurchasePrice = calculatePurchasePrice(nuggetQuantitySilver, silverOriginalPrice, percentage);
//     var goldPurchasePrice = calculatePurchasePrice(nuggetQuantityGold, goldOriginalPrice, percentage);
//     var alienPurchasePrice = calculatePurchasePrice(nuggetQuantityAlien, alienOriginalPrice, percentage);
//
//     var totalAmount =
//         diamondPurchasePrice +
//         copperPurchasePrice +
//         tinPurchasePrice +
//         ironPurchasePrice +
//         sulfurPurchasePrice +
//         silverPurchasePrice +
//         goldPurchasePrice +
//         alienPurchasePrice;
//
//     document.getElementById("totalAmount").textContent = "$" + totalAmount.toLocaleString("en-US");
// }
//
// function calculatePurchasePrice(nuggetQuantity, originalPrice, percentage) {
//     var setQuantity = Math.floor(nuggetQuantity / 10);
//     var remainingNuggets = nuggetQuantity % 10;
//     var price = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10));
//     return price * (percentage / 100);
// }





