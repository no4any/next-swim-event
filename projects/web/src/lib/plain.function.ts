export default function plain<T>(obj: T): Promise<T> {
    return JSON.parse(JSON.stringify(obj));
}