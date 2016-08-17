var DaftarKontak = [{
	nama: "Ismanuri",
	email: "isman@mail.com",
	telepon: "08123456"
	}];



var Program = {};

Program.tambahKontak = function(nama, email, telepon){
	DaftarKontak.push({
		nama:nama,
		email:email,
		telepon:telepon
	})
	console.log("--- Kontak baru ditambahkan ---");
}


Program.lihatSemua = function(){
	console.log("--- List Kontak ---");
	DaftarKontak.forEach(function(entry,i){
		console.log(i + ". nama: " + entry.nama + "\n email: " + entry.email + "\n telepon: " + entry.telepon);
	}
		)
	};

Program.lihatKontak = function(nama){
	console.log("--- Lihat Kontak ---");
	DaftarKontak.forEach(function(entry, i){
		if(entry.nama === nama){
		console.log("nama: " + entry.nama + "\n email: " + entry.email + "\n telepon: " + entry.telepon );
		}
	});

}
Program.tambahKontak("Joko", "joko@mail.com", "0821212121");
Program.lihatSemua();
Program.lihatKontak("Joko");