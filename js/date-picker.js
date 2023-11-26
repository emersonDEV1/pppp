var targetCal;
function datePicker(target, field, month = null, year = null){
    if(targetCal){
        if(document.getElementById(targetCal)){
            document.getElementById(targetCal).innerHTML = "";
        }
    }
    var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var mesAtual, anoAtual, mes, ano, mesPrev, mesNext, anoPrev, anoNext, mesExtenso, calendarDiv, numeroPrimeiroDiaMes, diasDoMes, hoje, mesIndexZero;
    targetCal = target;
    var elementTarget = document.getElementById(target);
    var dataCalInicio = elementTarget.getAttribute("data-inicio");
    var dataCalFim = elementTarget.getAttribute("data-fim");
    var data = new Date();
    hoje = new Date().toISOString().slice(0, 10);
    mesAtual = data.getUTCMonth()+1;
    anoAtual = data.getUTCFullYear();
    if(month == null || month == null){
        mes = mesAtual;
        ano = anoAtual;
    }else{
        mes = month;
        ano = year;
    }
    mesIndexZero = parseInt(mes)-1;

    mesExtenso = nomeMes[mesIndexZero]+" "+ano;

    //PROXIMO
    mesNext = parseInt(mes) + 1;
    anoNext = parseInt(ano);
    if(mesNext > 12){
        mesNext = 1;
        anoNext++;
    }

    //MES ANTERIOR
    mesPrev = parseInt(mes) - 1;
    anoPrev = parseInt(ano);
    if(mesPrev < 1){
	    mesPrev = 12;
	    anoPrev--;
    }

    calendarDiv = "<div class='calendario'>"; //inicia calendario
    calendarDiv += "<div class='close'><button type='button' title='Limpar Campo' onclick='setValField(\""+field+"\", \"\")'>L</button> <button type='button' title='Fechar' onclick='closeDatePicker()'>X</button></div>";
    calendarDiv += "<div class='navigation'>";
    calendarDiv += "<button type='button' title='Mês anterior' class='navigator' onclick='datePicker(\""+target+"\", \""+field+"\", "+mesPrev+", "+anoPrev+")'>&#10094;&#10094;</button>";
    calendarDiv += "<div class='tituloCalendario' onclick='datePicker(\""+target+"\", \""+field+"\", "+mesAtual+", "+anoAtual+")'>"+mesExtenso+"</div>";
	calendarDiv += "<button type='button' title='Mês próximo' class='navigator' onclick='datePicker(\""+target+"\", \""+field+"\", "+mesNext+", "+anoNext+")'>&#10095;&#10095;</button>";
    calendarDiv += "</div>";
    calendarDiv += "<div class='dias'>";
    calendarDiv += "<div class='diaTitCal'>Dom</div><div class='diaTitCal'>Seg</div><div class='diaTitCal'>Ter</div><div class='diaTitCal'>Qua</div><div class='diaTitCal'>Qui</div><div class='diaTitCal'>Sex</div><div class='diaTitCal'>Sab</div><br>";


    //Primeiro dia do mes (numero)
    numeroPrimeiroDiaMes = new Date(ano, mesIndexZero, 1).getDay();

    //Dias do mes anterior (empty)
    var i;
    for(i = 0; i < numeroPrimeiroDiaMes; i++){
        calendarDiv += "<button type='button' class='diaCalEmpty'></button>";        
    }

    diasDoMes = new Date(ano, mes, 0).getDate();

    var d;
    for(d = 1; d <= diasDoMes; d++){
        var mesPad = ("0"+mes).slice(-2);
        var diaPad = ("0"+d).slice(-2);
        var dataGo = ano+"-"+mesPad+"-"+diaPad;
        var dataFormat = diaPad+"/"+mesPad+"/"+ano;
        var current = "";
        if(dataGo == hoje){
            current = " diaCalCurrent";
        }

        //Verifica se tem data inicio e fim (disabled)
        var disabled = "";
        var dataCurrent = new Date(dataGo);
        if(dataCalInicio.length == 10){
            var dtI = new Date(dataCalInicio);
            if(dataCurrent < dtI){
                disabled = " disabled";
            }
        }
        if(dataCalFim.length == 10){
            var dtF = new Date(dataCalFim);
            if(dataCurrent > dtF){
                disabled = " disabled";
            }
        }
        
        calendarDiv += "<button type='button' onclick='setValField(\""+field+"\", \""+dataFormat+"\")' class='diaCal"+current+"'"+disabled+">"+d+"</button>";
        
        var numDia = new Date(ano, mesIndexZero, d).getDay();
        if(numDia == 6){
            calendarDiv += "<br>";
        }
    }
    calendarDiv += "</div>";
    calendarDiv += "</div>";

    elementTarget.innerHTML = calendarDiv;
   
}//end function

function setValField(field, data){
    document.getElementById(field).value = data;
    closeDatePicker();
}

function closeDatePicker(){
    document.getElementById(targetCal).innerText = "";
}

