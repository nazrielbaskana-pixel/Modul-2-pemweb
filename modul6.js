// Validasi Nama (Required)
function validateNama() {
    var nama = document.getElementById("nama").value.trim();
    var errNama = document.getElementById("errNama");

    if (nama === "") {
        errNama.innerText = "Nama wajib diisi!";
        return false;
    } else {
        errNama.innerText = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var errEmail = document.getElementById("errEmail");
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        errEmail.innerText = "Email wajib diisi!";
        return false;
    } else if (!email.match(emailPattern)) {
        errEmail.innerText = "Format email tidak valid (contoh: user@domain.com)!";
        return false;
    } else {
        errEmail.innerText = "";
        return true;
    }
}

function validateUmur() {
    var umurVal = document.getElementById("umur").value.trim();
    var errUmur = document.getElementById("errUmur");
    var umur = parseInt(umurVal, 10);

    if (umurVal === "" || isNaN(umur)) {
        errUmur.innerText = "Umur wajib diisi dengan angka!";
        return false;
    } else if (umur < 1 || umur > 100) {
        errUmur.innerText = "Umur harus berrentang antara 1 hingga 100!";
        return false;
    } else {
        errUmur.innerText = "";
        return true;
    }
}

function validateForm(event) {
    event.preventDefault();

    var isNamaValid = validateNama();
    var isEmailValid = validateEmail();
    var isUmurValid = validateUmur();
    var statusSubmit = document.getElementById("statusSubmit");

    if (isNamaValid && isEmailValid && isUmurValid) {
        statusSubmit.innerText = "Form berhasil disubmit secara valid!";
    } else {
        statusSubmit.innerText = "";
        alert("Harap perbaiki kesalahan pada input sebelum mengirim form.");
    }
}