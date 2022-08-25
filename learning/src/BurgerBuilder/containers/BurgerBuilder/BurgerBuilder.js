import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Model from "../../components/UI/Modal/Model";
import Aux from "../../HOC/Aux";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    show: false,
  };

  updatePurchase(ingredient) {
    const sum = Object.keys(ingredient)
      .map((index) => {
        return ingredient[index];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCounted;

    const priceAddition = INGREDIENT_PRICE[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchase(updateIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCounted = oldCount - 1;
      const updateIngredients = {
        ...this.state.ingredients,
      };
      updateIngredients[type] = updatedCounted;

      const priceAddition = INGREDIENT_PRICE[type];

      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;
      this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
      this.updatePurchase(updateIngredients);
    } else {
      alert("Please add Ingredients");
    }
  };

  show = () => {
    const view = this.state.show;
    this.setState({ show: !view });
  };

  render() {
    const disableBtn = {
      ...this.state.ingredients,
    };

    for (let key in disableBtn) {
      disableBtn[key] = disableBtn[key] <= 0;
    }

    return (
      <Aux>
        {this.state.show ? (
          <Model>
            <OrderSummary ingredients={this.state.ingredients} />
          </Model>
        ) : null}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disableBtn={disableBtn}
          pricing={this.state.totalPrice}
          orderBtn={this.state.purchaseable}
          onShow={this.show}
        />
      </Aux>
    );
  }
}
