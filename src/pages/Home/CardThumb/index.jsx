import React, { useState } from "react";
import style from "./CardThumb.module.scss";

function CardThumb(props) {
    const [cardTlt, setCardTlt] = useState("Chọn lá số " + props.index);
    const [tltStatus, setTltStatus] = useState("null");
    return (
        <div className={style.card_thumb}>
            <span className={style.tlt}>{cardTlt}</span>
            <button className={style.btn}>Chọn lá khác</button>
        </div>
    );
}

export default CardThumb;
