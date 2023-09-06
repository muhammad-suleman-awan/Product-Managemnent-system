
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import API from "../axios";
import { enqueueSnackbar } from "notistack";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    productnames: "",
    productdecs: "",
    productprices: "",
  });
  console.log("nuherhgj ", addProduct);
  function handleChange(event) {
    console.log("hello");
    const value = event.target.value;
    console.log("Hello value change ", value);
    setAddProduct({
      ...addProduct,
      [event.target.name]: value,
    });
  }
  {
  }
  const handleSubmit = () => {
    const data = {
      product_name: addProduct?.productnames,
      productdescription: addProduct?.productdecs,
      product_price: addProduct?.productprices,
    };
    console.log("jfsduyhsvhduhvs", data);

    API.post("/addproductdetail",data)
    .then((response)=>{
       console.log("Data Send",response)
       if(response.status > 199 && response.status <204 ){
        enqueueSnackbar('Saved Successfully!!!', {
          variant:"success"
        })
        clearField()
       }
    })
 .catch((err)=>{
   console.log("Error",err)
   enqueueSnackbar('Error', {variant:"error"})
 });
  };
const clearField =()=>{
  setAddProduct( {productnames: "",
    productdecs: "",
    productprices: "",});
}


  return (
    <div style={{ backgroundColor: "", width: "1000px" }}>
      <div className="mt-5">
        <h1>Add Product</h1>
      </div>
      <Form
        className="d-flex justify-content-lg-between justify-content-sm-left align-items-center flex-column"
        style={{ Width: "500px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="FormProductName">
          <Form.Label style={{ fontWeight: "bold" }}>Produc Name</Form.Label>
          <Form.Control
            type="text"
            name="productnames"
            placeholder="Enter Product Name"
            value={addProduct.productnames}
            onChange={handleChange}
            className=""
            style={{ width: "350px", height: "50px" }}
          ></Form.Control>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="FormProductDes=">
          <Form.Label style={{ fontWeight: "bold" }}>
            Product Description
          </Form.Label>
          <Form.Control
            type="textarea"
            as="textarea"
            minRow={5}
            name="productdecs"
            value={addProduct.productdecs}
            onChange={handleChange}
            placeholder="Enter Product Description"
            style={{ width: "350px", height: "150px" }}
          ></Form.Control>
          <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="mb3" controlId="FormProductPrice">
          <Form.Label style={{ fontWeight: "bold" }}>Product Price</Form.Label>
          <Form.Control
            placeholder="Enter Product Price"
            name="productprices"
            value={addProduct.productprices}
            onChange={handleChange}
            style={{ width: "350px", height: "50px" }}
          ></Form.Control>
          <Form.Text></Form.Text>
        </Form.Group>
        <div
          style={{ width: "350px" }}
          className="d-flex gap-2 justify-content-start align-item-start"
        >
          <Button
            className="mt-3"
            type="button"
            variant="outline-danger active"
            onClick={handleSubmit}
            style={{
              fontWeight: "bold",
              marginBetween: "20px",
              width: "100px",
            }}
          >
             
            Add
          </Button>
          <Button
            className="mt-3"
            type="button"
            variant="outline-danger active"
            style={{ fontWeight: "bold", width: "100px" }}
            onClick={clearField}
          >
            {" "}
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
