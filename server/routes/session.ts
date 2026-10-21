import type {Handler} from "../types.ts";

export const getSession: Handler = ({session, credentials, send}) => {
    send(200, {authenticated: Boolean(session()), configured: Boolean(credentials)});
};
