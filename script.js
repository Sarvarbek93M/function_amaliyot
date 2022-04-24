let numberofnews;

function startProject() {
  numberofnews = +prompt("Siz qancha yangilik kurdingiz ?");

  while (numberofnews == "" || numberofnews == null || isNaN(numberofnews)) {
    numberofnews = +prompt("Siz qancha yangilik kurdingiz ?");
  }
}
startProject();

const personalnewdb = {
  count: numberofnews,
  new: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNew() {
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
}
rememberNew();

function showpersonallevel() {
  if (personalnewdb.count < 10) {
    console.log("Qoniqarsiz");
  } else if (personalnewdb.count >= 10 && personalnewdb.count < 30) {
    console.log("yaxshi");
  } else if (personalnewdb.count >= 30) {
    console.log("Ajoyib");
  } else {
    console.log("Error");
  }
}
showpersonallevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalnewdb);
  }
}

showMyDB(personalnewdb.privat);

function writeyourgenres() {
  for (let i = 1; i <= 3; i++) {
    personalnewdb.genres[i - 1] = prompt(`Sizning sevimli janringiz ${i}`);
  }
}

writeyourgenres();
