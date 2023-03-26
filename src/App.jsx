import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { route } from "./route/route";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { AllCards } from "./pages/AllCards/AllCards";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

function App() {
    return (
        <GlobalStyles>
            <main className="App">
                <div className="inner">
                    <Header />
                    <Routes>
                        <Route path={route.index} element={<Home />} />
                        <Route path={route.all_card} element={<AllCards />} />
                    </Routes>
                </div>
            </main>
        </GlobalStyles>
    );
}

export default App;
