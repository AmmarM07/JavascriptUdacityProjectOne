
    // Create Dino Constructor
    function Dino(species,weight,height,diet,where,when,fact,image){
        this.species=species;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
        this.where=where;
        this.when=when;
        this.fact=fact;
        this.image=image
    };
    // Create Dino Objects
    const Triceratops = new Dino("Triceratops",13000,114,"herbavor","North America","Late Cretaceous","First discovered in 1889 by Othniel Charles Marsh","images/triceratops.png");
    const TyrannosaurusRex = new Dino("Tyrannosaurus Rex",11905,144,"carnivor","North America","Late Cretaceous","The largest known skull measures in at 5 feet long.","images/tyrannosaurusrex.png");
    const Anklyosaurus = new Dino("Anklyosaurus",10500,55,"herbavor","North America","Late Cretaceous","Anklyosaurus survived for approximately 135 million years.","images/anklyosaurus.png");
    const Brachiosaurus = new Dino("Brachiosaurus",70000,372,"herbavor","North America","Late Jurasic","An asteroid was named 9954 Brachiosaurus in 1991.","images/brachiosaurus.png");
    const Stegosaurus = new Dino("Stegosaurus",11600,79,"herbavor","North America, Europe, Asia","Late Jurasic to Early Cretaceous","The Stegosaurus had between 17 and 22 seperate places and flat spines.","images/stegosaurus.png");
    const Elasmosaurus = new Dino("Elasmosaurus",16000,59,"carnivor","North America","Late Cretaceous","Elasmosaurus was a marine reptile first discovered in Kansas.","images/elasmosaurus.png");
    const Pteranodon = new Dino("Pteranodon",44,20,"carnivor","North America","Late Cretaceous","Actually a flying reptile, the Pteranodon is not a dinosaur.","images/pteranodon.png");
    const Pigeon = new Dino("Pigeon",0.5,9,"herbavor","World Wide","Holocene","All birds are living dinosaurs.","images/pigeon.png");

    // Use IIFE to get human data from form
        // Create Human Object

    const humanData =(function (){
        let nameIn = document.getElementById("name").value;
        let feetIn = document.getElementById("feet").value;
        let inchesIn = document.getElementById("inches").value;
        let weightIn = document.getElementById("weight").value;
        let dietIn = document.getElementById("diet").value;
        let imageIn="images/human.png";
        function passName(){
        return nameIn;
        };
        function passHeight(){
            //calculating height in inches 
            let height = parseInt(feetIn*12)+parseInt(inchesIn);
            return height;
        };
        function passWeight(){
            return weightIn;
        };
        function passDiet(){
            return dietIn;
        };
        function passImage(){
            return imageIn;
        };
        return {
            name: passName,
            height: passHeight,
            weight: passWeight,
            diet: passDiet,
            image: passImage,
        }   
    })();
    var humanObject =humanData;
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareHeight(dinoName){
        return `The height of ${dinoName.species} is ${dinoName.height} inches , and your height is ${humanObject.height()} inches.`;
    };
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(dinoName){
        return `The weight of the ${dinoName.species} is ${dinoName.weight} lbs , and your weight is ${humanObject.weight()} lbs.`;
    };
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(dinoName){
        return `The ${dinoName.species} has diet of ${dinoName.diet} , while you have diet of ${humanObject.diet()} .`;
    };

   
    // function to generate random integer number to be used in switch statment for fact proprety 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    // switch decalration for fact to be used in tiles array

    
    let generateRandomFact= function(dinoName){
        let factIndex = getRandomInt(9);
        let factValue=""
        switch (factIndex){
            case 0:
                factValue = `${dinoName.species} has ${dinoName.diet} diet.`;
                break;
            case 1 :
                factValue = `${dinoName.species} lived in ${dinoName.where}.`;
                break;
            case 2 :
                factValue = compareDiet(dinoName);
                break;            
            case 3 :
                factValue = compareWeight(dinoName);
                break; 
            case 4 :
                factValue = compareHeight(dinoName);
                break;
            case 5 :
                factValue = dinoName.fact;
                break;
            case 6 :
                factValue = `${dinoName.species} lived in ${dinoName.when} age.`;
                break;
            case 7 :
                factValue = `${dinoName.species}'s height is ${dinoName.height} inches.`;
                break; 
            case 8 : 
            factValue = `${dinoName.species}'s weight is ${dinoName.weight} lbs.`;
                break;    
        }
        return factValue;
    }
   
    // Generate Tiles for each Dino in Array
    const tilesArray = [
        {tyrannosaurusRex :{
            name : TyrannosaurusRex.species,
            fact : generateRandomFact(TyrannosaurusRex),
            image : TyrannosaurusRex.image
        }},
        {triceratops : {
            name : Triceratops.species,
            fact : generateRandomFact(Triceratops),
            image : Triceratops.image
        }},
        {anklyosaurus: {
            name : Anklyosaurus.species,
            fact : generateRandomFact(Anklyosaurus),
            image : Anklyosaurus.image
        }},
        {brachiosaurus: {
            name : Brachiosaurus.species,
            fact : generateRandomFact(Brachiosaurus),
            image : Brachiosaurus.image
        }},
        {human :{
            name : humanObject.name(),
            image : humanObject.image()
        }},
        {stegosaurus: {
            name :Stegosaurus.species,
            fact : generateRandomFact(Stegosaurus),
            image : Stegosaurus.image
        }},
        {elasmosaurus: {
            name : Elasmosaurus.species,
            fact : generateRandomFact(Elasmosaurus),
            image : Elasmosaurus.image
        }},
        {pteranodon : {
            name : Pteranodon.species,
            fact : generateRandomFact(Pteranodon),
            image : Pteranodon.image
        }},
        {pigeon : {
            name : Pigeon.species,
            fact : Pigeon.fact,
            image : Pigeon.image
        
        }}
    ];
  
 
    // Remove form from screen
        let hideForm=document.getElementById('btn').addEventListener("click",function(){
            let elem=document.getElementById('dino-compare');
            elem.remove();
        });

