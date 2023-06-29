import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  {
    id: "p1",
    price: 5,
    title: "My first Book",
    description: "this is my first book",
  },
  {
    id: "p2",
    price: 15,
    title: "My second Book",
    description: "this is my second book",
  },
  {
    id: "p3",
    price: 18.99,
    title: "My third Book",
    description: "this is my third book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
