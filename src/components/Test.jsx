import JokesData from "../assets/JokesData"
import Joke from "./Joke"

export default function Test() {
    const p = JokesData.map(
        (t) => {
            return <Joke setup={t.setup} punchline={t.punchline}/>
        }
    )

    return (
        <main>
            {p}
        </main>
    )
}