import React from 'react'
import Button from "@material-ui/core/Button";
function Detail1({navigation}) {
    return (
        <div>
            <h1>Detail page 1</h1>
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

export default Detail1
