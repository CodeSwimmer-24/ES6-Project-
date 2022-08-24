import React from "react";
import BurgerItems from "./BurgerItems/BurgerItems";

function Burger(props) {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerItems key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p> Please select the ingredient </p>;
  }

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        height: "550px",
        overflow: "scroll",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      <BurgerItems type="bread-top" />
      {transformIngredients}
      <BurgerItems type="bread-bottom" />
    </div>
  );
}

export default Burger;
