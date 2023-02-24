allatem=[];
console.log(allatem);
async function GetApi(){
   var checkapi = await  fetch('https://api.weatherapi.com/v1/search.json?key=6ead9d7041464b7b84b200659232202&q=lond');
   allatem=checkapi
   console.log(allatem);

   
}

GetApi()

let  myhttp= new XMLHttpRequest();
myhttp.open('GET','https://api.weatherapi.com/v1/search.json?key=6ead9d7041464b7b84b200659232202&q=${term}');
myhttp.send();
myhttp.getAllResponseHeaders('readystatechange',function(){
   if(myhttp.readyState==4){
      allatem=JSON.parse(myhttp.response);
      diesplyallatem()
      
   }

})

function diesplyallatem(){

   let cartona=``;
   for( let i=0;i<allatem.lenthe;i++){
      cartona+=`
      <div class="location">${allatem[i].name}</div>
      <div class="degree">
          <div class="num">${allatem[i].lat}<sup>${allatem[i].lon}</sup>C</div>
              <div class="forecast-icon">
                  <!-- <img src="${allatem[i].url}" alt="" width="90"> -->
              </div>	
          
          </div>
      `
   
   }
}
document.getElementById('current').innerHTML=cartona;

function serchapi(term){
   let addnewapi=[];
   for(let i=0;i<allatem.lentheS;i++){
      if(allatem.lenthe[i].name.tolowerCase().incloudeas(term.tolowerCase())== true){
         addnewapi.push(allatem.lenthe[i]);

      }
   }
   diesplyallatem(addnewapi)
}
