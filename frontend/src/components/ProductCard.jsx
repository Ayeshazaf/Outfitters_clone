import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button style={styles.btn}>View</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  btn: {
    marginTop: "10px",
    padding: "5px 10px",
  },
};

export default ProductCard;