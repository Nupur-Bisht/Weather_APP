
const button = document.getElementById("searchButton");
const input = document.getElementById("inp");
const Ncity =document.getElementById("city");
const Ntemp =document.getElementById("temp");
const Ntime = document.getElementById("time");
 async function getData(Ncity){
      const promise = await  fetch(`http://api.weatherapi.com/v1/current.json?key=0b43e8c35011424fab145203252609&q=${Ncity}&aqi=no`);
      return await promise.json()
}
button.addEventListener("click",async ()=>{
      // console.log(input.value);

       const value = input.value;
       const result = await getData(value);
       Ncity.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
       Ntime.innerText=result.location.localtime;
       Ntemp.innerText=result.current.temp_c + "°C";
       console.log(result);
});