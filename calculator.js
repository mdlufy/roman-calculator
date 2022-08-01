function calculator(string) {

    const [first, operation, second] = string.split(" ");

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

    let flag = 0;

    function toArabic(value) {
        let newValue;

        if (value in arabic) {
            newValue = arabic[value];
            flag++;
        } else {
            newValue = Number(value);
            if (newValue === 0) throw Error;
        }

        if (typeof newValue !== 'number') {
            throw Error;
        } else {
            return newValue
        }
    }

    const newArabicFirst = toArabic(first);
    const newArabicSecond = toArabic(second);
    
    const toOperator = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return Math.trunc(x / y) }
    }

    function toRoman(value) {
        const romans = [
              ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
              ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
              ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
              ['',"M","MM","MMM"]
              ];
        const romanValue = romans[3][Math.floor(value / 1000 % 10)] + romans[2][Math.floor(value / 100 % 10)] + romans[1][Math.floor(value / 10 % 10)] + romans[0][Math.floor(value % 10)];

        return romanValue;
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
}


module.exports = calculator;
