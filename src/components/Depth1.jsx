import {moongi2} from "./Home";
import {useEffect, useState} from "react";

let moongi = "Depth1 component 파일입니다. - out"
console.log(moongi)

let good = "good"



export default function Depth1() {
    console.log(good)
    let moongi = "Depth1 component 파일입니다. - in"
    console.log(moongi)
    let [jibong, setMoongi] = useState(0)
    console.log(jibong, '실제값.')
    let [jibong2, setMoongi2] = useState(0)

    useEffect(() => {
        console.log('useEffect 실행됨1.')
        console.log('useEffect 실행됨2.')
        // setMoongi(jibong+1)
        return ()=>{
            console.log('return 실행됨.')
        }
    }, [jibong, jibong2]);







    // 너무 어렵구만. 해결이 안되내.
    const onClick = function () {
        console.log('=========================================')
        setMoongi(jibong+1)
        // jibong ++
        console.log(jibong, '대입후')
        console.log('=========================================')
    }

    const onClick2 = function () {
        setMoongi2(jibong2+1)
    }


    return (
        <>
            <div>This is Depth - 1 Page</div>
            <button onClick={onClick}> 버튼이다. </button>
            <button onClick={onClick2}> 버튼이다2. </button>
            <div>{jibong}</div>
        </>
    )
}
