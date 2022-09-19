import { useContext } from "react";
import { ProductContext } from "../../App";
import CircleLoader from "../Circle Loader/CircleLoader";
import ProductCard from "../ProductCard.jsx/ProductCard";
import "./NewArrivals.scss";

const NewArrivals = () => {
  const data = useContext(ProductContext);
  // console.log("context data ", data);

  return (
    <div className="below_hero_section">
      <h2 className="below_hero_section_heading"> New Arrivals </h2>

      <div className="product_card_wrapper_container">
        {data && data ? (
          data.map((e) => (
            <ProductCard
              key={e._id}
              product_name={e.product_name}
              img={e.cover_image}
              price={e.price}
              product_id={e.product_id}
            />
          ))
        ) : (
          <CircleLoader />
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
