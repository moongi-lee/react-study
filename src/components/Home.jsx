let moongi = "Home component 파일입니다. - out"
console.log(moongi)
export let moongi2 = "moongi2 입니다."

export default function Home() {
    let moongi = "Home component 파일입니다. - in"
    console.log(moongi)
    return (
        <>
            <div>This is Home Page</div>
        </>
    )
}
