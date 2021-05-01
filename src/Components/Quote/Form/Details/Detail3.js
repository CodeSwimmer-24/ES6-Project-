import React from 'react'
import Button from "@material-ui/core/Button";
function Detail3({navigation}) {
    return (
        <div>
            <h1>Detail page 3 </h1>
            <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        </div>
    )
}

export default Detail3
