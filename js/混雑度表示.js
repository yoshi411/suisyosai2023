var api_url = 'https://script.google.com/macros/s/AKfycbwh2Y5kTxrdYSQbKPk5fJ6mL59KzlREoed-Ba6hIvS4uSmZ_rmh4JZjaGrPAosI4ihiFg/exec'; //生成したAPIのURLを指定
 
fetch(api_url)
.then(function (fetch_data) {
  return fetch_data.json();
})
.then(function (json) {
  for (var i in json) {
    // jsonの要素数だけ回す
 
    var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
 
    clone_element.querySelector('img').setAttribute( 'src', json[i].image ); //src属性に取得した画像を設定
 
    
    
    json[i].colors.forEach(color => {
      if( color ) {
        //値が指定されているとき
 
        var base_color_element = clone_element.querySelector('.colors .js-based'); //元となるHTMLの要素を指定
        var color_clone_element = base_color_element.cloneNode(true); //元となるHTMLの要素を複製
        color_clone_element.classList.remove('js-based'); //複製した要素からクラス削除
 
        color_clone_element.querySelector('img').setAttribute( 'src', color ); //src属性を設定
        base_color_element.parentNode.appendChild(color_clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
      }
    });
    
    base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
  }
});