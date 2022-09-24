

export function DateToString(date:Date):string {
    return date.toISOString().slice(0, 10).replace(/-/g, "/");
}

export function GetCurrentDate():Date {
    return new Date();
}