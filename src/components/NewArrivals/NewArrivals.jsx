import { useContext } from "react";
import { AppContext } from "../../App";
import CircleLoader from "../Circle Loader/CircleLoader";
import ProductCard from "../ProductCard.jsx/ProductCard";
import "./NewArrivals.scss";

const NewArrivals = () => {
  const contextData = useContext(AppContext);
  console.log("context data ", contextData);

  return (
    <div className="below_hero_section">
      <h2 className="below_hero_section_heading"> New Arrivals </h2>

      <div className="product_card_wrapper_container">
        <AppContext.Consumer>
          {(data) =>
            data.newArrivals && data.newArrivals ? (
              data.newArrivals.map((e) => (
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
            )
          }
        </AppContext.Consumer>
      </div>
    </div>
  );
};

export default NewArrivals;
