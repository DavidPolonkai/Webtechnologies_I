$(document).ready(function(){
   $(".list tbody").on('click','tr',function (event){
       if($(this).attr("class")=="selected"){
           $(this).removeClass();
           $(this).addClass("selectable");


       }else
       {
           $(this).removeClass();
           $(this).addClass("selected");
       }

   })
});

function deleteelement(url){
    //var classes =document.getElementsByClassName("selected");
    var classlist = $(".selected");
    console.log(classlist.length);
    classlist.each(function(index,element){

        var del= url+'/'+element.cells[0].innerHTML;

        console.log(del);
        $.ajax({
            type: "DELETE",
            url: del,
            cors:true,
            secure: true,
            headers:{
                'Access-Control-Allow-Origin':'*',
            }});
        alert("deleted: "+element.cells[1].innerHTML);

    })
    classlist.removeClass();
    classlist.empty();
}

function modechanger(){
    var url=window.location.href;
    console.log(url);
}