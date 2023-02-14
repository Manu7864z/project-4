import './App.css';
import  Form  from "./Components/Form"
import List from "./Components/List"
import useLocalStorageState from 'use-local-storage-state';
function App() {

  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const isGoodWeather = true;

  const handleAddActivity =  newActivity => {
    setActivities([...activities, newActivity]);
  }

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

  return (
    <div >
      <List activities={filteredActivities} isGoodWeather={isGoodWeather}/>
      <Form onAddActivity={handleAddActivity}/>
    </div>
  );
}

export default App;
