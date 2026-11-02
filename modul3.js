function validateForm() {
  let nama = document.forms["formPendaftaran"]["nama"].value;
  let email = document.forms["formPendaftaran"]["email"].value;

  if (nama === "") {
    alert("Kolom Nama harus diisi!");
    return false;
  } 

  if (email === "") {
    alert("Kolom Email harus diisi!");
    return false;
  }

  alert("Form berhasil dikirim!");
  return true; 
}