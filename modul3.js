function validateForm() {
  let nama = document.forms["formPendaftaran"]["nama"].value;
  let email = document.forms["formPendaftaran"]["email"].value;

  // Cek jika kolom nama kosong
  if (nama === "") {
    alert("Kolom Nama harus diisi!");
    return false;
  } 
  
  // Cek jika kolom email kosong
  if (email === "") {
    alert("Kolom Email harus diisi!");
    return false;
  }

  // Jika keduanya sudah terisi
  alert("Form berhasil dikirim!");
  return true; 
}