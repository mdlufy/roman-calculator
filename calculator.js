function calculator(string) {

    const [first, operation, second, args] = string.split(" ");

    if (args) throw Error;

    let flag = 0;

    const newArabicFirst = toArabic(first);
    const newArabicSecond = toArabic(second);
 
    const toOperator = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return Math.trunc(x / y) }
    }

        
    let result = toOperator[operation](newArabicFirst, newArabicSecond);
    

    if (flag === 1) throw Error;
    if (flag === 2 && result > 0) {
        result = toRoman(result);
    }
    if (flag === 2 && result <= 0) {
        return '';
    }

    return result.toString();


    function toArabic(value) {
        const arabic = {
            'I': 1,
            'II': 2,
            'III': 3,
            'IV': 4,
            'V': 5,
            'VI': 6,
            'VII': 7,
            'VIII': 8,
            'IX': 9,
            'X': 10
        }

        let newValue;

        if (value in arabic) {
            newValue = arabic[value];
            flag++;
        } else {
            newValue = Number(value);
            if (newValue <= 0 || newValue > 10) throw Error;
        }

        if (typeof newValue !== 'number') {
            throw Error;
        } else {
            return newValue
        }
    }

    function toRoman(value) {
        const roman = [
              ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
              ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
              ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
              ];

        const hundreds = roman[2][Math.floor(value / 100 % 10)];
        const dozens = roman[1][Math.floor(value / 10 % 10)];
        const units = roman[0][Math.floor(value % 10)];

        const romanValue = hundreds + dozens + units;

        return romanValue;
    }
}

module.exports = calculator;
