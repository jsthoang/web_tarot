import React from "react";
import CardThumb from "../CardThumb";
import style from "./CardHolder.module.scss";
function CardHolder() {
    return (
        <div className={style.card_holder}>
            <CardThumb index="1" />
            <CardThumb index="2" />
            <CardThumb index="3" />
        </div>
    );
}

export default CardHolder;
