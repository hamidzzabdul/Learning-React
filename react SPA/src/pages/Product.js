import { Link } from "react-router-dom";

const Products = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Product = () => {
  return (
    <main>
      <h1>Products page</h1>
      <ul>
        {Products.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={prod.id}>{prod.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Product;
