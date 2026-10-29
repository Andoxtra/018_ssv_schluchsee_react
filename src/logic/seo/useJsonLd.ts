import {useEffect} from "react";

export const useJsonLd = (id: string, data: unknown): void => {
    const serialized = JSON.stringify(data);
    useEffect(() => {
        let element = document.getElementById(id) as HTMLScriptElement | null;
        if (!element) {
            element = document.createElement("script");
            element.type = "application/ld+json";
            element.id = id;
            document.head.appendChild(element);
        }
        element.textContent = serialized;
        return () => {
            element?.remove();
        };
    }, [id, serialized]);
};
