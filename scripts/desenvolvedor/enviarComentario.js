jQuery.support.cors = true;

(function ($) {
  $("#enviarComentario").click(function () {
    var recebComentario = $("#txtComentario").val();
    if (typeof recebComentario == "string" && recebComentario != "") {
      console.log(recebComentario);
    }
  });
})(jQuery);