// Define troop types as JavaScript objects
var troops = {
    "Hastati": {
      cost: { manupretium: 1, ferrum: 2, victualia: 50, denarii: 100 },
      condition: "Barracks",
      stats: {
        health: 10,
        morale: 5,
        power: 4,
        resistance: 0,
        speed: "normal"
      }
    },
    "Legionnaires": {
      cost: { manupretium: 1, ferrum: 10, victualia: 60, denarii: 120 },
      condition: "Barracks",
      stats: {
        health: 10,
        morale: 10,
        power: 4,
        resistance: 2,
        speed: "normal"
      }
    },
    "Auxiliaries": {
      cost: { manupretium: 1, ferrum: 4, victualia: 60, denarii: 120 },
      condition: "Stables",
      stats: {
        health: 15,
        morale: 5,
        power: 3,
        resistance: 0,
        speed: "fast"
      }
    },
    "Equites": {
      cost: { manupretium: 1, ferrum: 14, victualia: 80, denarii: 160 },
      condition: "Stables",
      stats: {
        health: 15,
        morale: 10,
        power: 5,
        resistance: 1,
        speed: "fast"
      }
    }
  };
  
  // Define player resources JUST FOR EXAMPLE we need to find how to produce this 
  var playerResources = { manupretium: 10,
    ferrum: 20,
    victualia: 200,
    denarii: 500
   };
  
  // Define function to hire troop
  function hireTroop(troopType) {
    var troop = troops[troopType];
    var canAfford = true;
  
    // Check if player can afford troop
    for (var resource in troop.cost) {
      if (playerResources[resource] < troop.cost[resource]) {
        canAfford = false;
        break;
      }
    }
  
    // Deduct resources and add troop if player can afford
    if (canAfford) {
      for (var resource in troop.cost) {
        playerResources[resource] -= troop.cost[resource];
      }
      console.log("Hired " + troopType + "!");
      return true;
    } else {
      console.log("Not enough resources to hire " + troopType + "!");
      return false;
    }
  }
  
  // Define function to simulate turn and maintain troops
  function simulateTurn() {
    for (var troopType in troops) {
      var troop = troops[troopType];
      // Reduce morale and health for each troop
      for (var i = 0; i < 1; i++) {
        if (troop.stats.morale > 0) {
          troop.stats.morale--;
        } else {
          troop.stats.health--;
        }
      }
      // Check if troop needs resupply
      if (troop.stats.morale < 5 || troop.stats.health < 10) {
        console.log(troopType + " needs resupply!");
      }
    }
  }
  
  // Example usage:
  hireTroop("Hastati");
  hireTroop("Legionnaires");
  simulateTurn();
  