import { useState } from "react";

const EditProductModal = ({ product, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(
    product || {
      id: "",
      nama: "",
      harga: "",
      gambar: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(editedProduct);
    setEditedProduct({
      id: "",
      nama: "",
      harga: "",
      gambar: "",
    });
  };

  return (
    <div className="edit-form ">
      <h2>{product ? "Edit Produk" : "Tambah Produk"}</h2>
      <label>
        Nama Produk
        <input
          type="text"
          name="nama"
          value={editedProduct.nama}
          onChange={handleChange}
        />
      </label>
      <label>
        Harga
        <input
          type="number"
          name="harga"
          value={editedProduct.harga}
          onChange={handleChange}
        />
      </label>
      <label>
        Gambar
        <input
          type="text"
          name="gambar"
          value={editedProduct.gambar}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Simpan</button>
      <button onClick={onClose}>Batal</button>
    </div>
  );
};

export default EditProductModal;
