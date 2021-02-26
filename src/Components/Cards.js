import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LanguageIcon from '@material-ui/icons/Language';
import EcoIcon from '@material-ui/icons/Eco';
import "./Cards.css";
import { Link, useHistory } from "react-router-dom";

function Cards() {
    return (
        <div className="card__container">
          
            <Card className="card__body">
           <h2>Software Name </h2>
< EcoIcon  />
<p>Software comprises the entire set of programs, procedures, and routines associated with the operation of a computer system. The term was coined to differentiate these instructions from hardware—i.e., the physical components of a computer system the physical components of a computer </p>
<Link to="/price" className="btn__link ">
<Button className="price__button">USD $ 12.29</Button>
</Link>
<Link to="/details" className="btn__link "> 
<Button className="ViewDetails__btn">View Details</Button>
 </Link> 

    </Card>

    <Card className="card__body">
           <h2>Software Name </h2>
<LaptopMacIcon  />
<p>Software comprises the entire set of programs, procedures, and routines associated with the operation of a computer system. The term was coined to differentiate these instructions from hardware—i.e., the physical components of a computer system the physical components of a computer </p>
<Button className="price__button">USD $ 12.29</Button>
<Button className="ViewDetails__btn">View Details</Button>
    </Card>
    <Card className="card__body">
           <h2>Software Name </h2>
<LanguageIcon />
<p>Software comprises the entire set of programs, procedures, and routines associated with the operation of a computer system. The term was coined to differentiate these instructions from hardware—i.e., the physical components of a computer system the physical components of a computer </p>
<Button className="price__button">USD $ 12.29</Button>
<Button className="ViewDetails__btn">View Details</Button>
    </Card>
        </div>
    )
}

export default Cards
