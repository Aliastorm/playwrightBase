import { DateTime } from 'luxon';

export const getDatePlusNDays = (days: number) => {
    return DateTime.now().plus({ days }).toISODate();
};

export const getOldestPossibleWeek = () => {
    const now = DateTime.now();

    return now.day <= 7
        ? now.startOf('month').minus({ month: 1 }).startOf('week')
        : now.startOf('month').startOf('week');
};

export const currentWeekNumber = (): string => {
    const currentWeekNumber = DateTime.now().weekNumber;

    return String(currentWeekNumber).padStart(2, '0');
};

export const changeWeekNumberYear = (subtrahend: number) => {
    let { weekNumber, weekYear } = DateTime.now();

    weekNumber = weekNumber - subtrahend;

    if (weekNumber <= 0) {
        weekNumber = 52 + weekNumber;
        weekYear -= 1;
    }

    return { weekNumber, weekYear };
};
