// JavaScript Document
	function visTxt()
	{
	var språktype="";

	språktype = document.getElementById("select_id").value; 

	if(språktype==""){
        document.getElementById("melding").innerHTML="Velg et språk ";}

	else{document.getElementById("melding").innerHTML="Du har valgt programeringsspråk " +språktype;
	}}
