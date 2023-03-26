import React from "react";
import PageTitle from "../../components/PageTitle";
import CardHolder from "./CardHolder";
import style from "./Home.module.scss";
function Home() {
    return (
        <div className={style.homepage}>
            <div className={style.col_left}>
                <CardHolder />
            </div>
        </div>
    );
}

export default Home;
