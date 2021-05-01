import React from 'react'
import Button from "@material-ui/core/Button";
function Detail2({navigation}) {
    return (
        <div>
            <h1>Detail page 2 </h1>
            <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
        </div>
    )
}

export default Detail2
