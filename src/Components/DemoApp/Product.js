import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ShareIcon from "@material-ui/icons/Share";
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 900,
    height: 550,
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));
function Product({ title, price, rating, image, id }) {

  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="product__info">
        <h2>{title}</h2>{" "}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>
      </div>

      <img src={image} className="product__image" onClick={handleOpen} />

      <Button className="product__button">Add to Cart</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {/* 
          <p className="product__title">{title}</p> */}
          <div className="productView">
            <div className="productView__image">
              <img src={image} className="productimage" />
            </div>
            <div className="productView__info">
              <h1>{title}</h1>
              <h4>$ {price}</h4>
              <p>
                Perfect for coffee, tea and hot chocolate, this classic shape
                white, durable ceramic mug in the most popular size. High
                quality sublimation printing makes it an appreciated gift to
                every true hot beverage lover.
              </p>
              <button className="productView__btn1">Add to Cart</button>
              <button
                className="productView__btn2"
              >
                NiyX Discount
              </button>
              <div className="productView__share">
                <ShareIcon /> <h3>Share </h3>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
