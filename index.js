// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(drivers, key, value) {
  return Object.assign({}, driver, { [key]: value });
 }

 function destructivelyUpdateDriverWithKeyAndValue(drivers, key, value){
     drivers[key] = value;
    
    return drivers
 }

 function deleteFromDriverByKey(driver, key) {
     const newDriver = Object.assign({}, driver);
    delete newDriver[key]

    return newDriver
 }

 function destructivelyDeleteFromDriverByKey(driver, key) {
   driver[key] 
  delete driver[key];

  return driver
 }