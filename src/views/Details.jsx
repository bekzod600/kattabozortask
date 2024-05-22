/* eslint-disable no-unreachable */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import { fetchDetails } from "../store/detailsSlice";
import Header from "../components/Header";

const Details = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.details);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDetails());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = () => {
    alert("Added to cart!");
  };
  return (
    <div>
      <Header />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((pr) => {
          return (
            <ProductCard
              key={pr.id}
              image={pr.image.url}
              title={pr.name}
              category={pr.category}
              id={pr.id}
              onAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Details;
