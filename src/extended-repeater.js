const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  str = String(str);
  options.addition = (options.addition === null) ? 'null' : options.addition;
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';
  options.separator = options.separator || '+';  
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        result.push(options.addition);
        if(j < options.additionRepeatTimes - 1) {
          result.push(options.additionSeparator);
        }          
      }
    }
    if(i < options.repeatTimes - 1) {
      result.push(options.separator);
    }      
  }
  return result.join('');
}

module.exports = {
  repeater
};
