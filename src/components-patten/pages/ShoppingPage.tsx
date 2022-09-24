import { ProductButtons } from "../components/ProductButtons";
import ProductCard from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import "../styles/custom-styles.css";
import { products } from "../data/product";
import useShoppingCart from "../hooks/useShoppingCart";

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h2>Shopping Card</h2>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            count={shoppingCart[product.id]?.count ?? 0}
            onChange={({ count, product }) =>
              onProductCountChange({ count, product })
            }
          >
            <ProductImage className="custom-image" img={""} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark cart"
            onChange={({ count, product }) =>
              onProductCountChange({ count, product })
            }
            count={product.count}
          >
            <ProductImage className="custom-image" img={""} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
