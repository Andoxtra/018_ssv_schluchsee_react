import type {Handler} from "../types.ts";

export const getPublicNews: Handler = ({db, send}) => {
    send(200, db.listArticles().filter(article => article.published));
};
