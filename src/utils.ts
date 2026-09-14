export function cleanText(string: string): string {
  return string.trim()
}

export function arrayToMarkdownList(array: string[], indent: number = 0): string {
  // to do: maybe use a dependency for this
  return array
    .map(item => {
      const indentString = Array(indent).fill(" ").join("")
      return `${indentString}- ${item}`
    })
    .join("\n")
}


// export const waitForElement = (selector: string): Promise<Element> => {
//   const getElement = () => document.querySelector(selector);

//   return new Promise((resolve) => {
//     const initialElement = getElement();
//     if (initialElement) {
//       resolve(initialElement);
//       return;
//     }

//     const observer = new MutationObserver(() => {
//       const element = getElement();
//       if (element) {
//         resolve(element);
//         observer.disconnect();
//       }
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
//   });
// };

// export function waitFor(funct: () => boolean): Promise<any> {
//   return new Promise((resolve) => {
//     if (funct()) {
//       return resolve(funct());
//     }

//     const observer = new MutationObserver(() => {
//       if (!funct()) {
//         return;
//       }
//       resolve(funct());
//       observer.disconnect();
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }

// export const sleep = async (delay = 1000) => {
//   await new Promise((resolve) => setTimeout(resolve, delay));
// };

// export const escapeHtml = (unsafe: string) => {
//   return unsafe
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// };

// // TIME

// type TimeUnit = "minute" | "hour" | "day" | "week" | "month" | "year";

// export const NOW = Date.now();

// export const HOURS_BY_DAY = 24;
// const WEEKS_BY_MONTH = 4.34821428571;
// export const MILLISECONDS_BY: Record<TimeUnit, number> = {
//   minute: 1000 * 60,
//   hour: 1000 * 60 * 60,
//   day: 1000 * 60 * 60 * HOURS_BY_DAY,
//   week: 1000 * 60 * 60 * HOURS_BY_DAY * 7,
//   month: 1000 * 60 * 60 * HOURS_BY_DAY * 7 * WEEKS_BY_MONTH,
//   year: 1000 * 60 * 60 * HOURS_BY_DAY * 7 * WEEKS_BY_MONTH * 12,
// };

// export const isToday = (dateParsible: string | number): boolean => {
//   const target = new Date(dateParsible);
//   const today = new Date();
//   return (
//     today.getFullYear() === target.getFullYear() &&
//     today.getMonth() === target.getMonth() &&
//     today.getDay() === target.getDay()
//   );
// };

// export const getToday = () => {
//   return new Date(NOW).toISOString().split("T")[0];
// };

// export const isDateValid = (date: unknown): date is Date => {
//   return date instanceof Date && !isNaN(date.getTime());
// };

// export const isWeekend = (timestamp: number) => {
//   const date = new Date(timestamp);
//   const dayOfWeek = date.getDay();
//   return dayOfWeek === 6 || dayOfWeek === 0;
// };

// const getFittingTimeUnit = (
//   milliseconds: number
// ): { unit: TimeUnit; amount: number } => {
//   const timeUnitEntries = Object.entries(MILLISECONDS_BY) as [
//     keyof typeof MILLISECONDS_BY,
//     number
//   ][];

//   const lastUnitIndex = timeUnitEntries.length - 1;
//   const unitIndex = timeUnitEntries.findIndex(
//     ([, unitMilliseconds], index) =>
//       unitMilliseconds > milliseconds || index === lastUnitIndex
//   );
//   const adjustedUnitIndex = Math.max(unitIndex - 1, 0);

//   const [unit, unitMilliseconds] = timeUnitEntries[adjustedUnitIndex];
//   const amount = Math.floor(milliseconds / unitMilliseconds);

//   return {
//     unit,
//     amount,
//   };
// };

// export const getRelativePastTime = (timestamp: number) => {
//   const elapsed = NOW - new Date(timestamp).getTime();
//   const { unit, amount } = getFittingTimeUnit(elapsed);

//   const relativeTimeFormat = new Intl.RelativeTimeFormat("en-US", {
//     numeric: "auto",
//   });

//   const negativeAmount = -Math.abs(amount);
//   return relativeTimeFormat.format(negativeAmount, unit);
// };

// // ENGLISH

// const capitalize = (str: string) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// type PluralizeSettings = {
//   hideSingleAmount?: boolean;
//   capitalizeUnit?: boolean;
// };

// type PluralizeProps = {
//   amount: number;
//   unit: string;
//   settings?: PluralizeSettings;
// };

// export const pluralize = ({ amount, unit, settings = {} }: PluralizeProps) => {
//   const shouldHideAmount = settings.hideSingleAmount && amount === 1;
//   const amountDisplay = shouldHideAmount ? "" : `${amount} `;

//   const shouldCapitalize = shouldHideAmount && settings.capitalizeUnit;
//   const unitDisplay = shouldCapitalize ? capitalize(unit) : unit;

//   const pluralSuffix = amount === 1 ? "" : "s";

//   return `${amountDisplay}${unitDisplay}${pluralSuffix}`;
// };

// export const listToSentence = (arr: string[]) => {
//   const lastJoint = arr.length < 3 ? " and $1" : ", and $1";
//   return arr.join(", ").replace(/, ([^,]*)$/, lastJoint);
// };

// export const getTimeAmount = (milliseconds: number) => {
//   const { unit, amount } = getFittingTimeUnit(milliseconds);
//   return pluralize({ amount, unit });
// };
