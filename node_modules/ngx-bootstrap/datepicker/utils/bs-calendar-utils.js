import { getDayOfWeek, isFirstDayOfWeek } from '../../bs-moment/utils/date-getters';
import { shiftDate } from '../../bs-moment/utils/date-setters';
import { isAfter, isBefore } from '../../bs-moment/utils/date-compare';
import { endOf, startOf } from '../../bs-moment/utils/start-end-of';
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    var weekDay = getDayOfWeek(date);
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
export function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
export function isMonthDisabled(date, min, max) {
    var minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    var maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
export function isYearDisabled(date, min, max) {
    var minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    var maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
//# sourceMappingURL=bs-calendar-utils.js.map