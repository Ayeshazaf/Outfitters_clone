import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>

        <button style={styles.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
  },
  img: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
  },
};

export default ProductDetail;