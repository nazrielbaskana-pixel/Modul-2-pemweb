window.addEventListener("load", function () {
    alert("Selamat datang di Blog Teknologi!");
});

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("mouseover", function () {
        link.style.fontSize = "1.2em";
    });
    link.addEventListener("mouseout", function () {
        link.style.fontSize = "1em";
    });
});

document.getElementById("formKontak").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    ["nama", "email", "pesan"].forEach(function (id) {
        const isi = document.getElementById(id).value.trim();
        const err = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));

        if (isi === "") {
            err.textContent = id.charAt(0).toUpperCase() + id.slice(1) + " tidak boleh kosong.";
            valid = false;
        } else {
            err.textContent = "";
        }
    });

    if (valid) {
        alert("Pesan berhasil dikirim!");
        this.reset();
    }
});