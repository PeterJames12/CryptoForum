export declare type FormatString = "EEE" | "MMM" | "MMMM" | "EEE MMM d, y h:mm a" | "MMMM y";
export declare class DateFormatter {
    private locale;
    private static zeros;
    private static prependZero(num, cnt);
    constructor(locale?: string);
    format(date: Date | undefined, fmt: FormatString): string;
    private doFormat(parts, fmt);
}
