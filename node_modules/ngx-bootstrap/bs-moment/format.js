// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
import { formatFunctions, makeFormatFunction } from './format-functions';
import './locale';
import './units';
import { getLocale } from './locale/locales.service';
import { isDateValid } from './utils/type-checks';
export function formatDate(date, format, locale) {
    if (locale === void 0) { locale = 'en'; }
    var _locale = getLocale(locale);
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var output = formatMoment(date, format, _locale);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
export function formatMoment(date, _format, locale) {
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    var format = expandFormat(_format, locale);
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale);
}
export function expandFormat(_format, locale) {
    var format = _format;
    var i = 5;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}
//# sourceMappingURL=format.js.map