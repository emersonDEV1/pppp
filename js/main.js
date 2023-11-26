function toggMenu(){
    menu = document.getElementById("menu");
    if(menu.style.left == "-210px" || menu.style.left == ""){
        menu.style.left = "0";
    }else{
        menu.style.left = "-210px";
    }
}

function alternateTextHome(classToHide, idToShow){
  var toShow = document.getElementsByClassName(classToHide);
  var numElements = toShow.length;
  var i;
  for (i = 0; i < numElements; i++){
      $(toShow[i]).hide("slow");
  }
  $("#"+idToShow).slideDown("slow");
}


function sub(form){
  block('loading');
  var ac = form.action;
  //formBt Disable
  var bt = $(form).find("button[type='submit']");
  bt.prop('disabled',true);  
    $.ajax({
        type: 'post',
        url: ac,
        enctype: 'multipart/form-data',
        data: $(form).serialize(),
        success: function(data){
            //alert(data);
            if(data){
                $('#loading').fadeOut();
                bt.prop('disabled',false);
            }
            var bk = JSON.parse(data);
            if(bk.calls){
                eval(bk.calls);           
            }
        }
    });
}

function selServicos(id = 0){
  if(id > 0){
    var checkboxSel = document.getElementById("serv_"+id);
    if(checkboxSel.checked){
      checkboxSel.checked = false;
    }else{
      checkboxSel.checked = true;
    }
  }
  var checkboxes = document.getElementsByClassName("servicos-sel");
  var btContinuarTop = document.getElementById("bt_continuar_top");
  var btContinuarBottom = document.getElementById("bt_continuar_bottom");
  var i;
  var checkeds = 0;
  var boxesLen = checkboxes.length;
  for (i = 0; i < boxesLen; i++){
    var checkbox = checkboxes[i];
    var id = checkbox.value;
    var row = document.getElementById("row_"+id);
    if(checkbox.checked){
      checkeds++;
      row.classList.add("selected");
    }else{
      row.classList.remove("selected");
    }
  }
  if(checkeds > 0){
    btContinuarTop.disabled = false;
    btContinuarBottom.disabled = false;
  }else{
    btContinuarTop.disabled = true;
    btContinuarBottom.disabled = true;
  }
}

function selDiaCalendarioAgenda(data){
  $("#loading").show();
  $('#disponibilidade').load('src/disponibilidade.php?d='+data, function(response, status){
    $("#loading").hide();
  });
}

function selecionaHorario(horario, profissional){
  var form = document.getElementById("selHorarioForm");
  setValue(horario, "horario");
  setValue(profissional, "profissional");
  sub(form);
}

function alteraNomeAgendamento(){
  var edit;
  edit = "<td colspan='2'>";
  edit += "<div class='formField' style='margin-bottom: 2px;'>";
  edit += "Nome:";
  edit += "<input type='text' name='nome' id='nome_agendamento' required>";
  edit += "</div>";
  edit += "</td>";
  setHtml(edit, "nome_agendamento_edit");
  focus("nome_agendamento")
}

function addTitle(add){
  document.title += " - "+add;
}

function modal(msg){
  document.getElementById('msgModal').innerHTML = msg;
  document.getElementById('modal').style.display = "block";
  document.getElementById('btModal').focus();
}

function hideModal(){
  document.getElementById('modal').style.display = "none";
}

function sair(){
  $.get("src/sair.php", function(){
    window.location.href='file:///C:/Users/emers/OneDrive/%C3%81rea%20de%20Trabalho/2.0produtos/agenda/system.html';
  });
}