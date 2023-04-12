const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {return 'Unable to determine the time of year!';}
  //if(!date.hasOwnProperty('setDate')) {throw new Error('Invalid date!');}
  let result = '';  
  let month;
  try {
    month = date.toJSON();
    month = date.getMonth();
    if(month === 11 || month === 0 || month === 1) {result = 'winter';}
    if(month === 2 || month === 3 || month === 4) {result = 'spring';}
    if(month === 5 || month ===6 || month === 7) {result = 'summer';}
    if(month === 8 || month === 9 || month === 10) {result = 'autumn';}
  }
  catch(err) {throw new Error('Invalid date!');}
  return result;
}

module.exports = {
  getSeason
};
