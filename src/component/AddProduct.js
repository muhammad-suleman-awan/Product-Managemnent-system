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

      .required("Price is required"),
  });

  return (
    <div className="">
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
            resetForm,
          }) => (
            <Form className="" onSubmit={handleSubmit}>
              <div className="row py-3">
                <Form.Group className="col-md-6 col-xs-12" controlId="FormProductName">
                  <Form.Label className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                    Product Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Product Title"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text className="text-danger ">{errors.name}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-6 col-xs-12  mb-0" controlId="FormProductPrice">
                  <Form.Label className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                    Product Price
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter Product Price"
                    name="price"
                    type="number"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=""
                  ></Form.Control>
                  <Form.Text className="text-danger">{errors.price}</Form.Text>
                </Form.Group>
                <Form.Group className="col-md-12 col-xs-12" controlId="FormProductDes=">
                  <Form.Label
                    className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco"
                  >
                    Product Description
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    as="textarea"
                    minRow={10}
                    name="describation"
                    value={values.describation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Product Description"
                  ></Form.Control>
                  <Form.Text className="text-danger ">
                    {errors.describation}
                  </Form.Text>
                </Form.Group>

                <div className="col-12 d-flex gap-3 py-3">
                  <Button
                    type="submit"
                    variant="outline-danger "
                    // onClick={"validationfield();handleSubmit()"}
                    className=""
                  >
                    <span className=" text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                      {" "}
                      Add Product
                    </span>
                  </Button>
                  <Button
                    className=""
                    type="button"
                    variant="outline-secondary"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
