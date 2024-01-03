import {Route, Routes} from "react-router-dom";
import Depth1Page from "../pages/1depth/index.";
import HomePage from "../pages/index";

let moongi = "Router component 파일입니다. - out"
console.log(moongi)

export default function Router() {
    let moongi = "Router component 파일입니다. - in"
    console.log(moongi)
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/depth1" element={<Depth1Page/>}/>
            </Routes>
        </>
    )
}
