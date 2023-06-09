
/*
Possible Vacations

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.

The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

{
  'Phoenix': [], // dead-end
  'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the number of flights needed for each destination. If a destination is not reachable, do not include it in the output.


EXAMPLE(S)
possibleVacations(
  {'Phoenix': ['Seattle'], 'Seattle':[]},
  'Seattle',
  ['Seattle']
)
returns {'Seattle': 1}

possibleVacations(
  {'Phoenix': [], 'Seattle':[]},
  'Phoenix',
  ['Seattle']
)
returns {}

possibleVacations(
  {},
  'DC',
  []
)
returns {}

possibleVacations(
  {'Phoenix': ['Seattle', 'Boston'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']},
  'Phoenix',
  ['Boston']
) return {}

                                      Phoenix
                              Seattle           Atlanta
                      Boston          Phoenix

possibleVacations(
  {'Phoenix': ['Seattle', 'Atlanta'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']},
  'Phoenix',
  ['Phoenix']
) return {} or {Phoenix: 0}


  {'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Atlanta'], 'Boston': ['Phoenix']},
  'Phoenix',
  ['Seattle', 'Boston']
                  ^

  results = {STL: 1}
  visitedSet = [PHX, ]

Algo:
  results = {}
  visited set that is unique to each recursive call
  add homecity to visited set

      one time check: check to see if flights table has homeCity as the key
        NO: return {}
      YES: outer loop: traverse through the destinationList and at each destination
        YES: innerLoop: traverse the values array of departure city to check if destination is present

          base case: you reach the destination
            add {destination: min(results[destination],num_airports_so_far}) to results
            return

          NO:  add departure city to the visited set
          for each airport:
            if airport not in visited set:
              innerLoop(updated set, 1 + num airports so far)

  outer loop: end when we've gone through all destinations
  return results

*/

function possibleVacations(flightTable, homeCity, destinationList) {

  let results = {}
  let visited = new Set()

  function helper(departure, destination, visitedSet,numAirportsSoFar) {
    if (flightTable[departure].includes(destination)) {
      results[destination] = Math.min(results[destination] === undefined ? 1 : results[destination],numAirportsSoFar)
      return;
    } else {
      visitedSet.add(departure)
      for (let airport of flightTable[departure]) {
        if (!visitedSet.has(airport)) {
          helper(airport,destination,visitedSet,numAirportsSoFar + 1)
        }
      }
    }
  }

  if (flightTable[homeCity]) {
    for (let destination of destinationList) {
      helper(homeCity,destination,visited,1)
    }
  }
  else {
    return {}
  }

  return results
}

function possibleVacations(flightTable, homeCity, destinationList) {
  const desired = new Set(destinationList);
  const seen = new Set([homeCity]);
  const results = {};
  const queue = [[homeCity, 0]]; // initialized with a tuple of the home city at distance zero

  while (queue.length > 0) {
    const [departure, distance] = queue.shift(); // dequeue
    seen.add(departure);

    const flights = flightTable[departure];
    for (let i = 0; i < flights.length; i++) {
      const arrival = flights[i];
      if (seen.has(arrival)) {
        continue;
      } else {
        queue.push([arrival, distance + 1]);
      }

      if (desired.has(arrival) && !results[arrival]) {
        results[arrival] = distance + 1;
      }

    }
  }
  return results;
}


console.log(
  possibleVacations(
    {'Phoenix': ['Seattle'], 'Seattle':[]},
    'Phoenix',
    ['Seattle']
), ' expected {Seattle: 1}')

console.log(
  possibleVacations(
    {'Phoenix': [], 'Seattle':[]},
    'Phoenix',
    ['Seattle']
  ), ' expected {}'
)

console.log(
  possibleVacations(
    {'Phoenix': ['Seattle', 'Boston'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']},
    'Phoenix',
    ['Boston']
  ), ' expected {Boston: 1}'
)

            // traverse the values array of that airport and check if destination is present
            //   YES: return {destination : 2}
            //   NO: repeat...