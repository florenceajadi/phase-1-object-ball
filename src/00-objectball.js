function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          Alan_Anderson: { 
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          Reggie_Evans: {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          Brook_Lopez: {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          Mason_Plumlee: {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          Jason_Terry: {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          Jeff_Adrien: {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
  
          }, 

  steals: 2,
          Bismak_Biyombo: {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
         steal: 3, 
          DeSagna_Diop: {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },

          steal: 4,
          Ben_Gordan: {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },

          steal: 5, 
          Brendan_Haywood: {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }


  function homeTeam() {
    return gameObject().home
  }
  //console.log(homeTeam());

  function awayTeam() {
    return gameObject().away
  }
  //console.log(awayTeam());

 // returns the number of points scored for that player
function numPointsScored(name) {
  if (gameObject().home.players[name]) {
    return (gameObject().home.players[name].points)
  }
  else { 
   return gameObject().away.players[name].points
  }
}
//console.log(numPointsScored("Alan_Anderson"))

    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
  
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
     
// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(person) {
  if (gameObject().home.players[person]) {
    return gameObject().home.players[person].shoe
  }
  else {
    return gameObject().away.players[person].shoe
  }
}
// console.log(shoeSize("Jeff_Adrien"))

// Build a function, `teamColors`, that takes in an argument of the team name and
// returns an array of that teams colors.
function teamColors(teamName) {
  if (gameObject().away.teamName === teamName) {
    return (gameObject().away.colors)
  }
  else {
    return gameObject().home.colors 
  }
  }
// teamColors("Brooklyn Nets")
// teamColors("Charlotte Hornets")



// - Build a function, `teamNames`, that operates on the game object to return an array of the team names.
function teamNames() {
  const array = []
  array.push(gameObject().home.teamName)
  array.push(gameObject().away.teamName)
  return array

  }
// teamNames();


// - Build a function, `playerNumbers`, that takes in an argument of a team name
// and returns an array of the jersey number's for that team.
function playerNumbers(teamSpirit) {
  if (gameObject().home.teamName[teamSpirit]) {
    return (gameObject().home.teamName[teamSpirit].number)
  }
  else {
    return gameObject().away[teamSpirit].number
  }
}
// console.log(playerNumbers());


// function teamColors(teamName) {
//   if (gameObject().away.teamName === teamName) {
//     return (gameObject().away.colors)
//   }
//   else {
//     return gameObject().home.colors 
//   }
//   }


// - Build a function, `playerStats`, that takes in an argument of a player's name
// and returns a object of that player's stats. Check out the following example
function playerStats(status) {
  if (gameObject().home[status]) {
   return gameObject().home[status].players 
  }

else {
  return gameObject().away[status].players
}
}
// console.log(playerStats());



// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
//Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
function bigShoeRebounds() {
  return gameObject().home.players.Mason_Plumlee.rebounds
}
// debugger
// console.log(bigShoeRebounds());

// Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
  return gameObject().away.players.Ben_Gordan.points
}
//console.log(mostPointsScored());


// Which team has the most points? Call the function winningTeam.
function winningTeam() {
  return gameObject().away.players.points
}
console.log(winningTeam());
// Which player has the longest name? Call the function playerWithLongestName.






  // function players() {
  //   return Object.assign({}, homeTeam().players, awayTeam().players)
  // }

   
  //   function numPointsScored(playerName) {
  //       return players()[playerName].points

  //     }
      
    
    

  //     function shoeSize() {
  //       return Object.assign({}, homeTeam().players, awayTeam().players)
    
  //     }

  //     function teamNames() {
  //       const homeTeamName = homeTeam().teamName
  //       const awayTeamName = awayTeam().teamName
      
  //     }

  //     function playerNumbers(Name) {
  //       const homeTeamName = homeTeam().teamName
  //       const awayTeamName = awayTeam().teamName
  //       if (Name === homeTeamName) {
  //         const homeTeamPlayers = homeTeam().players
  //         for (player in homeTeamPlayers) {
  //           playerNumbers.push(player.number);
  //         }
  //       } else {
          

  //         }
  //       }
      


  //     function playerStats(playersInput) {
  //       return players()[playerInput].points.rebounds.assists.steals.blocks.slamDunks
  //     }

     

  
    


    

