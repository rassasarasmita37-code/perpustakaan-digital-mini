// Variabel untuk menghitung jumlah total buku yang dipinjam
let totalDipinjam = 0;

function pinjam(namaBuku) {
    // 1. Tambahan fitur konfirmasi (muncul tulisan "Apakah kamu yakin...")
    let yakin = confirm("Apakah kamu yakin ingin meminjam buku \"" + namaBuku + "\"?");
    
    // 2. Jika diklik OK, jalankan proses penambahan jumlah dan alert sukses
    if (yakin) {
        totalDipinjam++; // Tambah 1 jumlah buku dipinjam
        
        // Memperbarui angka statistik di layar secara otomatis
        const statBukuDipinjam = document.querySelectorAll(".right-sidebar .stat strong")[1];
        if (statBukuDipinjam) {
            statBukuDipinjam.textContent = totalDipinjam;
        }

        // Kode aslimu yang dimodifikasi sedikit agar menampilkan total pinjaman
        alert("Buku \"" + namaBuku + "\" berhasil dipilih untuk dipinjam!\nTotal buku yang kamu pinjam sekarang: " + totalDipinjam);
    }
}

function scrollBuku() {
    document.getElementById("buku").scrollIntoView({
        behavior: "smooth"
    });
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
    const kataKunci = searchInput.value.toLowerCase();
    const buku = document.querySelectorAll(".book-card");

    buku.forEach(function (item) {
        const judul = item.querySelector("h3").textContent.toLowerCase();

        if (judul.includes(kataKunci)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});