function pickOne(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function pickGolemDesperto(array1, array2) {
  const indiceAleatorio1 = Math.floor(Math.random() * array1.length);
  const indiceAleatorio2 = Math.floor(Math.random() * array2.length);

  const elementoAleatorio1 = array1[indiceAleatorio1];
  const elementoAleatorio2 = array2[indiceAleatorio2];

  return elementoAleatorio1 + " Movido a " + elementoAleatorio2;
}

function pickGenero(raca) {
  if (["Da", "Me"].includes(raca)) {
    // Dahllan e Medusas podem ser apenas mulheres
    return "F";
  } else if (["Mi"].includes(raca)) {
    // Minotauros podem ser apenas homens
    return "M";
  }
  var generos = ["F", "M"];
  return pickOne(generos);
}

function pickRaca(maisHumanos, ultimaRaca, despertosGolens) {
  var racas = [
    { key: "Hu", m: "Humano", f: "Humana" },
    { key: "An", m: "Anão", f: "Anã" },
    { key: "Da", f: "Dahllan" },
    { key: "El", m: "Elfo", f: "Elfa" },
    { key: "Gb", m: "Goblin" },
    { key: "Gl", m: "Golem" },
    { key: "Hy", m: "Hynne" },
    { key: "Kl", m: "Kliren" },
    { key: "Le", m: "Lefou" },
    { key: "Me", f: "Medusa" },
    { key: "Mi", m: "Minotauro" },
    { key: "Os", m: "Osteon" },
    { key: "Qa", m: "Qareen" },
    { key: "Ts", m: "Tritão", f: "Sereia" },
    { key: "Si", m: "Sílfide" },
    { key: "Su", m: "Suraggel" },
    { key: "Tr", m: "Trog" },
    { key: "kai", m: "Kaijin" },
    { key: "Kap", m: "Kappa" },
    { key: "Mas", m: "Mashin" },
    { key: "Kap", m: "Kappa" },
    { key: "Nez", m: "Nezumi" },
    { key: "Teg", m: "Tengu" },
    { key: "M_Orc", m: "Meio-Orc" },
    { key: "Orc", m: "Orc" },
    { key: "Tab", m: "Tabrachi" },
    { key: "Ogr", m: "Ogro" },
    { key: "Bug", m: "Bugbear" },
    { key: "Hob", m: "Hobgoblin" },
    { key: "Gno", m: "Gnoll" },
    { key: "Kal", m: "Kallyanach" },
    { key: "Min", m: "Minauro" },
  ];
  var raca;
  if (!maisHumanos) {
    raca = pickOne(racas);
  } else {
    var humano = racas.shift();
    if (ultimaRaca === humano.key) {
      raca = pickOne(racas);
    } else {
      raca = humano;
    }
    racas.unshift(humano);
  }

  if (raca.key === "Gl") {
    if (despertosGolens) {
      raca = pickGolemVarient();
    } else {
      raca = pickGolem();
    }
  } else if (raca.key === "Qa") {
    raca = pickQareen();
  } else if (raca.key === "Su") {
    raca = pickSuraggel();
  } else if (raca.key === "Tr") {
    raca = pickTrog();
  }

  return raca;
}

function pickGolemVarient() {
  var chassi = [
    "Barro",
    "Bronze",
    "Espelhos",
    "Ferro",
    "Gelo Eterno",
    "Pedra",
    "Sucata",
  ];
  var energia = ["Alquímica", "Elemental", "Sagrada", "Vapor"];

  return { key: "Gl", m: `Golem de ${pickGolemDesperto(chassi, energia)}` };
}

function pickGolem() {
  var golens = [
    { key: "Gl", m: "Golem (Água)" },
    { key: "Gl", m: "Golem (Ar)" },
    { key: "Gl", m: "Golem (Fogo)" },
    { key: "Gl", m: "Golem (Terra)" },
  ];
  return pickOne(golens);
}

function pickQareen() {
  var qareens = [
    { key: "Qa", m: "Qareen (Água)" },
    { key: "Qa", m: "Qareen (Ar)" },
    { key: "Qa", m: "Qareen (Fogo)" },
    { key: "Qa", m: "Qareen (Luz)" },
    { key: "Qa", m: "Qareen (Terra)" },
    { key: "Qa", m: "Qareen (Trevas)" },
  ];
  return pickOne(qareens);
}

function pickSuraggel() {
  var suraggel = [
    { key: "Su", m: "Aggelus" },
    { key: "Su", m: "Sulfure" },
  ];
  return pickOne(suraggel);
}

function pickTrog() {
  var trog = [
    { key: "Tr", m: "Trog Anão" },
    { key: "Tr", m: "Trog" },
  ];
  return pickOne(trog);
}

function pickClasse() {
  var classes = [
    { key: "Ar", m: "Arcanista" },
    { key: "Ba", m: "Bárbaro", f: "Bárbara" },
    { key: "Bd", m: "Bardo", f: "Barda" },
    { key: "Bu", m: "Bucaneiro", f: "Bucaneira" },
    { key: "Ca", m: "Caçador", f: "Caçadora" },
    { key: "Cv", m: "Cavaleiro", f: "Cavaleira" },
    { key: "Cl", m: "Clérigo", f: "Clériga" },
    { key: "Dr", m: "Druida", f: "Druidisa" },
    { key: "Ge", m: "Guerreiro", f: "Guerreira" },
    { key: "In", m: "Inventor", f: "Inventora" },
    { key: "La", m: "Ladino", f: "Ladina" },
    { key: "Lu", m: "Lutador", f: "Lutadora" },
    { key: "No", m: "Nobre" },
    { key: "Pa", m: "Paladino", f: "Paladina" },
  ];
  var classe = pickOne(classes);
  if (classe.key === "Ar") {
    classe = pickArcanista();
  }
  return classe;
}

function pickArcanista() {
  var arcanistas = [
    { key: "Ar", m: "Bruxo", f: "Bruxa" },
    { key: "Ar", m: "Feiticeiro", f: "Feiticeira" },
    { key: "Ar", m: "Mago", f: "Maga" },
  ];
  return pickOne(arcanistas);
}

function pickOrigem(genero) {
  var origens = [
    { key: "Ac", m: "Acólito", f: "Acólita" },
    { key: "Aa", m: "Amigo dos Animais", f: "Amiga dos Animais" },
    { key: "Am", m: "Amnésico", f: "Amnésica" },
    { key: "Ar", m: "Aristocrata" },
    { key: "As", m: "Artesão", f: "Artesã" },
    { key: "At", m: "Artista" },
    { key: "Al", m: "Assistente de Laboratório" },
    { key: "Ba", m: "Batedor", f: "Batedora" },
    { key: "Cp", m: "Capanga" },
    { key: "Ch", m: "Charlatão", f: "Charlatã" },
    { key: "Ci", m: "Circense" },
    { key: "Cr", m: "Criminoso", f: "Criminosa" },
    { key: "Cu", m: "Curandeiro", f: "Curandeira" },
    { key: "Er", m: "Eremita" },
    { key: "Ec", m: "Escravo", f: "Escrava" },
    { key: "Es", m: "Estudioso", f: "Estudiosa" },
    { key: "Fa", m: "Fazendeiro", f: "Fazendeira" },
    { key: "Fo", m: "Forasteiro", f: "Forasteira" },
    { key: "Gl", m: "Gladiador", f: "Gladiadora" },
    { key: "Gu", m: "Guarda" },
    { key: "He", m: "Herdeiro", f: "Herdeira" },
    { key: "Hc", m: "Herói Camponês", f: "Heroína Camponesa" },
    { key: "Mj", m: "Marujo", f: "Maruja" },
    { key: "Mt", m: "Mateiro", f: "Mateira" },
    { key: "Mg", m: "Membro de Guilda", f: "Membra de Guilda" },
    { key: "Me", m: "Mercador", f: "Mercadora" },
    { key: "Mi", m: "Minerador", f: "Mineradora" },
    { key: "No", m: "Nômade" },
    { key: "Pi", m: "Pivete" },
    { key: "Re", m: "Refugiado", f: "Refugiada" },
    { key: "Se", m: "Seguidor", f: "Seguidora" },
    { key: "Sv", m: "Selvagem" },
    { key: "So", m: "Soldado", f: "Soldada" },
    { key: "Tv", m: "Taverneiro", f: "Taverneira" },
    { key: "Tr", m: "Trabalhador", f: "Trabalhadora" },
  ];
  var origem = pickOne(origens);
  return genero === "F" && origem.f ? origem.f : origem.m;
}

function pickDeus(devoto) {
  var deuses = [
    { key: "Aharadak", r: [], c: [] },
    { key: "Allihanna", r: ["Da", "El", "Hu"], c: ["Ba", "Ca", "Cl", "Dr"] },
    { key: "Arsenal", r: [], c: ["Ba", "Cl", "Cv", "Ge", "Lu"] },
    {
      key: "Azgher",
      r: ["Hu", "Qa"],
      c: ["Ar", "Ba", "Ca", "Cl", "Cv", "Ge", "No", "Pa"],
    },
    {
      key: "Hyninn",
      r: ["Gb", "Hu", "Hy"],
      c: ["Bd", "Bu", "Cl", "In", "La", "No"],
    },
    { key: "Kallyadranoch", r: [], c: ["Ar", "Cl", "Cv", "Ge", "Lu", "No"] },
    { key: "Khalmyr", r: ["An", "Hu"], c: ["Cl", "Cv", "Ge", "No", "Pa"] },
    { key: "Lena", r: ["Da", "Hu", "Qa"], c: ["Cl", "No", "Pa"] },
    { key: "Lin-Wu", r: ["An", "Hu"], c: ["Cl", "Cv", "Ge", "No", "Pa"] },
    { key: "Marah", r: ["El", "Hu", "Hy", "Qa"], c: ["Bd", "Cl", "No", "Pa"] },
    {
      key: "Megalokk",
      r: ["Gb", "Hu", "Me", "Mi", "Tr"],
      c: ["Ba", "Ca", "Cl", "Dr", "Lu"],
    },
    {
      key: "Nimb",
      r: ["Gb", "Hu", "Qa"],
      c: ["Ba", "Bd", "Bu", "Cl", "In", "La"],
    },
    {
      key: "Oceano",
      r: ["Da", "Hu", "Hy", "Mi", "Ts"],
      c: ["Ba", "Bu", "Ca", "Cl", "Dr"],
    },
    {
      key: "Sszzaas",
      r: ["Hu", "Me"],
      c: ["Ar", "Bd", "Bu", "Cl", "In", "La", "No"],
    },
    {
      key: "Tanna-Toh",
      r: ["Gl", "Hu", "Kl"],
      c: ["Ar", "Bd", "Cl", "In", "No", "Pa"],
    },
    {
      key: "Tenebra",
      r: ["An", "Hu", "Os", "Qa", "Tr"],
      c: ["Ar", "Bd", "Cl", "La"],
    },
    { key: "Thwor", r: [], c: [] },
    { key: "Thyatis", r: [], c: ["Cl", "Cv", "Ge", "Hu", "In", "Lu", "Pa"] },
    { key: "Valkaria", r: [], c: [] },
    { key: "Wynna", r: ["El", "Gl", "Hu", "Qa", "Si"], c: ["Ar", "Bd", "Cl"] },
  ];

  if (devoto) {
    return pickOne(deuses);
  } else {
    return { key: "Ninguém", r: [], c: [] };
  }
}

function checkDeus(deus, raca, classe) {
  if (classe === "Dr" && !deus.c.includes("Dr")) {
    return false;
  }

  if (classe === "Pa" && deus.key === "Ninguém") {
    return true;
  }

  if (classe === "Pa" && !deus.c.includes("Pa")) {
    return false;
  }

  if (deus.c.length !== 0 && deus.r.length !== 0) {
    // Se deus possui restrição para raça e classe, apenas uma das duas precisa ser devota
    return deus.c.includes(classe) || deus.r.includes(raca);
  } else if (deus.c.length !== 0) {
    // Se deus possui apenas restrição de classe, a classe do personagem tem que ser devota
    return deus.c.includes(classe);
  } else if (deus.r.length !== 0) {
    // Se deus possui apenas restrição de raça, a raça do personagem tem que ser devota
    return deus.r.includes(raca);
  } else {
    // Deus não possui nehuma restrição de classe ou de raça
    return true;
  }
}

function rollAtributos() {
  document.getElementById("roll-atrs").classList.add("hide");
  document.getElementById("roll-low").classList.add("hide");
  var atributos = [];
  for (let i = 0; i < 6; i++) {
    atributos.push(rollAtributo());
  }
  atributos.sort((a, b) => a - b);
  var modificadores = atributos.reduce((a, b) => a + b, 0);
  document.getElementById("atributos-array").value = JSON.stringify(atributos);
  document.getElementById("atributos").innerHTML =
    "Seus atributos são " +
    atributos.join(", ") +
    " (Total: " +
    modificadores +
    ")";
  if (modificadores < 6) {
    var classList = document.getElementById("roll-low").classList;
    if (classList.contains("hide")) {
      classList.remove("hide");
    }
    classList = document.getElementById("roll-atrs").classList;
    if (!classList.contains("hide")) {
      classList.add("hide");
    }
  } else {
    var classList = document.getElementById("roll-low").classList;
    if (!classList.contains("hide")) {
      classList.add("hide");
    }
    classList = document.getElementById("roll-atrs").classList;
    if (classList.contains("hide")) {
      classList.remove("hide");
    }
  }
}

function rollMenor() {
  document.getElementById("roll-atrs").classList.add("hide");
  document.getElementById("roll-low").classList.add("hide");
  var atributos = JSON.parse(document.getElementById("atributos-array").value);
  var modificadores = atributos.reduce((a, b) => a + b, 0);
  if (modificadores < 6) {
    atributos.shift();
    atributos.push(rollAtributo());
    atributos.sort((a, b) => a - b);
    modificadores = atributos.reduce((a, b) => a + b, 0);
    document.getElementById("atributos-array").value =
      JSON.stringify(atributos);
    document.getElementById("atributos").innerHTML =
      "Seus atributos são " +
      atributos.join(", ") +
      " (Total Mod: " +
      modificadores +
      ")";
  }
  if (modificadores < 6) {
    var classList = document.getElementById("roll-low").classList;
    if (classList.contains("hide")) {
      classList.remove("hide");
    }
    classList = document.getElementById("roll-atrs").classList;
    if (!classList.contains("hide")) {
      classList.add("hide");
    }
  } else {
    var classList = document.getElementById("roll-low").classList;
    if (!classList.contains("hide")) {
      classList.add("hide");
    }
    classList = document.getElementById("roll-atrs").classList;
    if (classList.contains("hide")) {
      classList.remove("hide");
    }
  }
}

function rollAtributo() {
  var rolagens = [];
  for (let j = 0; j < 4; j++) {
    rolagens.push(Math.floor(Math.random() * 6) + 1);
  }
  rolagens.sort((a, b) => a - b).shift();
  var sum = rolagens.reduce((a, b) => a + b);
  var attr = Math.floor((sum - 10) / 2);
  return attr >= -1 ? attr : -2;
}

function checkAtributos(atributos) {
  var modificadores = 0;
  for (const atributo of atributos) {
    modificadores += Math.floor((atributo - 10) / 2);
  }
  return modificadores;
}

function generate() {
  var devoto = document.getElementById("devoto").checked;
  var maisHumanos = document.getElementById("humano").checked;
  var despertosGolens = document.getElementById("despertos").checked;
  var ultimaRaca = document.getElementById("raca-key").value;
  var personagem = {};
  var deus = pickDeus(devoto);
  var raca = pickRaca(maisHumanos, ultimaRaca, despertosGolens);
  var classe = pickClasse();

  while (!checkDeus(deus, raca.key, classe.key)) {
    raca = pickRaca(maisHumanos, ultimaRaca, despertosGolens);
    classe = pickClasse();
  }
  document.getElementById("raca-key").value = raca.key;

  var genero = pickGenero(raca.key);
  personagem.genero = genero;
  personagem.raca = genero == "F" && raca.f ? raca.f : raca.m;
  personagem.classe = genero === "F" && classe.f ? classe.f : classe.m;
  // Golens não possuem origem
  personagem.origem = !["Gl"].includes(raca.key) ? pickOrigem(genero) : null;
  personagem.deus = deus.key !== "Ninguém" ? deus.key : null;
  if (!personagem.deus) {
    if (classe.key === "Cl") {
      personagem.deus = "Panteão";
    } else if (classe.key === "Pa") {
      personagem.deus = "Bem";
    }
  }
  var extras = genero === "M" ? ["um", "devoto"] : ["uma", "devota"];
  ["Panteão", "Oceano", "Bem"].includes(personagem.deus)
    ? extras.push("do")
    : extras.push("de");

  var retorno =
    extras[0] + " " + personagem.raca + " " + personagem.classe + " ";
  if (personagem.origem) {
    retorno += personagem.origem + " ";
  }

  if (personagem.deus) {
    retorno += extras[1] + " " + extras[2] + " " + personagem.deus;
  }

  var shareText = encodeURI(
    "Eu sou " +
      retorno +
      "!\nDescubra quem você é com o Gerador de Atormentados: "
  );
  var url = "https://gabrielmadeirapessoa.github.io/gerador-tormenta20/";
  document.getElementById("tweet-button").href =
    "https://twitter.com/intent/tweet?hashtags=tormenta20&url=" +
    url +
    "&text=" +
    shareText;
  document.getElementById("fb-button").href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    url +
    "&quote=" +
    shareText;

  document.getElementById("personagem").innerHTML = "Você é " + retorno;
}
