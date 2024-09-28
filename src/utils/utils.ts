import { RefObject } from "react";

export const disabledBtn = (btnRef: RefObject<HTMLButtonElement>) => {
    if (btnRef.current) {
        btnRef.current.disabled = true;
        btnRef.current.classList.add("disabledBtn");
    }
}

export const enabledBtn = (btnRef: RefObject<HTMLButtonElement>) => {
    if (btnRef.current) {
        btnRef.current.disabled = false;
        btnRef.current.classList.remove("disabledBtn");
    }
}