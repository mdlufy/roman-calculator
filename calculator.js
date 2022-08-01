function calculator(string) {
    const [firstArgument, operation, secondArgument, args] = string.split(' ');

    if (args) throw new Error();

    let diffSystemsFlag = 0;

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
            diffSystemsFlag++;
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

    const toOperator = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return Math.trunc(x / y) }
    }


    const arabicFirst = toArabic(firstArgument);
    const arabicSecond = toArabic(secondArgument);
         
    let result = toOperator[operation](arabicFirst, arabicSecond);
    
    if (diffSystemsFlag === 1) throw Error;
    else if (diffSystemsFlag === 2 && result > 0) result = toRoman(result);
    else if (diffSystemsFlag === 2 && result <= 0) return '';

    return result.toString();

}

module.exports = calculator;
