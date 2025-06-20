let cartCount = 0;

function addToCart(event) {
    event.stopPropagation(); // Mencegah event klik pada produk
    cartCount++;
    alert("Produk telah ditambahkan ke keranjang! Total: " + cartCount);
}

function showProductDetails(name, price, description) {
    document.getElementById("modalProductName").innerText = name;
    document.getElementById("modalProductPrice").innerText = price;
    document.getElementById("modalProductDescription").innerText = description;
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
