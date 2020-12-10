$(document).ready(function () {
        $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data){
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
    setrows(row,$('<td>'+value.consumption+'</td>'));
    setrows(row,$('<td>'+value.color+'</td>'));
    setrows(row,$('<td>'+value.manufacturer+'</td>'));
    setrows(row,$('<td>'+value.avaiable+'</td>'));
    setrows(row,$('<td>'+value.year+'</td>'));
    setrows(row,$('<td>'+value.horsepower+'</td>'));
    $(table).append(row);
}

function setrows(row,cell){
    $(row).append(cell);
}
