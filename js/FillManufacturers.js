$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
        fillselect(data);
    })
})

function fillselect(data){
    let select = $('#manufacturer');
    console.log(data);
    $.each(data,function(key,value){
        select.append('<option>'+value.name+'</option>')
    })
}