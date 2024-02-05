import { Trash2 } from "lucide-react";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { ShoppingCart, Pencil } from "lucide-react";
import { MessageSquarePlus } from "lucide-react";
import { BookmarkX } from "lucide-react";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Infinix Note 12",
      harga: 1999000,
      gambar: "gambar11.png",
    },
    {
      id: 2,
      nama: "Iphone 12 pro",
      harga: 5976000,
      gambar: "gambar2.png",
    },
    {
      id: 3,
      nama: "Samsung Galaxy A13",
      harga: 2499000,
      gambar: "gambar3.png",
    },
    {
      id: 4,
      nama: "vivo Y21",
      harga: 2421000,
      gambar: "gambar4.png",
    },
    {
      id: 5,
      nama: "Samsung Galaxy A03",
      harga: 2191000,
      gambar: "gambar9.png",
    },
    {
      id: 6,
      nama: "Realmi 8i",
      harga: 2707000,
      gambar: "gambar6.png",
    },
    {
      id: 7,
      nama: "Oppo Reno7 z 5G",
      harga: 5269000,
      gambar: "gambar7.png",
    },
    {
      id: 8,
      nama: "vivo Y20s",
      harga: 3228500,
      gambar: "gambar8.png",
    },
  ]);

  // gambar
  const getImage = (imageName) => `./images/${imageName}`;

  //--------- delet---------
  const handleDelete = (productId) => {
    const isConfirmed = window.confirm(
      `Apakah Anda yakin ingin menghapus produk ${productId} ?`
    );

    if (isConfirmed) {
      setProducts(products.filter((product) => product.nama !== productId));
    }
  };

  //-------------- edit --------------
  const [editingProduct, setEditingProduct] = useState(null);
  const handleEdit = (product) => {setEditingProduct(product);};

  const handleSave = (editedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
    setEditingProduct(null);
  };
  const handleCancelEdit = () => {setEditingProduct(null) };
  const handleNewProductChange = (field, value) => {setNewProduct({...newProduct, [field]: value, }); };
  //-------------------//

  // -------- tambah -------
  const [newProduct, setNewProduct] = useState({ nama: "",harga: 0,gambar: "",});
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const handleAddProduct = () => {
    if (newProduct.nama && newProduct.harga && newProduct.gambar) {
      setProducts((prevProducts) => [
        ...prevProducts,
        { id: prevProducts.length + 1, ...newProduct },
      ]);
      resetNewProductForm(); // Fungsi untuk mereset formulir tambah produk
    } else {
      alert("Harap isi semua field");
    }
  };
  const resetNewProductForm = () => {setNewProduct({nama: "",harga: 0,gambar: "",});
  setShowAddProductForm(false); // Menyembunyikan formulir tambah produk
  };

  //---------------------

  const [itemCount, setItemCount] = useState(0);
  //--------------
  
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [showOrderedProducts, setShowOrderedProducts] = useState(false);

  // ... (kode lainnya)

  const handleAddToCart = (product) => {
    setOrderedProducts((prevOrderedProducts) => [
      ...prevOrderedProducts,
      product,
    ]);
    setItemCount(itemCount + 1);
  };

  const handleRemove = (productId) => {
    setOrderedProducts((prevOrderedProducts) =>
      prevOrderedProducts.filter((product) => product.id !== productId)
    );
    setItemCount(itemCount - 1);
  };

  const handleView = () => {
    setShowOrderedProducts(true);
  };

  const handleClos = () => {
    setShowOrderedProducts(false);
  };

  return (
    <>
      <Carousel />
      <div className="flex items-center justify-between p-4 garis">
        <div className="flex items-center space-x-4">
          <button
            className="m-3 p-2 justify-center"
            onClick={() => setShowAddProductForm(true)}
          >
            <MessageSquarePlus size={50} />
          </button>
          <input
            placeholder="Cari"
            className="flex-grow p-2 border border-gray-500 rounded "
          />
        </div>
        {/* keranjang  */}
        <div className="flex items-center space-x-4">
          <button
            className="m-6 p-2 justify-center relative"
            onClick={handleView}
          >
            <ShoppingCart size={30} />
            <div className="absolute -top-0 -right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ">
              {itemCount}
            </div>
          </button>
        </div>
      </div>

      {showOrderedProducts && (
        <div className="overlayy">
          <div className="edit-formm">
            <div className="flex justify-between">
              <h1>Keranjang</h1>
              <BookmarkX onClick={handleClos} size={40}/>
            </div>
            <ul>
              {orderedProducts.map((orderedProduct) => (
                <li key={orderedProduct.id} className="flex popuppro">
                  <img
                    src={`./images/${orderedProduct.gambar}`}
                    alt={orderedProduct.nama}
                    style={{
                      width: "70px",
                      height: "55px",
                      marginRight: "2px",
                    }}
                  />
                  {orderedProduct.nama} Harga Rp.{orderedProduct.harga}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Form untuk menambahkan produk baru */}
      {showAddProductForm && (
        <div className="overlay">
          <div className="edit-form">
            <h1>TAMBAH PRODUK </h1>
            <label>
              Nama
              <input
                type="text"
                value={newProduct.nama}
                onChange={(e) => handleNewProductChange("nama", e.target.value)}
              />
            </label>
            <label>
              Harga
              <input
                type="number"
                value={newProduct.harga}
                onChange={(e) =>
                  handleNewProductChange("harga", parseInt(e.target.value))
                }
              />
            </label>
            <label>
              Gambar
              <input
                type="text"
                value={newProduct.gambar}
                onChange={(e) =>
                  handleNewProductChange("gambar", e.target.value)
                }
              />
            </label>
            <button onClick={handleAddProduct}>Save</button>
            <button onClick={resetNewProductForm}>Back</button>
          </div>
        </div>
      )}

      {/* data peroduct */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="container">
            <img className="images" src={getImage(product.gambar)} alt="" />
            <h3 className="m-2">{product.nama}</h3>
            <h3>Harga Rp.{product.harga}</h3>
            <div className="flex gap-5 m-3">
              <ShoppingCart onClick={() => handleAddToCart(product)} />
              {/* <ShoppingCart onClick={() => setItemCount(itemCount + 1)} /> */}
              <Pencil onClick={() => handleEdit(product)} />
              <Trash2 onClick={() => handleDelete(product.nama)} size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* popup edit */}

      {editingProduct && (
        <div className="edit-form">
          <h1>EDIT PRODUCT </h1>
          <label>
            Nama
            <input
              type="text"
              value={editingProduct.nama}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, nama: e.target.value })
              }
            />
          </label>
          <label>
            Harga
            <input
              type="number"
              value={editingProduct.harga}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  harga: parseInt(e.target.value),
                })
              }
            />
          </label>

          <label>
            gambar
            <input
              type="text"
              value={editingProduct.gambar}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  gambar: parseInt(e.target.value),
                })
              }
            />
          </label>

          <button onClick={() => handleSave(editingProduct)}>Save</button>
          <button onClick={handleCancelEdit}>Back</button>
        </div>
      )}
    </>
  );
}
