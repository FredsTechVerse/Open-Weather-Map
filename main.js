class Weather{
async getProducts(){
    try {

        let rawData = fetch("weather.json");

        let data = await (await rawData).json();

        return data;
        
    } catch (error) {

        console.log(error);
        
    }

}



consumeData(data){
 
   let {lon:longitude, lat:latitude} = data.coord;
   let {temp,pressure,humidity} = data.main
   let {name:city} = data
   return {city ,longitude , latitude , temp , pressure , humidity};
}


displayData (data){
    let newObject= this.consumeData(data);

    console.log(newObject);
}
}





let weather = new Weather ();

weather.getProducts().then((data)=>{
    weather.displayData(data);
})
