// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  const fareDoubler = function(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
  };
  const fareTripler = function(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
  };
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
