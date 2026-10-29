import type {IncomingMessage, ServerResponse} from "node:http";
import type {Article} from "../src/logic/news/newsSource.ts";

export type Credentials = {
    username: string;
    salt: string;
    hash: string;
};

export type PasswordRecord = Pick<Credentials, "salt" | "hash">;

export type SessionRecord = {
    token: string;
};

export type Message = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
    read: boolean;
};

export type ArticleInput = Omit<Article, "id" | "version">;

export type MailConfig = {
    from: string;
    to: string;
    smtp: {
        host: string;
        port: number;
        secure: boolean;
        user: string;
        pass: string;
    };
};

export type Mailer = {
    notify: (message: Message) => Promise<void>;
};

export type CreateAppOptions = {
    dataDir: string;
    origin?: string;
    distDir?: string;
    seedDir?: string;
    credentials?: Credentials;
    secureCookies?: boolean;
    trustProxy?: boolean;
    localDevelopment?: boolean;
    mail?: MailConfig;
};

export type AppConfig = {
    dataDir: string;
    origin: string;
    port: number;
    host: string;
    distDir: string;
    seedDir: string;
    credentials?: Credentials;
    secureCookies: boolean;
    trustProxy: boolean;
    localDevelopment: boolean;
    mail?: MailConfig;
};

export interface Database {
    listArticles(): Article[];
    getArticle(id: string): Article | undefined;
    createArticle(article: Article): void;
    updateArticle(article: Article): void;
    deleteArticle(id: string): boolean;
    listMessages(): Message[];
    getMessage(id: string): Message | undefined;
    createMessage(message: Message): void;
    updateMessage(message: Message): void;
    deleteMessage(id: string): boolean;
    findSession(hashedToken: string, now: number): SessionRecord | undefined;
    createSession(hashedToken: string, expires: number): void;
    deleteSession(hashedToken: string): void;
    deleteExpiredSessions(now: number): void;
    revokeAllSessions(): void;
    close(): void;
}

export type RequestContext = {
    req: IncomingMessage;
    res: ServerResponse;
    path: string;
    params: Record<string, string>;
    clientAddress: string | undefined;
    db: Database;
    session: () => SessionRecord | undefined;
    rateLimit: (key: string, count: number, duration: number) => void;
    send: (status: number, body: unknown) => void;
    credentials: Credentials | undefined;
    secureCookies: boolean;
    uploads: string;
    mail?: Mailer;
    origin: string;
};

export type Handler = (context: RequestContext) => Promise<void> | void;
