function pickOne(lista) {
	return lista[Math.floor(Math.random() * lista.length)];
}

function pickGenero() {
	var generos = ["F", "M"];
	return pickOne(generos);
}

function pickRaca() {
	var racas = [
		{key: "Hu", m: "Humano", f: "Humana"},
		{key: "An", m: "Anão", f: "Anã"},
		{key: "Da", f: "Dahllan"},
		{key: "El", m: "Elfo", f: "Elfa"},
		{key: "Gb", m: "Goblin"},
		{key: "Gl", m: "Golem"},
		{key: "Hy", m: "Hynne"},
		{key: "Kl", m: "Kliren"},
		{key: "Le", m: "Lefou"},
		{key: "Me", f: "Medusa"},
		{key: "Mi", m: "Minotauro"},
		{key: "Os", m: "Osteon"},
		{key: "Qa", m: "Qareen"},
		{key: "Ts", m: "Tritão", f: "Sereia"},
		{key: "Si", m: "Sílfide"},
		{key: "Su", m: "Suraggel"},
		{key: "Tr", m: "Trog"}
	];
	return pickOne(racas);
}

function pickClasse() {
	var classes = [
		{key: "Ar", m: "Arcanista"},
		{key: "Ba", m: "Bárbaro", f: "Bárbara"},
		{key: "Bd", m: "Bardo", f: "Barda"},
		{key: "Bu", m: "Bucaneiro", f: "Bucaneira"},
		{key: "Ca", m: "Caçador", f: "Caçadora"},
		{key: "Cv", m: "Cavaleiro", f: "Cavaleira"},
		{key: "Cl", m: "Clérigo", f: "Clériga"},
		{key: "Dr", m: "Druida", f: "Druidisa"},
		{key: "Ge", m: "Guerreiro", f: "Guerreira"},
		{key: "In", m: "Inventor", f: "Inventora"},
		{key: "La", m: "Ladino", f: "Ladina"},
		{key: "Lu", m: "Lutador", f: "Lutadora"},
		{key: "No", m: "Nobre"},
		{key: "Pa", m: "Paladino", f: "Paladina"}
	];
	return pickOne(classes);
}

function pickOrigem(genero) {
	var origens = [
		{key: "Ac", m: "Acólito", f: "Acólita"},
		{key: "Aa", m: "Amigo dos Animais", f: "Amiga dos Animais"},
		{key: "Am", m: "Amnésico", f: "Amnésica"},
		{key: "Ar", m: "Aristocrata"},
		{key: "As", m: "Artesão", f: "Artesã"},
		{key: "At", m: "Artista"},
		{key: "Al", m: "Assistente de Laboratório"},
		{key: "Ba", m: "Batedor", f: "Batedora"},
		{key: "Cp", m: "Capanga"},
		{key: "Ch", m: "Charlatão", f: "Charlatã"},
		{key: "Ci", m: "Circense"},
		{key: "Cr", m: "Criminoso", f: "Criminosa"},
		{key: "Cu", m: "Curandeiro", f: "Curandeira"},
		{key: "Er", m: "Eremita"},
		{key: "Ec", m: "Escravo", f: "Escrava"},
		{key: "Es", m: "Estudioso", f: "Estudiosa"},
		{key: "Fa", m: "Fazendeiro", f: "Fazendeira"},
		{key: "Fo", m: "Forasteiro", f: "Forasteira"},
		{key: "Gl", m: "Gladiador", f: "Gladiadora"},
		{key: "Gu", m: "Guarda"},
		{key: "He", m: "Herdeiro", f: "Herdeira"},
		{key: "Hc", m: "Herói Camponês", f: "Heroína Camponesa"},
		{key: "Mj", m: "Marujo", f: "Maruja"},
		{key: "Mt", m: "Mateiro", f: "Mateira"},
		{key: "Mg", m: "Membro de Guilda", f: "Membra de Guilda"},
		{key: "Me", m: "Mercador", f: "Mercadora"},
		{key: "Mi", m: "Minerador", f: "Mineradora"},
		{key: "No", m: "Nômade"},
		{key: "Pi", m: "Pivete"},
		{key: "Re", m: "Refugiado", f: "Refugiada"},
		{key: "Se", m: "Seguidor", f: "Seguidora"},
		{key: "Sv", m: "Selvagem"},
		{key: "So", m: "Soldado", f: "Soldada"},
		{key: "Tv", m: "Taverneiro", f: "Taverneira"},
		{key: "Tr", m: "Trabalhador", f: "Trabalhadora"}
	];
	var origem = pickOne(origens);
	return (genero === "F" && origem.f) ? origem.f : origem.m;
}

