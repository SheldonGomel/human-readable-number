module.exports = function toReadable (number) {
    var ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    var hundred = ' hundred';
    var output = '';
    var numString = number.toString();

    if(number === 0)  output = " zero";
    else if (number < 20) {
        output = ones[number]; 
    }
    else if (numString.length == 3) {
            output = ones[parseInt(numString.charAt(0))] + hundred;
            if(parseInt(numString.charAt(1))<2) {
                output += ones[parseInt(numString.charAt(1)+numString.charAt(2))];
            }
            else {
                output += tens[parseInt(numString.charAt(1))];
                output += ones[parseInt(numString.charAt(2))];
            }
            }
    else {
            output += tens[parseInt(numString.charAt(0))];
            output += ones[parseInt(numString.charAt(1))];
        }
return output.slice(1);
}


