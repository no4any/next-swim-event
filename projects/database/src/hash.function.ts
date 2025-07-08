import {createHash} from 'node:crypto';

export function hash(msg:string): string {
    return createHash('sha512').update(msg).digest('hex');
}