/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Role {
  Saturday = "Saturday ",
  Sunday = "Sunday ",
}
const isWeekend = (day: string): boolean => {
  if (day === Role.Saturday || day === Role.Sunday) {
    return true;
  }
  return false;
};
