import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <main>
      <h1>The Products Page</h1>
      <p>{params.productId}</p>
      <button>
        <Link to=".." relative="path">
          Back
        </Link>
      </button>
    </main>
  );
};

export default ProductDetailsPage;
