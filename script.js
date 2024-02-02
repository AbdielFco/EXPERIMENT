
function changetext(myid) {
    // Obtener el elemento con ID ""
    let mytopic = document.getElementById("centraltopic");//Titulo central
    let mytext = document.getElementById("centraltext");//Titulo central
    let mytextr = document.getElementById("righttext");//Titulo central


    if (myid=="console") {

    	mytopic.textContent = "CONSOLE.LOG()";
	mytext.textContent = "Challenge consola bla bla bla bla blaaaaaa";
	mytextr.textContent = "Esto trato de esto y aquello";
    }else if (myid=="alert") {

	mytopic.textContent = "ALERT()";   
    }else if (myid=="prompt") {

	mytopic.textContent = "PROMPT()";   
    }else if (myid=="home") {

	mytopic.textContent = "¡Welcome!"; 
	mytext.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";
	mytextr.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";     
    }else if (myid=="none") {

	//    
    }else if (myid=="none") {

	//    
    }



// mycentraltext.innerHTML = "<strong>Hola</strong>";
}


function hide() {
   let hide1 = document.getElementById("textarea1");
   let hide2 = document.getElementById("textarea2");
   hide1.style.display = "initial";
   hide2.style.display = "initial";
}









