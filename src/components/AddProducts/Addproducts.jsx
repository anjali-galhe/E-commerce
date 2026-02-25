import React, { useState } from "react";
import { useShopContext } from "../../context/shopContext";

import FormError from "../error.jsx/error";
import { toast, ToastContainer } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRef } from "react";

import "./Addproduct.css";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const fileInputRef = useRef(null);

  const navigate = useNavigate()

  //formik
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "*Name must be at least 2 characters")
      .required(" *Product Name is required"),
    category: Yup.string()
    .required("*Category is required"),
    image: Yup.array()
      .min(1, "*At least one image is required")
      .required("*Image is required"),
    new_price: Yup.number()
    .required("*Current Price is required"),
    old_price: Yup.number()
    .required("*Real Price is required"),
    // ,
    // id: Yup.number()
    // .required('*Id is required'),
  });

  const { addProduct , edit } = useShopContext();
  console.log(edit)
  const [preview, setPreview] = useState([]);



  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Formik
        initialValues={{
          name: edit?.name|| "",
          image: edit?.image || [],
          category: edit?.category|| "",
          new_price: edit?.new_price|| "",
          old_price:edit?.old_price|| "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("Product Added successfully..", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          const newProduct = {
            ...values,
            id: Number(values.id),
            new_price: Number(values.new_price),
            old_price: Number(values.old_price),
          };

          addProduct(newProduct);
          resetForm();
          setPreview([]);
          navigate("/admin/product-list")
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <h1>Add Product</h1>
           
            <div className="product-name">
              <Field
                type="text"
                placeholder="Product Name.."
                name="name"
                
              />
              <FormError name="name" />
            </div>
            <div className="product-category">
              <Field
                type="text"
                placeholder=" Product Category.."
                name="category"
                
              />
              <FormError name="category" />
            </div>

            <div className="product-new-price">
              <Field
                type="number"
                name="new_price"
                placeholder="Current Price"
                
              />
              <FormError name="new_price" />
            </div>
            <div className="product-old-price">
              <Field
                type="number"
                placeholder="Real Price"
                name="old_price"
                
              />
              <FormError name="old_price" />
            </div>
            {edit&&
            <img src={edit.image} className="w-[100px]" /> 
            }
            <div className="product-image">
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files);

                  const imagePromises = files.map((file) => {
                    return new Promise((resolve) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = () => resolve(reader.result);
                    });
                  });

                  Promise.all(imagePromises).then((images) => {
                    setFieldValue("image", images);
                    setPreview(images);
                  });
                }}
              />
              <FormError name="image" />
              {preview.length > 0 && (
                <div className="image-preview">
                  {preview.map((img, index) => (
                    <div key={index} className="image-wrapper">
                      <img src={img} alt="Preview" />

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => {
                          const updated = preview.filter((_, i) => i !== index);
                          setPreview(updated);
                          setFieldValue("image", updated);

                          if (updated.length === 0) {
                            fileInputRef.current.value = "";
                          }
                        }}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button type="submit"   disabled={isSubmitting} >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;
