function insert(address,formid){
    form = document.getElementById(formid);
    json=getform(formid);
    console.log("cucc:"+json+"\n"+"cim:"+address);

   $.ajax({
        type: "POST",
        url: address,
        data: json,
        dataType: "json",
        cors:true,
        contentType: "application/json",
        secure: true,
        headers:{
            'Access-Control-Allow-Origin':'*',
        }});
    alert($('#'+formid).serializeArray()[0].value+" added to the database");

}

function getform(formid){

    var array = $('#'+formid).serializeArray();
    var object={};

    $.each(array,function (){
        object[this.name]=this.value || '';
    });

    json = JSON.stringify(object);
    console.log(json);
    return json;
}


