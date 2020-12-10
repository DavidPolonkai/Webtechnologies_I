$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data){
        filltable(data);
    })
})

function filltable(data){
    let table = $("table");
    $.each(data,function(key,value){
        fillrows(table,key,value);
    })
}

function fillrows(table,key,value){
    let row = $('<tr></tr>');
    row.addClass("selectable");
    setrows(row,$('<td style="display: none">'+value["_id"]+'</td>'))
    setrows(row,$('<td>'+value.name+'</td>'));
    setrows(row,$('<td>'+value.country+'</td>'));
    setrows(row,$('<td>'+value.founded+'</td>'));
    $(table).append(row);
}

function setrows(row,cell){
    $(row).append(cell);
}