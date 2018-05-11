jQuery.support.cors = true;

(function ($) {

  var settings = {
    "crossDomanin": true,
    "url": "http://server:3000/home/",
    "method" : "GET",
    "headers" : {
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response){
    if (!response['Error']) {
      document.getElementById('tbExemplo').style.display = 'none';
    
    $.each(response, function(id, value){
        
      document.getElementById('tabComentarios').innerHTML += '<tr><td width="20%">' + value.despesa_ent + 
        '</td><td width="2%"><a href="" id=" ' + id + ' "onclick="onUpdate( ' + id + ' )"><span class="glyphicon glyphicon-edit"></span></a></td>' +
            '<td width="2%"><a href="" id=" ' + id + ' "onclick="onDelete( ' + id + ' )"><span class="glyphicon glyphicon-trash"></span></a></td></tr>';
      });
    }
  });
  
})(jQuery);