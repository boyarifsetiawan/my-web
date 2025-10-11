"use strict";

//Opening or closing side bar

const elementToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
	elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
		filterFunc(selectedValue);
	});
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue == "all") {
			filterItems[i].classList.add("active");
		} else if (selectedValue == filterItems[i].dataset.category) {
			filterItems[i].classList.add("active");
		} else {
			filterItems[i].classList.remove("active");
		}
	}
};

//Enabling filter button for larger screens

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		filterFunc(selectedValue);

		lastClickedBtn.classList.remove("active");
		this.classList.add("active");
		lastClickedBtn = this;
	});
}

// Enabling Contact Form

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener("input", function () {
		if (form.checkValidity()) {
			formBtn.removeAttribute("disabled");
		} else {
			formBtn.setAttribute("disabled", "");
		}
	});
}

// Enabling Page Navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() == pages[i].dataset.page) {
				pages[i].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove("active");
				navigationLinks[i].classList.remove("active");
			}
		}
	});
}

function openDetail(project) {
	const modal = document.getElementById("portfolio-detail");
	const content = document.getElementById("detail-content");

	// Isi konten detail sesuai project
	if (project === "file-manager") {
		content.innerHTML = `
      <h2>File Manager</h2>
	  <br/>
      <p>•  Menyimpan Data File (dokumen, gambar, video, audio) bisa diunggah dan disimpan di server online, 	bukan hanya di perangkat lokal. <br/>
		•	Mengakses File dari Mana Saja, Pengguna bisa login dan membuka file dari laptop, HP, atau tablet selama ada internet. <br/>
		•	Sinkronisasi Otomatis File yang disimpan akan otomatis tersinkron ke semua perangkat pengguna. <br/>
		•	Berbagi File dengan Mudah, Pengguna bisa share link atau memberi akses (view/edit/comment) ke orang lain.
 		<br/>
		</p><br/>
		<img src="img/portfolio/file-manager1.png" width="90%" style="border-radius: 10px">
		<br/>
		<p>Tech Stack	: PHP, Laravel, Vue Js, MySQL, Inertia Js , Javascript. 
		<br/>
		Github	: <a href="https://github.com/boyarifsetiawan/file-manager" style="display:inline; color: white">Klik Disini</a> . 
		<br/>
		</p>
		<p>Tech Stack	: PHP, Laravel, Vue Js, MySQL, Inertia Js , Javascript. 
		<br/>
		Github	: <a href="https://github.com/boyarifsetiawan/file-manager" style="display:inline; color: white">Klik Disini</a> . 
		<br/>
		</p>

    `;
	} else if (project === "multipurpose") {
		content.innerHTML = `
      <h2>Laravel Appoinments</h2>
	  <br/>
      <p>Fungsi :<br/>
		•	Menjadwalkan pertemuan, pengguna bisa memesan waktu tertentu untuk bertemu (dokter, dosen, konsultan, salon, dll.). <br/>
		•	Mencatat data janji temu, siapa, kapan, dan keperluan apa.<br/>
		•	Mengelola ketersediaan waktu, admin/penyedia layanan bisa menandai jam kosong atau sibuk.<br/>
		•	Menghindari bentrok jadwal, sistem otomatis mencegah dua orang memesan di waktu yang sama.<br/>
		Tujuan : <br/>
		•	Efisiensi waktu, tidak perlu antri manual, cukup pesan online.<br/>
		•	Meningkatkan layanan, pengguna merasa lebih mudah & cepat.<br/>
		•	Transparansi jadwal, klien bisa tahu kapan waktu yang tersedia.<br/>
		•	Mengurangi kesalahan, menghindari double booking atau kelupaan jadwal.<br/> 
	</p><br/>
      <img src="img/portfolio/multipurpose.png" width="90%" style="border-radius: 10px">
	  <br/>
	  <p>Tech Stack	: PHP, Laravel, Vue Js, MySQL, Javascript. 
		<br/>
		Github	: <a href="https://github.com/boyarifsetiawan/laravue-multipurpose" style="display:inline; color: white">Klik Disini</a> . 
		<br/>
		</p>
    `;
	} else if (project === "task-manager") {
		content.innerHTML = `
      <h2>Task Manager</h2>
	  <br/>
      <p>Fungsi : <br/>
		•	Membuat dan mengelola task, tombol Add Task digunakan untuk menambah pekerjaan baru.<br/>
		•	Membagi status pekerjaan<br/>
		Pending = task yang sedang dikerjakan atau menunggu.<br/>
		Completed = task yang sudah selesai.<br/>
		•	Kolaborasi tim, setiap task bisa punya beberapa assignee (anggota tim yang bertanggung jawab).<br/>
		Contoh: “Work on Design” punya 2 assignees.<br/>
		•	Monitoring progress, ada progress bar yang menunjukkan persentase penyelesaian project.<br/>
		•	Manajemen waktu, ditampilkan StartDate dan EndDate project.<br/>
		Tujuan :<br/>
		•	Memudahkan monitoring project, manajer atau anggota tim bisa langsung lihat progres keseluruhan.<br/>
		•	Mendukung kolaborasi, setiap anggota tahu siapa mengerjakan apa, sehingga mengurangi miskomunikasi.<br/>
		•	Transparansi pekerjaan, semua orang bisa melihat status task: pending atau completed.<br/>
		•	Manajemen proyek berbasis cloud, karena berbasis web/cloud, bisa diakses dari mana saja (remote work).<br/>

	</p><br/>
      <img src="img/portfolio/task-manager1.png" width="90%" style="border-radius: 10px">
	  <br/>
      <img src="img/portfolio/task-manager2.png" width="90%" style="border-radius: 10px">
	  <br/>
	  <p>Tech Stack	: PHP, Laravel, Vue Js, MySQL, Javascript. 
		<br/>
		Github	: <a href="https://github.com/boyarifsetiawan/taskapp" style="display:inline; color: white">Klik Disini</a> . 
		<br/>
		</p>
    `;
	} else if (project === "blog") {
		content.innerHTML = `
      <h2>Laravel Blog</h2>
	  <br/>
      <img src="img/portfolio/blog.png" width="90%" style="border-radius: 10px">
	  <br/>
	  <p>Tech Stack	: PHP, Laravel, Filament, MySQL, Livewire. 
		<br/>
		Github	: <a href="https://github.com/boyarifsetiawan/myblog" style="display:inline; color: white">Klik Disini</a> . 
		<br/>
		</p>
    `;
	}

	modal.style.display = "block";
}

function closeDetail() {
	document.getElementById("portfolio-detail").style.display = "none";
}
