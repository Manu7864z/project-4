

export default function Form ({onAddActivity}) { 
    
    function handleSubmit (event) {
        event.preventDefault();   
        /* const formData = new FormData(event.target);
        const data = Object.fromEntries(formData); */
        const data = {name: event.target.name.value, 
            isForGoodWeather: event.target.isForGoodWeather.checked}
        console.log(data)
        }

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Add new Activity</h1>

            <div>
                <label htmlFor="activity-name">Name: </label>
                <input id="activity-name" name="name" type="text"></input>
            </div>
            <div>
                <label>Good weather activity: </label>
                <input id="good-weather-checkbox" type="checkbox" name="isForGoodWeather" ></input>
            </div>
            <div>
                <button type="submit" >Submit</button>
            </div>
       
       
        
        </form>
    )
}