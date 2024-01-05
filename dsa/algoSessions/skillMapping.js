/*

Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

Example(s)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False

🛠️ IMPLEMENT
function canMatchFellows(skillMap) {

*/
function canMatchFellows(skillMap) {
  if (Object.keys(skillMap).length % 2 !== 0) return false;

  let skills = {}
  for (let fellow in skillMap) {
    let rating = skillMap[fellow];
    if (skills[rating] === undefined) {
      skills[rating] = 1
    } else {
      skills[rating]++;
    }
  }

  for (let skill in skills) {
    if (skills[skill] % 2 !== 0) return false;
  }

  return true;
}

/*

function canMatchFellows(skillMap) {
  let skillSet = new Set()
  for (let fellow in skillMap) {
    let skill = skillMap[fellow]
    if (skillSet.has(skill)) {
      skillSet.delete(skill)
    } else {
      skillSet.add(skill)
    }
  }
  return skillSet.size == 0
}

*/

let skillMap1 = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
console.log(canMatchFellows(skillMap1) == true);

let skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
console.log(canMatchFellows(skillMap) == true)

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
console.log(canMatchFellows(skillMap) == false)

skillMap = {"oliver": 3, "pixel": 3, "pinky": 3}
console.log(canMatchFellows(skillMap) == false)

skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5, "paavo" : 1}
console.log(canMatchFellows(skillMap) == false)

skillMap = {"oliver": 3, "pixel": 3, "pinky": 3, "tobey": 3}
console.log(canMatchFellows(skillMap) == true)

console.log(canMatchFellows({"oliver": 1}) == false)

console.log(canMatchFellows({}) == true)