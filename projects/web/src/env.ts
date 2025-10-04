export const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

export const DOMAIN = process.env.DOMAIN || "dlrg-giessen.de";

export const SALT = process.env.SALT || "SALT123";

export const DEFAULT_USER = process.env.DEFAULT_USER || "admin@admin.com";
export const DEFAULT_USER_PASSWORD = process.env.DEFAULT_USER_PASSWORD || "admin123";

export const SMTP_HOST = process.env.SMTP_HOST || "localhost";
export const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
export const SMTP_SECURE = SMTP_PORT === 465;
export const SMTP_USERNAME = process.env.SMTP_USERNAME || "";
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "";
export const SMTP_FROM = process.env.SMTP_FROM || '"DLRG Gießen" <24@dlrg-giessen.de>';

export const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017';

export const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || 'root';
export const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || 'root';

export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
