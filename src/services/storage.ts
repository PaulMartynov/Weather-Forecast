export async function saveListOfTowns(listOfTowns: string[]): Promise<void> {
  localStorage.setItem("listOfTowns", JSON.stringify(listOfTowns));
}

export async function loadListOfTowns(): Promise<string[]> {
  const listOfTowns = await JSON.parse(
    <string>localStorage.getItem("listOfTowns")
  );
  return listOfTowns ?? [];
}

export function addTownInList(listOfTowns: string[], newTown: string): void {
  if (listOfTowns.includes(newTown)) {
    listOfTowns.splice(listOfTowns.indexOf(newTown), 1);
  }
  if (listOfTowns.length >= 10) {
    listOfTowns.pop();
  }
  listOfTowns.unshift(newTown);
}
