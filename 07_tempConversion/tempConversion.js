const convertToCelsius = function(degreesFarenheit)
{

let degreesCelcius = ((degreesFarenheit - 32) * (5/9))

let degreesCelciusRounded = Math.round(degreesCelcius * 10) /10

return degreesCelciusRounded

};

const convertToFahrenheit = function(degreesCelcius) 
{
  
let degreesFarenheit = ((degreesCelcius * (9/5)) + 32) 

let degreesFarenheitRounded = Math.round(degreesFarenheit * 10) /10

return degreesFarenheitRounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
