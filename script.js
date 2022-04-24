const numberofnews = +prompt("Siz qancha yangilik kurdingiz ?");

const personalnewdb = {
  count: numberofnews,
  new: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 1; i++) {
  const a = prompt("Oxirgi kurgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baxo bergan bulardingiz ?");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalnewdb.new[a] = b;
  } else {
    console.log("xatolik");
    i--;
  }
}

if (personalnewdb.count < 10) {
  console.log("Qoniqarsiz");
} else if (personalnewdb.count >= 10 && personalnewdb.count < 30) {
  console.log("yaxshi");
} else if (personalnewdb.count >= 30) {
  console.log("Ajoyib");
} else {
  console.log("Error");
}

console.log(personalnewdb);
