const dayOfMonth=Math.floor(Math.random()*30)+1;

const SpaceBackground= document.body;
function randomizer() {
   fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2001-08-${dayOfMonth}&hd=true`)
.then(function(response){
return response.json();
})
.then(function(myJson){
SpaceBackground.style.backgroundImage =`url(${myJson.url})`;
}); 
}

