////////////////////////////////////// DESPLAZAMIENTO VERTICAL ///////////////////////////////////
$('#bot-zona-1').on('click', function (e) {
  e.preventDefault();
  desplazarScroll('.zona1');
});

$('#bot-zona-2').on('click', function () {
  desplazarScroll('.zona2');
});

$('#bot-zona-3').on('click', function () {
  desplazarScroll('.zona3');
});

$('#bot-zona-4').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-5').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-6').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-7').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-8').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-9').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-10').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-11').on('click', function () {
  desplazarScroll('.zona3');
});
$('#bot-zona-12').on('click', function () {
  desplazarScroll('.zona1');
});

function desplazarScroll(elemento) {
  $('html').animate({
    scrollTop: $(elemento).offset().top
  }, 1000);
}

/////////////////////////////////// EMAIL ///////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Mensaje Enviado. Gracias por contactarnos!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


/////////////////////////////////// IMG HOVER ///////////////////////////////////
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


/////////////////////////////////// VOLVER HACIA ARRIBA ///////////////////////////////////
$(document).ready(function(){ //Hacia arriba
  irArriba();
});

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}

/////////////////////////////////// IMAGENES PRODUCCIÓN E INSTALACIÓN ///////////////////////////////////
/* Demo purposes only */
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}