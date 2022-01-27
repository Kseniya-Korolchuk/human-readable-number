module.exports = function toReadable (number) {
    const units_arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozen_arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens_arr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let units = '';
    let dozen = '';
    let dozens = '';
    let hundred = '';

      if (number > 99) {
        if (number % 100 == 0) {
         hundred = units_arr[number/100] + ' ' + 'hundred';
         return hundred;
        }
       else if (number % 100 > 0) {
         hundred = units_arr[(number - number % 100 )/ 100] + ' ' + 'hundred' + ' ';
         number = number % 100;
        }
      }
  
      if (number < 10) {
        units = units_arr[number];
        return hundred + units;
      }
      else if (number >= 10 && number < 20) {
        dozen = dozen_arr[number % 10];
        return hundred + dozen;
      }
      else if (number >= 20 && number < 100) {
        units = (number % 10 != 0) ? ' ' + units_arr[number % 10] : ''; 
        dozens = dozens_arr[(number - number % 10) / 10];
        return hundred + dozens + units;
      }
}
