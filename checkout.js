// Menunggu hingga DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil query string dari URL
    const queryString = window.location.search;

    // Buat instance URLSearchParams
    const params = new URLSearchParams(queryString);

    // Ambil nilai dari parameter tertentu
    const title = params.get('title'); // Mengambil nilai dari parameter 'title'
    const price = params.get('price'); // Mengambil nilai dari parameter 'price'
    const image = params.get('image'); // Mengambil nilai dari parameter 'image'

    // Periksa apakah image tidak null atau undefined
    if (image) {
        document.getElementById('product-image').src = image; // Set src gambar
    } else {
        console.error('Image URL is missing or invalid');
    }

    // Set judul dan harga produk
    document.getElementById('product-title').textContent = title; // Set judul produk
    document.getElementById('product-price').textContent = `$${parseFloat(price).toFixed(2)}`; // Set harga produk

    // Tangani pengiriman formulir
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman formulir default

        // Kumpulkan data formulir
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;

        // Tampilkan pesan sukses
        document.getElementById('message').textContent = 'Thank you for your purchase!';
        checkoutForm.reset(); // Reset formulir
    });
});