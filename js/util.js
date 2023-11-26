/**
 * Util 110
 * Requires Jquery
 * br version
 */
function setHtml(value, name, isElement = false){
    if(isElement){
        name.innerHTML = value;
    }else{
        document.getElementById(name).innerHTML = value;
    }
}

function setText(value, name, isElement = false){
    if(isElement){
        name.innerText = value;
    }else{
        document.getElementById(name).innerText = value;
    }
}

function setValue(value, name, isElement = false){
    if(isElement){
        name.value = value;
    }else{
        document.getElementById(name).value = value;
    }
}

function getHtml(name, isElement = false){
    if(isElement){
        return name.innerHTML;
    }else{
        return document.getElementById(name).innerHTML;
    }
}

function getText(name, isElement = false){
    if(isElement){
        return name.innerText;
    }else{
        return document.getElementById(name).innerText;
    }
}

function getValue(name, isElement = false){
    if(isElement){
        return name.value;
    }else{
        return document.getElementById(name).value;
    }
}

function maskTelBr(fieldElement){
    var tel = fieldElement.value;
    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d)/, "($1");
    tel = tel.replace(/(.{3})(\d)/, "$1)$2");
    tel = tel.replace(/(.{4})(\d)/, "$1 $2");
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1");
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1");
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1");
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1");
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1");
    }
    fieldElement.value = tel;
}

function maskCep(fieldElement) {
    var cep = fieldElement.value;
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/(.{5})(\d)/, "$1-$2");
    fieldElement.value = cep;
}

function maskDecimal(field){
    var value = field.value.replace(/[^0-9.,]*/g, '');
    value = value.replace(/\.{2,}/g, '.');
    value = value.replace(/\.,/g, ',');
    value = value.replace(/\,\./g, ',');
    value = value.replace(/\,{2,}/g, ',');
    value = value.replace(/\.[0-9]+\./g, '.');
    field.value = value;
}

function hide(name, isElement = false, speed="fast"){
    if(isElement){
        $(name).slideUp(speed);
    }else{
        $("#"+name).slideUp(speed);
    }
}

function show(name, isElement = false, speed="fast"){
    if(isElement){
        $(name).slideDown(speed);
    }else{
        $("#"+name).slideDown(speed);
    }
}

function hideShow(idElementHide, idElementShow, idElementFocus = false){   
	$("#"+idElementHide).slideUp("fast");
	$("#"+idElementShow).slideDown("fast");
    if(idElementFocus){
        $("#"+idElementFocus).focus();
    }
}

function slideOne(classToHide, idToShow){
    $('.'+classToHide).slideUp();
    $('#'+idToShow).slideDown();
}

function showOne(classToHide, idToShow){
    $('.'+classToHide).hide();
    $('#'+idToShow).show();
}

function none(name, isElement = false){
    if(isElement){
        name.style.display = "none";
    }else{
        document.getElementById(name).style.display = "none";
    }
}

function block(name, isElement = false){
    if(isElement){
        name.style.display = "block";
    }else{
        document.getElementById(name).style.display = "block";
    }
}

function inlineBlock(name, isElement = false){
    if(isElement){
        name.style.display = "inline-block";
    }else{
        document.getElementById(name).style.display = "inline-block";
    }
}

function scrollTop(){
    $(window).scrollTop(0);
}

function focus(name, isElement = false){
    if(isElement){
        name.focus();
    }else{
        document.getElementById(name).focus();
    }
}

function redirect(href){
    window.location.href = "file:///C:/Users/emers/OneDrive/%C3%81rea%20de%20Trabalho/2.0produtos/agenda/system.html";
}

function randInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function currencyBr(string){
    var value = String(string);
    var str = value.replace(",", ".");
    var val = parseFloat(str);
    str = val.toFixed(2);
    var str = str.replace(".", ",");
    return str;
}

function togg(idElement){
	$("#"+idElement).toggle();
}

function toggSlide(idElement){
	$("#"+idElement).slideToggle();
}

function maskData(fieldElement) {
    var data = fieldElement.value;
    data = data.replace(/\D/g, "");
    data = data.replace(/(.{2})(\d)/, "$1/$2");
    data = data.replace(/(.{5})(\d)/, "$1/$2");
    fieldElement.value = data;
}

function numberOnly(field){
    field.value = field.value.replace(/[^\d]/g, '');
}

function checkAll(checker, classToCheck){
    if(checker.checked){
        $("."+classToCheck).prop("checked" , true);
    }else{
        $("."+classToCheck).prop("checked" , false);
    }
}

function allChecked(checkerId, inputsCheckClass){
    var checker = document.getElementById(checkerId);
    var allChecked = true;
    var inputs = document.getElementsByClassName(inputsCheckClass);
    var inputLen = inputs.length;
    var i;
    for(i = 0; i < inputLen; i++){
        if(!inputs[i].checked){
            allChecked = false;
            break;
        }
    }
    if(allChecked){
        checker.checked = true;
    }else{
        checker.checked = false;
    }
}








