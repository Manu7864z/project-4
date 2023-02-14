import './App.css';
import  Form  from "./Components/Form"
import { useState } from "react"
function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity =  newActivity => {
    setActivities([...activities, newActivity]);

  }

  return (
    <div >
      <Form onAddActivity={handleAddActivity}/>
    </div>
  );
}

export default App;
