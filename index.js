// Code your solution in this file!

const returnFirstTwoDrivers = function(ray){
    const newRay = ray.slice(0, 2);
    // debugger;
    console.log(newRay)
    return newRay
}

const returnLastTwoDrivers = function(ray){
    const newRay = ray.slice(2);
    return newRay
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, driversFunction){
    return driversFunction(arrayOfDrivers);
}