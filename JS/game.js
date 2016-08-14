var pilihPemain = prompt("pilih salah satu := {batu, gunting, kertas}");

var pilihLawan = Math.random(); if (pilihLawan <= 0.33){pilihLawan = "batu";} else if (pilihLawan >= 0.67){pilihLawan = "kertas";} else {pilihLawan = "gunting";};

var bermain = function (Pemain1, pemain2){
	if (Pemain1 === Pemain2){
		return "kurang seru, main lagi"
	}
}
var bermain = function (Pemain1, Pemain2){
	if (Pemain1 === "batu"){
	if(Pemain2 === "kertas"){
		return "kamu kalah, coba lagi yak"
	} else {
		return "selamat menang, gantian dong yang menang"
	}
}
}
var bermain2 = function (Pemain1, Pemain2){
	if (Pemain1 === "gunting"){
	if (Pemain2 === "batu"){
		return "selamat menang, gantian dong yang menang"
	} else {
		return "kamu kalah, coba lagi yak"
	}
}
}
var bermain3 = function (Pemain1, Pemain2){
	if (Pemain1 === "kertas"){
	if (Pemain2 === "gunting"){
		return "selamat menang, gantian dong yang menang"
	} else {
		return "kamu kalah, coba lagi yak"
	}
}
}
console.log(bermain(pilihPemain, pilihLawan));
console.log(bermain2(pilihPemain, pilihLawan));
console.log(bermain3(pilihPemain, pilihLawan));