/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function isWeekend(day: Days): boolean {
    return day === Days.Saturday || day === Days.Sunday;
}

if (isWeekend(Days.Saturday || Days.Sunday)) {
    console.log('Сьогодні вихідний день');
} else {
    console.log('Сьогодні робочий день');
}
