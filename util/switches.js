'use strict';

module.exports = function (switches) {
  
  var r = '';
  // Set defalut values of boolean switches
  switches.so  = (switches.so  === true)  ? true  : false;
  switches.spl = (switches.spl === true)  ? true  : false;
  switches.ssc = (switches.ssc === false) ? false : true ;
  switches.ssw = (switches.ssw === true)  ? true  : false;
  switches.y   = (switches.y   === false) ? false : true ;
  
  for (var s in switches) {
    var concat = '';
    
    if (switches[s] === true) {
      concat += '-' + s + ' ';
    }
    else if (typeof switches[s] === 'string') {
      concat += '-' + s + switches[s].split(' ').join('\0') + ' ';
    } 
    else if (typeof switches[s] !== 'boolean') {
      concat += '-' + s + switches[s] + ' ';
    }
    
    // Special treatment for `-ssc`
    if (s === 'ssc') {
      concat = (switches.ssc === true) ? '-ssc ' : '-ssc- ';
    }
    
    r += concat;
  }
  
  return r.trim();
  
};