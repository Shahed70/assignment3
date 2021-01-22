//https://github.com/Shahed70/assignment3



// Kilometer to meter function

function kilometerToMeter(kilometer){
      
        var meter = kilometer * 1000;
        return meter;
}   
kilometerToMeter(5)



//Budget calculator function

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){

    var totalWatchPrice = numberOfWatch * 50;
    
    var totalPhonePrice = numberOfPhone * 100;

    var totalLaptopPrice = numberOfLaptop * 500;

    var totalCost = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalCost;

}
budgetCalculator(10, 7, 5)



// Hotel cost function

function hotelCost(numberOfDays){
    
    var totalHotelCost = 0;
    
    if(numberOfDays <=10){
        totalHotelCost = 10 * 100
    }
    else if(numberOfDays <= 20){
       var firstTimeHotelCost = 10 * 100;
       var remainingDays = numberOfDays - 10;
       var secondTimeHotelCost = remainingDays * 80;
       totalHotelCost = firstTimeHotelCost + secondTimeHotelCost;
    }
    else{
        var firstTimeHotelCost = 10 * 100;
        var secondTimeHotelCost = 10 * 80;
        var remainingDays = numberOfDays - 20;
        var lastDaysHotelCost = remainingDays * 50;
        totalHotelCost = firstTimeHotelCost + secondTimeHotelCost + lastDaysHotelCost;
    }
    return totalHotelCost;
}

hotelCost(23)



//Mega friend function

function megaFriend(friends){
    var nameLength = "";
    for(var i=0; i<friends.length; i++){
    if(nameLength.length < friends[i].length){
        nameLength = friends[i];
        }
    }
    return nameLength;
}
megaFriend(['Rohim', 'Karim', 'Abdul Kader', 'Shahed'])