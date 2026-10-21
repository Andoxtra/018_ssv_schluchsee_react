import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
const RouteFocus = () => {
    const location = useLocation();
    const previous = useRef(location.pathname);
    useEffect(() => {
        if (previous.current !== location.pathname) {
            window.scrollTo(0, 0);
            document.getElementById("main-content")?.focus({preventScroll: true});
            previous.current = location.pathname;
        }
    }, [location.pathname]);
    return null;
};
export default RouteFocus;
