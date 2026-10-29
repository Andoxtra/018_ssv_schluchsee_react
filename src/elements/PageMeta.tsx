import {useLocation} from "react-router-dom";
import {SITE_DESCRIPTION, SITE_NAME, staticMeta} from "../config/seo.ts";
import {usePageMeta} from "../logic/seo/usePageMeta.ts";

const PageMeta = () => {
    const {pathname} = useLocation();
    const meta = staticMeta(pathname);
    const noindex = pathname.startsWith("/admin") || pathname.startsWith("/testing");
    usePageMeta({
        title: meta?.title ?? SITE_NAME,
        description: meta?.description ?? SITE_DESCRIPTION,
        noindex,
        ogImage: "/og-image.png",
    });
    return null;
};

export default PageMeta;
