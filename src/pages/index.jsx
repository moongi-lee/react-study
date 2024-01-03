import Home from "../components/Home";
import Header from "../components/Header";

let moongi = "home page 파일입니다. - out"
console.log(moongi)
export default function HomePage() {
    let moongi = "home page 파일입니다. - in"
    console.log(moongi)
    return (
        <>
            <Header/>
            <Home/>
        </>
    )
}
