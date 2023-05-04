class Calculator{
    constructor(){
        this.prec=[];
        this.tempsDebut=0;
    }


    ajoutCarac(caractere){
        console.log(`On ajoute : ${caractere}`);
        if (this.tempsDebut==0){
            this.tempsDebut=performance.now(); 
        }
        document.getElementById("input")[0].value+=caractere;
    }

    suppCarac(){
        let listeCarac=document.getElementById("input")[0].value;
        
        console.log(`On enlève ${listeCarac.at(-1)}`);
        
        document.getElementById("input")[0].value=listeCarac.slice(0,-1); 
       
        if (listeCarac.length==0){
            this.tempsDebut=0;
        }
    }

    reset(){
        document.getElementById("input")[0].value="";
        this.tempsDebut=0;
        console.log("Reset");
    }

    operer(){
        let affichage=document.getElementById("input")[0].value;

        console.log(`On essaie de faire : ${affichage}`);
        try{
            var resultat=eval(affichage);
            
            
            document.getElementById("resultat").innerHTML=affichage;
            document.getElementById("result").innerHTML=resultat;

            
            this.prec.push(affichage);

            console.log("Succès serveur");
            let timeTakenMs=performance.now()-this.tempsDebut;
            this.envoieSucces(timeTakenMs);
            this.tempsDebut=0;
        }
        catch (err){
            document.getElementById("resultat").innerHTML=affichage;
            document.getElementById("result").innerHTML="Error"; 
            
            console.log("Echec serveur.");
            this.envoieEchec();
        }
        
        this.reset();
    }

    precedent(){
        console.log("On passe au précédent");
        if (this.prec.length!=0){
            document.getElementsByClassId("input")[0].value=this.prec.pop();
           this.tempsDebut=performance.now(); 
        }
        
    }

    envoieSucces(tempsPris){
        let url="http://localhost:3000/Success"
        let dataraw = {
            time : tempsPris
        }
        var xhttp=new XMLHttpRequest();
        xhttp.open("POST",url,true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(dataraw));

        xhttp.onload = function() {
            console.log(this.responseText);
            let reponseAffichee=JSON.parse(this.responseText);
            alert("Pourcentage de requêtes plus rapides : " + reponseAffichee[1].toFixed(0) + " % \nTemps moyen des requêtes : "+ reponseAffichee[0].toFixed(2) + "ms");
        };

    }

    envoieEchec(){
        
        var xhttp=new XMLHttpRequest;
        xhttp.open("POST","http://localhost:3000/Error",true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

        
        xhttp.onload = function(){
            console.log(this.responseText);
            let reponseAffichee=JSON.parse(this.responseText);
            if (reponseAffichee[0]!=null){
                alert("Date du dernier échec : " + reponseAffichee[0]["created_at"] + "\n Nombre d'échecs : " + reponseAffichee[1]);
            }
            else{
                alert("Pas de dernier échec");
            }
            
        }
    }
}

let calculator = new Calculator(); 
