import { Routes, Route } from "react-router-dom";
import Game from "../pages/game";
import Home from "../pages/home";
import Score from "../pages/score";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/score" element={<Score />}/>
        </Routes>
    );
}