// On button click, prepare and display infographic
    let displayIonfographic =document.getElementById('btn').addEventListener("click",function(){
        let mainElement = document.getElementById('grid');
       

    mainElement.innerHTML=`
        <div class="grid-item">
            <h3> ${tilesArray[0][Object.keys(tilesArray[0]).join('')]['name']}</h3>
            <img src=${tilesArray[0][Object.keys(tilesArray[0]).join('')]['image']} alt="">
            <p>${tilesArray[0][Object.keys(tilesArray[0]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[1][Object.keys(tilesArray[1]).join('')]['name']}</h3>
            <img src=${tilesArray[1][Object.keys(tilesArray[1]).join('')]['image']} alt="">
            <p>${tilesArray[1][Object.keys(tilesArray[1]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[2][Object.keys(tilesArray[2]).join('')]['name']}</h3>
            <img src=${tilesArray[2][Object.keys(tilesArray[2]).join('')]['image']} alt="">
            <p>${tilesArray[2][Object.keys(tilesArray[2]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[3][Object.keys(tilesArray[3]).join('')]['name']}</h3>
            <img src=${tilesArray[3][Object.keys(tilesArray[3]).join('')]['image']} alt="">
            <p>${tilesArray[3][Object.keys(tilesArray[3]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[4][Object.keys(tilesArray[4]).join('')]['name']} </h3>
            <img src=${tilesArray[4][Object.keys(tilesArray[4]).join('')]['image']} alt=""> 
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[5][Object.keys(tilesArray[5]).join('')]['name']}</h3>
            <img src=${tilesArray[5][Object.keys(tilesArray[5]).join('')]['image']} alt="">
            <p>${tilesArray[5][Object.keys(tilesArray[5]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[6][Object.keys(tilesArray[6]).join('')]['name']}</h3>
            <img src=${tilesArray[6][Object.keys(tilesArray[6]).join('')]['image']} alt="">
            <p>${tilesArray[6][Object.keys(tilesArray[6]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[7][Object.keys(tilesArray[7]).join('')]['name']}</h3>
            <img src=${tilesArray[7][Object.keys(tilesArray[7]).join('')]['image']} alt="">
            <p>${tilesArray[7][Object.keys(tilesArray[7]).join('')]['fact']}<p>
        </div>
        <div class="grid-item">
            <h3> ${tilesArray[8][Object.keys(tilesArray[8]).join('')]['name']}</h3>
            <img src=${tilesArray[8][Object.keys(tilesArray[8]).join('')]['image']} alt="">
            <p>${tilesArray[8][Object.keys(tilesArray[8]).join('')]['fact']}<p>
        </div>` 
    });
