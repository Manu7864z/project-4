import   {uid}  from 'uid';

export default function Form ({onAddActivity}) { 
    
    function handleSubmit (event) {
        event.preventDefault();   
        const data = {id: uid(), name: event.target.name.value, isForGoodWeather: event.target.isForGoodWeather.checked};
        onAddActivity(data);
        event.target.reset();
        event.target.name.focus(); 
        }

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Add new Activity</h1>

            <div>
                <label htmlFor="activity-name">Name: </label>
                <input id="activity-name" name="name" type="text"></input>
            </div>
            <div>
                <label htmlFor="good-weather-checkbox">Good weather activity: </label>
                <input id="good-weather-checkbox" type="checkbox" name="isForGoodWeather" ></input>
            </div>
            <div>
                <button type="submit" >Submit</button>
            </div>
       
       
        
        </form>
    )
}