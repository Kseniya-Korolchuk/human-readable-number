module.exports = function toReadable (number) {
    const units_arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozen_arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens_arr = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let unit = '';
    let dozen = '';
    let dozens = '';
    let hundred = '';
  
    function toReadable (number) {
      if (number > 99) {
        if (number % 100 == 0) {
         hundred = units_arr[number/100] + ' hundred';
         return hundred;
        }
       else if (number % 100 > 0) {
         hundred = units_arr[(number - number % 100 )/ 100] + ' hundred ';
         number = number % 100;
        }
      }
  
      if (number < 10) {
        unit = units_arr[number];
      }
      else if (number >= 10 && number < 20) {
        dozen = dozen_arr[number % 10];
      }
      else if (number >= 20 && number < 100) {
        unit = (number % 10 != 0) ? units_arr[number % 10] : ''; 
        dozens = dozens_arr[(number - number % 10) / 10] + ' ';
      }
          return hundred + dozens + dozen + unit;
    }
}  
