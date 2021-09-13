//GROCERY STORE
const city = document.querySelector('#city');
const longitude = document.querySelector('#longitude');
const latitude = document.querySelector('#latitude');
const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');

class Weather{

 //   METHOD 1(Destructures Data from the weather API)  
//  ============ 
async getProducts(){
    try {

        let rawData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Limuru&appid=567766cda2201c50960c8f37b2ee3bf8");

        let data = await rawData.json();

        return data;
        
    } catch (error) {

        console.log(error);
        
    }

}


//  METHOD 2(Destructures the data into a simpler object )
// ===========
consumeData(data){
 
   let {lon:longitude, lat:latitude} = data.coord;
   let {temp,pressure,humidity} = data.main
   let {name:city} = data
   return {city ,longitude , latitude , temp , pressure , humidity};
}

//  METHOD 3(Saves the data as an object)
// ===========
saveData (data){
    let newObject = this.consumeData(data);
     this.displayData(newObject);
}



displayData(newObject){
    city.innerHTML = newObject.city;
    longitude.innerHTML = newObject.longitude;
    latitude.innerHTML = newObject.latitude;
    temperature.innerHTML = newObject.temp;
    humidity.innerHTML = newObject.humidity;
    pressure.innerHTML = newObject.pressure;



    

    

  
}
}



// ClASS INSTANTIATION
//====================

let weather = new Weather ();

weather.getProducts().then((data)=>{//Data is the name given to the return value(resolve or reject data).
    weather.saveData(data);
})
