import React, { Component } from "react";
import Button from "../../../components/UI/Buttons/Button";
import "./ContactData.css";
import Spinner from "../../../components/UI/spinner/Spinner";
import axios from "../../../../axios-orders";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postNo: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      pricing: this.props.totalPrice,
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
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    let form = (
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postNo" placeholder="POST No" />
        <Button btnType="success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="contact">
        <h4>Enter Your contact details</h4>
        {form}
      </div>
    );
  }
}
