const get_Tahun = () => {
  return new Date().getFullYear();
};

// pasang tahun copyright secara otomatis
const tahun = document.getElementById("tahun");
tahun.innerHTML = get_Tahun();
