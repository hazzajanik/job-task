import CardA from "./components/CardA/CardA"
import CardB from "./components/CardB/CardB"
import CardC from "./components/CardC/CardC"


function App() {


  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center">
        <div>
            <CardA></CardA>
        </div>
        <div>
            <CardB></CardB>
        </div>
        <div>
          <CardC></CardC>
        </div>
      </div>
    </>
  )
}

export default App
