console.log("Website kelas berhasil dijalankan!");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigasi berhasil!");
  });
});