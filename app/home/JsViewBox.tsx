import { ReactNode } from "react";
import style from "./page.module.css";

interface JsViewBoxPropsType {
    children: ReactNode
}

export default function JsViewBox({ children }: JsViewBoxPropsType) {
    return (
        <div className={style.jsViewContainer}>
            <div className={style.jsViewInnerWrapper}>
                {children}
            </div>
        </div>
    )
}