
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import List from './list-group/List'

function App() {
//"New york","palestine","jordan","syria"
  return (
    <>
    { /*items.length>0 && <h2>List</h2>*/}
    <List items={["New york","palestine","jordan","syria"]}/>
    <List items={["shawrma","checken","sandwish","mansef"]}/>






    
    </>


      )
}

export default App
