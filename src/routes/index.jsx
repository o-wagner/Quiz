import { Routes, Route } from "react-router-dom";
import Game from "../pages/game";
import Home from "../pages/home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    );
}