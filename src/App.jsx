import Header from './header.jsx'
import Card from './Card.jsx'
import Greeting from './greeting.jsx'
import List from './List.jsx'
import Namefill from './Namefill.jsx';
import ColorPicker from './Colorpicker.jsx';
function App() {
  const fruits =[{id : 1, name : "apples", calories: 95}, 
                    {id : 2,name : "mangoes" , calories: 33},
                     {id : 3,name : "bananas",  calories: 675},
                      {id : 4,name : "grapes" , calories: 99},
                      {id : 5,name : "oranges" , calories: 77}];

  return (
    <>
   
    <Greeting isloggedin ={true} username ="naikara"/>
     <Card/>
    <Header></Header>
    <span> ---------------- </span><br />
    <List items={fruits} category ={"fruits"}/>
    <Namefill/>
    <ColorPicker/>

    </>
   
  )
}

export default App
