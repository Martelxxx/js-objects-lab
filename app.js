const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ]
}
  
  
  /* 
  Exercise 3
  Goes
  Below
  */
   
  game.difficulty = 'easy'; //Exercise 3

  game.party.push(pokemon[3]); //Exercise 4

  game.party.push(pokemon[3], pokemon[9], pokemon[7]); //Exercise 5

  let party = [                                 // Exercise 6
    game.party.sort((a,b) => b.HP - a.HP)]    

    game.gyms.forEach(gym => {               //Exercise 7
    if(gym.difficulty < 3) {           
    gym.completed =true;  
    }           
game.party[0] = pokemon[4];  // Exercise 8

         }); 
     game.party.forEach(pokemon =>  // Exercise 9
        console.log(pokemon.name)); {  
              
 for(let i = 0; i < pokemon.length; i++) {  // Excercise 10
            if(pokemon[i].starter) {
    console.log(pokemon[i].name);
 }
game.catchPokemon = function() {  // Exercise 11
    game.party.push(pokemonObj);
}
// game.gyms.forEach(gym => {               //Exercise 13
//     if(gym.difficulty < 6) {           
//     gym.completed =true;  
//     }
//     })
game.gymStatus = function() {  // Exercise 14
    let gymTally = 0;
    for (let i = 0; i < game.gyms.length; i++) {
        if(this.gyms.completed === 'true') {
             this.gyms.completed += gymTally
        } 
    }
}
game.partyCount = function() {  // Exercise 15
}
// game.gyms.forEach(gym => {               //Exercise 16
//     if(gym.difficulty < 8) {           
//     gym.completed =true;  
//     }
//     }
    console.log(game);  //Exercise 17
 } 
};
    
        
        
            

  

    




