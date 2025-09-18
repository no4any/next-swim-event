import "server-only";

import { generateKeyPairSync, KeyExportOptions } from 'crypto';

const KEY_EXPORT_OPTIONS: KeyExportOptions<"pem"> = {
    format: 'pem',
    type: 'pkcs1'
}

export default function generateKeyPair() {
    const {privateKey, publicKey} = generateKeyPairSync("rsa", {
        modulusLength: 2048
    });

    return {
        privateKey: privateKey.export(KEY_EXPORT_OPTIONS).toString(),
        publicKey: publicKey.export(KEY_EXPORT_OPTIONS).toString()
    }
}