function pickDeus(raca, classe) {
	var deuses = [
		{key: "Ninguém"},
		{key: "Aharadak"},
		{key: "Allihanna", r: ["Da", "El"], c: ["Ba", "Ca", "Cl", "Dr"]},
		{key: "Arsenal", c: ["Ba", "Cl", "Cv", "Ge", "Lu"]},
		{key: "Azgher", r: ["Qa"], c: ["Ar", "Ba", "Ca", "Cl", "Cv", "Ge", "No", "Pa"]},
		{key: "Hyninn", r: ["Gb", "Hy"], c: ["Bd", "Bu", "Cl", "In", "La", "No"]},
		{key: "Kallyadranoch", c: ["Ar", "Cl", "Cv", "Ge", "Lu", "No"]},
		{key: "Khalmyr", r: ["An"], c: ["Cl", "Cv", "Ge", "No", "Pa"]},
		{key: "Lena", r: ["Da", "Qa"], c: ["Cl", "No", "Pa"]},
		{key: "Lin-Wu", r: ["An"], c: ["Cl", "Cv", "Ge", "No", "Pa"]},
		{key: "Marah", r: ["El", "Hy", "Qa"], c: ["Bd", "Cl", "No", "Pa"]},
		{key: "Megalokk", r: ["Gb", "Me", "Mi", "Tr"], c: ["Ba", "Ca", "Cl", "Dr", "Lu"]},
		{key: "Nimb", r: ["Gb", "Qa"], c: ["Ba", "Bd", "Bu", "Cl", "In", "La"]},
		{key: "Oceano", r: ["Da", "Hy", "Mi", "Ts"], c: ["Ba", "Bu", "Ca", "Cl", "Dr"]},
		{key: "Sszzaas", r: ["Me"], c: ["Ar", "Bd", "Bu", "Cl", "In", "La", "No"]},
		{key: "Tanna-Toh", r: ["Gl", "Kl"], c: ["Ar", "Bd", "Cl", "In", "No", "Pa"]},
		{key: "Tenebra", r: ["An", "Os", "Qa", "Tr"], c: ["Ar", "Bd", "Cl", "La"]},
		{key: "Thwor"},
		{key: "Thyatis", c: ["Cl", "Cv", "Ge", "In", "Lu", "Pa"]},
		{key: "Valkaria"},
		{key: "Wynna", r: ["El", "Gl", "Qa", "Si"], c: ["Ar", "Bd", "Cl"]}
	];

	// Apenas Allihanna, Megalokk e Oceano permitem Druidas
	if (classe === "Dr") {
		return pickOne(["Allihanna", "Megalokk", "Oceano"]);
	}

	// Apenas Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria e "Bem" permitem Paladinos
	if (classe === "Pa") {
		return pickOne(["Azgher", "Khalmyr", "Lena", "Lin-Wu", "Marah", "Tanna-Toh", "Thyatis", "Valkaria", "Bem"]);
	}
	
	var deus;
	do {
		deus = pickOne(deuses);
	} while (!checkDeus(deus, raca, classe));

	if (deus.key === "Ninguém") {
		if (["Cl"].includes(classe)) {
			// Clérigos "sem deus" na verdade são do Panteão
			return "Panteão";
		} else {
			// Todas as outras classes sem deus podem ser "ateus" ou apenas "não devotos"
			return null;
		}
	}

	return deus.key;
}

function checkDeus(deus, raca, classe) {
	if (deus.c && deus.r) {
		// Se deus possui restrição para raça e classe, apenas uma das duas precisa ser devota
		return deus.c.includes(classe) || deus.r.includes(raca);
	} else if (deus.c) {
		// Se deus possui apenas restrição de classe, a classe do personagem tem que ser devota
		return deus.c.includes(classe);
	} else if (deus.r) {
		// Se deus possui apenas restrição de raça, a raça do personagem tem que ser devota
		return deus.r.includes(raca);
	} else {
		// Deus não possui nehuma restrição de classe ou de raça
		return true;
	}
}

function generate() {
	var personagem = {};
	var raca = pickRaca();
	var genero = pickGenero();
	if (["Da", "Me"].includes(raca.key)) {
		// Dahllan e Medusas podem ser apenas mulheres
		genero = "F"
	} else if (["Mi"].includes(raca.key)) {
		// Minotauros podem ser apenas homens
		genero = "M";
	}
	var classe = pickClasse();
	personagem.genero = genero;
	personagem.raca = (genero == "F" && raca.f) ? raca.f : raca.m;
	personagem.classe = (genero === "F" && classe.f) ? classe.f : classe.m;
	// Golens não possuem origem
	personagem.origem = !["Gl"].includes(raca.key) ? pickOrigem(genero) : null;
	personagem.deus = pickDeus(raca.key, classe.key);
	var extras = (genero === "M") ? ["um", "devoto"] : ["uma", "devota"];
	["Panteão", "Oceano", "Bem"].includes(personagem.deus) ? extras.push("do") : extras.push("de");

	var retorno = "Você é " + extras[0] + " " + personagem.raca + " " + personagem.classe + " ";
	if (personagem.origem) {
		retorno += personagem.origem + " ";
	}

	if (personagem.deus) {
		retorno += extras[1] + " " + extras[2] + " " + personagem.deus;
	}

	document.getElementById("personagem").innerHTML = retorno;

}