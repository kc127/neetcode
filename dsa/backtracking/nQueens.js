// template for backtracking problem
function outer(outerArg1, outerArg2,...) {
  let results, innerArg1, innerArg2...;

  function isBad(){...};
  function isGood(){...};

  function inner(solution, innerArg1, innerArg2,...) {
    if (isGood(solution)) {
      results.push(solution);
      return;
    }
    if (isBad(solution)) return;

    for (let doMutate of ALL_CHANGE_FUNCS) {
      doMutate(solution) // modify currentSolution in place
      inner(nextSolution);
      doMutate(solution, "undo") // backtrack;
    }
  }

  inner([]);
  return results;
}