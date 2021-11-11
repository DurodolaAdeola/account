$(document).ready(function(){
$("#form").submit(function(event){
let firstName = $("#firstname").val();
let lastName = $("#lastname").val();
let phonenumber = parseInt($("#phonenumber").val());
let email = $("#Email").val();
let address = $("#address").val();
event.preventDefault();
$(".output").text(`${firstName} ${lastName} ${phonenumber} ${email} ${address}`)




    })


})