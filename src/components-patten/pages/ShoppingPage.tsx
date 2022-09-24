import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import "../styles/custom-styles.css";
import { products } from "../data/product";
const product = products[0];
const ShoppingPage = () => {
  return (
    <div>
      <h2>Shopping Card</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          initailValues={{
            count: 4,
            maxCount: 10,
          }}
          key={product.id}
          product={product}
          className="bg-dark"
        >
          {({ reset }) => (
            <>
              <ProductImage className="custom-image" img={""} />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
