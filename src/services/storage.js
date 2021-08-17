export async function saveListOfTowns(listOfTowns) {
  localStorage.setItem("listOfTowns", JSON.stringify(listOfTowns));
}

export async function loadListOfTowns() {
  const listOfTowns = await JSON.parse(localStorage.getItem("listOfTowns"));
  return listOfTowns ?? [];
}

export function addTownInList(listOfTowns, newTown) {
  if (listOfTowns.includes(newTown)) {
    listOfTowns.splice(listOfTowns.indexOf(newTown), 1);
  }
  if (listOfTowns.length >= 10) {
    listOfTowns.pop();
  }
  listOfTowns.unshift(newTown);
}
