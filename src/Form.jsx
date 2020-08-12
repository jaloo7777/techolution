import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Form.scss";
var yearRange = require("year-range-regex");
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(/^[a-z]+$/, "Only letters")
    .required("This field is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(/^[a-z]+$/, "Only Letters")
    .required("This field is required"),
  class: Yup.string()
    .min(2, "Too Short")
    .max(10, "Too long")
    .required("This field is required"),
  yearOfPassing: Yup.string()
    .min(3, "Too Short")
    .matches(/^[0-9\b]+$/, "Only Numbers")
    .matches(yearRange(0, 2017), "Not a Valid year ")
    .required("This field is required"),
  percentageOfMark: Yup.string()
    .min(3, "Too Short")
    .matches(/^[0-9\b]+$/, "Only Numbers")

    .required("This field is required"),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Fill The Form</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        class: "",
        yearOfPassing: "",
        percentageOfMark: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, dirty, isSubmitting, isValid }) => (
        <Form className="Form">
          <div className="Form__div">
            <Field
              className="Form__div__field"
              placeholder="First Name"
              name="firstName"
            />
            {errors.firstName && touched.firstName ? (
              <small>{errors.firstName}</small>
            ) : null}
          </div>
          <div className="Form__div">
            <Field
              className="Form__div__field"
              placeholder="Last Name"
              name="lastName"
            />
            {errors.lastName && touched.lastName ? (
              <small>{errors.lastName}</small>
            ) : null}
          </div>
          <div className="Form__div">
            <Field
              className="Form__div__field"
              placeholder="Class"
              name="class"
              type="text"
            />
            {errors.class && touched.class ? (
              <small>{errors.class}</small>
            ) : null}
          </div>
          <div className="Form__div">
            <Field
              className="Form__div__field"
              placeholder="Year Of Passing"
              name="yearOfPassing"
            />
            {errors.yearOfPassing && touched.yearOfPassing ? (
              <small>{errors.yearOfPassing}</small>
            ) : null}
          </div>
          <div className="Form__div">
            <Field
              className="Form__div__field"
              placeholder="Percentage"
              name="percentageOfMark"
            />
            {errors.percentageOfMark && touched.percentageOfMark ? (
              <small>{errors.percentageOfMark}</small>
            ) : null}
          </div>

          <button
            // disabled={isSubmitting || !dirty}
            disabled={!(isValid && dirty)}
            className="Form__button"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
