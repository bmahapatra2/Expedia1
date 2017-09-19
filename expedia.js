$(document).ready(function(){
	$("#childnum").on("change",function(){
		var child = this.value;
		$("#childInfo").empty();
 	for(var i=1; i<=child; i++)
 	{
	var dropdown="Child Age<select>";
	for(var j=1; j<=16;j++)
	{
		dropdown+="<option value="+j+">"+j+"</option>";
	}
	dropdown+="</select>";
		$("#childInfo").append(dropdown);
 	}
 });
$("#return").click(function(){
		$("#returnInfo").css("display","block");
});
 $("#oneWay").click(function(){

 			$("#returnInfo").css("display","none");
 });

 $("#btnflight").click(function()
 {
 	$("#service-form").css("display","block");
 	$("#discoverset").css("display","none");
 });

 $("#btnhotel").click(function()
 {
 	$("#service-form").css("display","none");
 	$("#hotelset").css("display","block");
 });

 $("#btnholiday").click(function()
 {
 	$("#service-form").css("display","none");
 	$("#hotelset").css("display","none");
 	$("#holidayset").css("display","block");
 });

 $("#btndiscover").click(function()
 {
 	$("#service-form").css("display","none");
 	$("#hotelset").css("display","none");
 	$("#holidayset").css("display","none");
 	$("#discoverset").css("display","block");
 });
$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight1").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight2").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight3").autocomplete({
				
					source: txt
				});});

$(function()
				{
					var txt=["Delhi","Las Vagas","Paris","Rome","Italy","Switzerland","Alaska","New-York","Dubai"];
							$("#flight4").autocomplete({
				
					source: txt
				});});
// $(function() {
// 				$( "#tabs" ).tabs();
// 			} );
$(function() {
				$( "#image-icon" ).tabs(); 
			} );
});
// function navigate(selecteditem)
// {
// 	var forms=$(".service-form-container");
// 	for(counter=0;counter<forms.length;counter++)
// 	{
// 		forms[counter].style.display="none";
// 	}
// 	switch(selecteditem.id)
// 	{
// 		case "btnflight": document.getElementById("flightset").style.display="block"; break;
// 		case "btnhotel":document.getElementById("hoteldata").style.display="block"; break;
// 		case "btnholiday":document.getElementById("holidaydata").style.display="block"; break;
// 		case "btndiscover":document.getElementById("discoverdata").style.display="block"; break;
// 	}
// }
// });
 // function createchildnode()
 // {
 // 	var child = this.value;
 // 	for(var i=1; i<=child; i++)
 // 	{
	// var dropdown=$("<select></select>");
	// for(var j=1; j<=16;j++)
	// {
	// 	var dropdownoptions="<options>"+i+"</options>";
	// dropdown.text(dropdownoptions);
	// $("#service-form").append(dropdown);
	// }
	

 // 	}
 // }

