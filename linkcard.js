javascript:(
function(){  
  var metas = document.getElementsByTagName("meta");  
  function searchTitle(ms){
      for(i=0; i<ms.length; i++){
          if(ms[i].getAttribute("property")=="og:title"){
              return ms[i].getAttribute("content");
          }
      }
      return "";
  }
  function searchURL(ms){
      for(i=0; i<ms.length; i++){
          if(ms[i].getAttribute("property")=="og:url"){
              return ms[i].getAttribute("content");
          }
      }
      return "";
  }
  function searchDescription(ms){
      for(i=0; i<ms.length; i++){
          if(ms[i].getAttribute("property")=="og:description"){
              return ms[i].getAttribute("content");
          }
      }
      return "";
  }
  function searchImgURL(ms){
      for(i=0; i<ms.length; i++){
          if(ms[i].getAttribute("property")=="og:image"){
              return ms[i].getAttribute("content");
          }
      }
      return "";
  }
  var title = searchTitle(metas);
  var URL = searchURL(metas);  
  var des = searchDescription(metas);
  var img = searchImgURL(metas);
  var s = '<div><div class="Rblogcard2"><div><img class="Rblogcard_img2" src="' + img +'"></div><div><span class="Rblogcard_title2"><a href="' + URL +'" target="_blank">' + title +'</a></span></div><div><span class="Rblogcard_des2">' + des + '</span></div><div><a class="Rblogcard_url2" href="' + URL + '" target="_blank">' + URL + '</a></div></div></div>';
  if(img==''){
    var s = '<div><div class="Rblogcard2"><div><span class="Rblogcard_title2"><a href="' + URL +'" target="_blank">' + title +'</a></span></div><div><span class="Rblogcard_des2">' + des + '</span></div><div><a class="Rblogcard_url2" href="' + URL + '" target="_blank">' + URL + '</a></div></div></div>';
  }
  var d = window.open().document;
  d.writeln('<textarea rows=15 cols=80>'+s+'</textarea>');
  d.close();
})();