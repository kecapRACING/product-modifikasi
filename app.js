const productsDOM = document.querySelector('.products-center');

// Data produk lokal
const products = [
  {
    id: 1,
    fields: {
      name: "Skok Tirev",
      price: 20000, // harga dalam sen
      image: [{ url: "images/skok tirev.jpg" }] // path gambar lokal
    }
  },
  {
    id: 2,
    fields: {
      name: "Biled",
      price: 30000, // harga dalam sen
      image: [{ url: "images/biled.jpg" }] // path gambar lokal
    }
  },
  {
    id: 3,
    fields: {
      name: "Cakram",
      price: 40000, // harga dalam sen
      image: [{ url: "images/cakram.jpg" }] // path gambar lokal
    }
  },
  {
    id: 4,
    fields: {
      name: "Lampu Day",
      price: 50000, // harga dalam sen
      image: [{ url: "images/lampu day.jpg" }] // path gambar lokal
    }
  },
  {
    id: 5,
    fields: {
      name: "Skok Kyb",
      price: 60000, // harga dalam sen
      image: [{ url: "images/skok kyb.jpg" }] // path gambar lokal
    }
  },
  {
    id: 6,
    fields: {
      name: "Rem Brembo",
      price: 70000, // harga dalam sen
      image: [{ url: "images/rem.jpg" }] // path gambar lokal
    }
  },
  {
    id: 7,
    fields: {
      name: "Stang Day",
      price: 80000, // harga dalam sen
      image: [{ url: "images/stang merk day.jpg" }] // path gambar lokal
    }
  },
  {
    id: 8,
    fields: {
      name: "Skok Ninja",
      price: 90000, // harga dalam sen
      image: [{ url: "images/ninja.jpg" }] // path gambar lokal
    }
  },
  {
    id: 9,
    fields: {
      name: "Rante SSS",
      price: 10000, // harga dalam sen
      image: [{ url: "images/sss.jpg" }] // path gambar lokal
    }
  },
  // Tambahkan produk lain di sini jika perlu
];

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const img = product.fields.image[0].url; // Mengambil path gambar
      const formatPrice = (price / 100).toFixed(2); // Format harga
      return `<a class="single-product" href="checkout.html?id=${id}&title=${encodeURIComponent(title)}&price=${formatPrice}&image=${encodeURIComponent(img)}">
              <img src="${img}" class="single-product-img img" alt="${title}" />
              <footer>
                <h5 class="name">${title}</h5>
                <span class="price">$${formatPrice}</span>
              </footer>
            </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
         ${productList}
        </div>`;
};

// Menampilkan produk
displayProducts(products);