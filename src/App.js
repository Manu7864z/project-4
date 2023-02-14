import './App.css';
import  Form  from "./components/Form"
import List from "./components/List"
import {useEffect, useState} from "react"
import useLocalStorageState from 'use-local-storage-state';
function App() {



  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const [weather, setWeather] = useState()

  const URL='https://example-apis.vercel.app/api/weather'
  useEffect(() => {

    try {
      async function fetchWeather() {
        const response = await fetch(URL);
        const data = await response.json();
        setWeather(data);
        console.log(data);
      }
      fetchWeather();
      return weather;
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleAddActivity =  newActivity => {
    setActivities([...activities, newActivity]);
  }

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === weather?.isGoodWeather);

  return (
    <div >
      <h1>{weather?.condition} {weather?.temperature} °C</h1>
      <List activities={filteredActivities} isGoodWeather={weather?.isGoodWeather}/>
      <Form onAddActivity={handleAddActivity}/>
    </div>
  );
}

export default App;
