import React from "react";
import "../style/home.scss";
import vid from "../assets/vid3.mp4";
import data from "./data.json";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Filter from "./Filter";

const Home = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });

    toast.success("added to cart successfully");
    dispatch({ type: "calculatePrice" });
    dispatch({ type: "totalqty" });
  };

  const lowcarthandler = (options) => {
    dispatch({ type: "lowcarthandler", payload: options });
    console.log(options);
  };

  return (
    <>
      <div className="home">
        <video autoPlay loop muted className="vid">
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="filtercontainer">
        <Filter />
        {data.map((i) => (
          <div key={i.id}>{lowcarthandler}</div>
        ))}
      </div>

      <div className="products">
        {data.map((i) => (
          <AllProducts
            key={i.id}
            id={i.id}
            image={i.image}
            title={i.title}
            price={i.price}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

const AllProducts = ({ image, title, price, id, handler }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <h4> Rs {price}/plate</h4>
    <button onClick={() => handler({ image, title, price, id, qty: 1 })}>
      ORDER NOW
    </button>
  </div>
);
export default Home;
