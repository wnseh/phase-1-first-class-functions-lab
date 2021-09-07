const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}
const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return (function(multiple){
        return multiple*fare;
    })
}

const fareDoubler = (fare)=>createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(array, returnaccordingly){
    return returnaccordingly(array);
}