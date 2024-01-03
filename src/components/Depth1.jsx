import {moongi2} from "./Home";

let moongi = "Depth1 component 파일입니다. - out"
console.log(moongi)


export default function Depth1() {
    console.log(moongi2)
    let moongi = "Depth1 component 파일입니다. - in"
    console.log(moongi)
    return (
        <>
            <div>This is Depth - 1 Page</div>
        </>
    )
}
