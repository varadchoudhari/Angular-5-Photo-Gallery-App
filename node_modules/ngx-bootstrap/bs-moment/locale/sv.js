import { getSetGlobalLocale } from './locales.service';
getSetGlobalLocale('sv', {
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: function (num) {
        var b = num % 10;
        // tslint:disable-next-line:no-bitwise
        var output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    }
});
//# sourceMappingURL=sv.js.map