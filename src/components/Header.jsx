import {Link} from "react-router-dom";
let moongi = "Header component 파일입니다. - out"
console.log(moongi)



export default function Header() {
    let moongi = "Header component 파일입니다. - in"
    console.log(moongi)

    let clearLog = () => {
        console.log('-----------------------------------')
    }


    return (
        <>
            <div className="header__box">
                <Link onClick={()=>{clearLog()}} to="/">홈</Link>
                <Link onClick={()=>{clearLog()}} to="/depth1">뎁스 1</Link>
            </div>
        </>
    )
}