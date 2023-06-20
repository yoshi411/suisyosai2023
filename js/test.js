 
var api_url = 'https://script.google.com/macros/s/AKfycbwh2Y5kTxrdYSQbKPk5fJ6mL59KzlREoed-Ba6hIvS4uSmZ_rmh4JZjaGrPAosI4ihiFg/exec'; //生成したAPIのURLを指定
 
fetch(api_url)
.then(function (fetch_data) {
  return fetch_data.json();
})
.then(function (json) {
  for (var i in json) {
    console.log(json[i].name);
  }
});
 