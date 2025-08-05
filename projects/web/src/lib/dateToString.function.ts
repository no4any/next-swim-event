export default function dateToString(date?: Date) {
    if(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? 0 : ""}${day}.${month < 10 ? 0 : ""}${month}.${year}`
    }

    return "";
}