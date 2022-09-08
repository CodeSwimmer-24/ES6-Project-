import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Model from "../../components/UI/Modal/Model";
import Aux from "../../HOC/Aux";
import axios from "../../../axios-orders";
import Spinner from "../../components/UI/spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    show: false,
    loading: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-9265c-default-rtdb.firebaseio.com/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  remove = () => {
    this.setState({ show: false });
  };

  continue = () => {
    // alert("Are you sure");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      pricing: this.state.totalPrice,
      customer: {
        name: "Fahad",
        address: {
          street: "Street no 10",
          zip: "416152",
          country: "India",
        },
        email: "fahad@gmail.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, show: false });
      })
      .catch((err) => {
        this.setState({ loading: false, show: false });
        console.log(err);
      });
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
          <Model show={this.state.show} modalClosed={this.state.remove}>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <OrderSummary
                cancel={this.remove}
                ingredients={this.state.ingredients}
                continue={this.continue}
                pricing={this.state.totalPrice}
              />
            )}
          </Model>
        ) : null}

        {this.state.ingredients ? (
          <Aux>
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
        ) : null}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
