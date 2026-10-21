export const SESSION_COOKIE = "ssv_session";
export const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

export const LOGIN_RATE_LIMIT = {count: 10, windowMs: 15 * 60 * 1000};
export const CONTACT_RATE_LIMIT = {count: 5, windowMs: 60 * 60 * 1000};

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
export const MAX_UPLOAD_BASE64_LENGTH = 7000000;
export const MAX_UPLOAD_JSON_BYTES = 7200000;

export const MAX_JSON_BYTES = 150000;
export const MAX_LOGIN_JSON_BYTES = 3000;
export const MAX_CONTACT_JSON_BYTES = 20000;

export const MAX_PASSWORD_LENGTH = 1024;
