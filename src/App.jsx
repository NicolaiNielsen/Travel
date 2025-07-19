import Header from "./components/Header"
import Test from "./components/Test"
import Entry from "./components/Entry"
import data from "./data/data"

function App() {

  const entryElement = data.map(
    (entry) => (
      <Entry 
      key = {entry.id}
      entry={entry}
      />
      ) 
  )

  return (
    <>
    <Header/>
    <div className="entries">
      {entryElement}
    </div>

    </>
  )
}

export default App
