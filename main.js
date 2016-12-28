function parrotTrouble() 
{
    var img = document.getElementById("Loro");
    var Checkbox = document.getElementById("Loro");
    var diff = 0;    
    
    if (Checkbox.checked)
        {
            img.innerHTML = "<img src= 'img/loro_cantor.jpg'>";
        }

    else
      {
            img.innerHTML = "<img src= 'img/loro_durmiendo.jpg'>";
    }
 

}

 


function evaluar() 
{
    var aTalking = document.getElementById("Loro").checked;
    var parrotTrouble = document.getElementById("salida");
    var hora = document.getElementById("hora").value;
    
    if (aTalking == true && (hora < 7 || hora > 20))
    {
        //problema
         parrotTrouble.innerHTML = "1";
    }
    else{
        //No hay problema
         parrotTrouble.innerHTML = "0";
                
    }


}