import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import API from "../axios";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";

import { Formik } from "formik";

const AddProduct = () => {
  const handleSubmit = (values) => {
    console.log("check by variable value", values.name);
    const data = {
      product_name: values.name,
      productdescription: values.describation,
      product_price: values.price,
    };
    console.log("jfsduyhsvhduhvs", values);

    API.post("/addproductdetail", data)
      .then((response) => {
        console.log("Data Send", response);
        if (response.status > 199 && response.status < 204) {
          enqueueSnackbar("Saved Successfully!!!", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        console.log("Error", err);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };

  const Schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    describation: Yup.string()
      .required("Describation are Required")
      .min(2, "Too Short!")
      .max(50, "TOo long"),
    price: Yup.number()
      .min(3, "Too Short")
      .max(34, "Too Long")
      .required("Price is required"),
  });

  return (
    <div className="mx-5 mt-2 w-100 h-100">
      <div className="mx-5 ">
        <h1>Add Product</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            describation: "",
            price: "",
          }}
          validationSchema={Schema}
          onSubmit={(values) => {
            console.log("values", values);
           handleSubmit(values);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form
              className=" mt-3 mx-5 d-flex justify-content-lg-between justify-content-sm-left align-items-center flex-column"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="FormProductName">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Produc Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  value={values.name}
                  onBlur={handleBlur}
                  // onChange={(e) => {
                  //   console.log(
                  //     e.currentTarget.name,
                  //     e.currentTarget.value
                  //   );
                  //   handleChange(e);
                  // }}
                  onChange={handleChange}
                  className=""
                  style={{ width: "350px", height: "50px" }}
                ></Form.Control>
                <Form.Text className="text-danger ">{errors.name}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormProductDes=">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Product Description
                </Form.Label>
                <Form.Control
                  type="textarea"
                  as="textarea"
                  minRow={5}
                  name="describation"
                  value={values.describation}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Product Description"
                  style={{ width: "350px", height: "150px" }}
                ></Form.Control>
                <Form.Text className="text-danger ">
                  {errors.describation}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb3" controlId="FormProductPrice">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Product Price
                </Form.Label>
                <Form.Control
                  placeholder="Enter Product Price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ width: "350px", height: "50px" }}
                ></Form.Control>
                <Form.Text className="text-danger">{errors.price}</Form.Text>
              </Form.Group>
              <div className="d-flex w-50 gap-2 justify-content-start align-item-start mt-5 pl-0"></div>
              <Button
                type="submit"
                variant="outline-danger active"
                // onClick={"validationfield();handleSubmit()"}
              >
                Confrim Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
