var pilihPemain = prompt("pilih salah satu := {batu, gunting, kertas}");

var pilihLawan = Math.random(); if (pilihLawan <= 0.33){pilihLawan = "batu";} else if (pilihLawan >= 0.67){pilihLawan = "kertas";} else {pilihLawan = "gunting";};

var bermain = function (Pemain1, Pemain2){
	if (Pemain1 === Pemain2){
		return "kurang seru, main lagi"
	}
	if (Pemain1 === "batu"){
	if(Pemain2 === "kertas"){
		return "selamat menang, gantian dong yang menang"

	} else {
		return "kamu kalah, coba lagi yak"
	}
	}
	if (Pemain1 === "gunting"){
	if (Pemain2 === "batu"){
		return "kamu kalah, coba lagi yak"
	} else {
		if (Pemain2 === "kertas"){
		return "selamat menang, gantian dong yang menang"
	}
	}
	}
	if (Pemain1 === "kertas"){
	if (Pemain2 === "gunting"){
		return "selamat menang, gantian dong yang menang"
	} else {
		if (Pemain2 === "batu"){
		return "kamu kalah, coba lagi yak"
	}
	}
}

};
console.log(bermain(pilihPemain, pilihLawan));