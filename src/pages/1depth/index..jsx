import Depth1 from "../../components/Depth1";
import Header from "../../components/Header";

let moongi = "depth1 page 파일입니다. - out"
console.log(moongi)

export default function Depth1Page() {
    let moongi = "depth1 page 파일입니다. - in"
    console.log(moongi)
    return (
        <>
            <Header/>
            <Depth1/>
        </>
    )
}
