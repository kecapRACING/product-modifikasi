const productDOM = document.querySelector('.product');

// Data produk lokal
const products = [
  {
    id: 1,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Skok Tirev",
      price: 20000,
      image: [{ url: "images/skok tirev.jpg" }]
    }
  },

  {
    id: 2,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Biled",
      price: 30000,
      image: [{ url: "images/biled.jpg" }]
    }
  },
  {
    id: 3,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Cakram",
      price: 40000,
      image: [{ url: "images/cakram.jpg" }]
    }
  },
  {
    id: 4,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Lampu Day",
      price: 50000,
      image: [{ url: "images/lampu day.jpg" }]
    }
  },
  {
    id: 5,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Skok Kyb",
      price: 60000,
      image: [{ url: "images/skok kyb.jpg" }]
    }
  },
  {
    id: 6,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Rem Brembo",
      price: 70000,
      image: [{ url: "images/rem.jpg" }]
    }
  },
  {
    id: 7,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Stang Day",
      price: 80000,
      image: [{ url: "images/stang merk day.jpg" }]
    }
  },
  {
    id: 8,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Ninja",
      price: 90000,
      image: [{ url: "images/ninja.jpg" }]
    }
  },
  {
    id: 9,
    fields: {
      company: "Furniture Co.",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
      description: "A comfortable couch for your living room.",
      name: "Rante SSS",
      price: 10000,
      image: [{ url: "images/sss.jpg" }]
    }
  },
  // Tambahkan produk lain di sini jika perlu
];

const fetchProduct = (id) => {
  return products.find(product => product.id === id);
};

const displayProduct = (product) => {
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const img = image[0].url; // Mengambil path gambar
  document.title = title.toUpperCase();

  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${(price / 100).toFixed(2)}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>${description}</p>
          <button class="btn" id="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>`;

  // Tambahkan event listener untuk tombol "Add to Cart"
  document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    // Redirect ke halaman checkout
    window.location.href = 'checkout.html?id=' + product.id;
  });
};

// Mendapatkan ID dari URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

// Menampilkan produk berdasarkan ID
const product = fetchProduct(id);
if (product) {
  displayProduct(product);
} else {
  productDOM.innerHTML = '<p class="error">Product not found</p>';
}