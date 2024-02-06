import { CONTACT_IMG } from "../utils/constants";
import { useFormik } from "formik";
import * as yup from 'yup'

export default function Contact() {

  const initialValues={
    email:"",
    name:"",
    message:"",
  }

  // const validate = values => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = 'Required';
  //   } else if (values.name?.length > 15) {
  //     errors.name = 'Must be 15 characters or less';
  //   }
  
  //   if (!values.message) {
  //     errors.message = 'Required';
  //   } else if (values.message?.length > 200) {
  //     errors.message = 'Must be 200 characters or less';
  //   }
  
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  
  //   return errors;
  // };

  validationSchema=yup.object({
    name:yup.string().max(30,"Must be 30 characters or less").required("Required"),
    email:yup.string().email("Invalid Email Address").required("Required"),
    message:yup.string().max(200,"Must be 200 characters or less").required("Required"),
  })

  const onSubmit=values=>{
    console.log(values);
  }

  const formik=useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })



  return (
    <div className="Contact-page mt-[90px] ">
      <div className="contact-me">
        <div class="contact-container border p-2 m-2 rounded-md sm:w-[500px] mx-auto text-center">
          <img class="contact-image w-28 rounded-md mx-auto" src={CONTACT_IMG} alt="Contact Us" />
          <h1 className="slogan font-serif font-bold text-lg m-2 p-2">We Are Social! Reach Out to Us</h1>

          <div class="form-container">


            <form onSubmit={formik.handleSubmit}>
              <div class="form-group flex flex-col">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="contact-name" name="name" className="border mx-2 mt-2 p-2" required onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name ? <div className="text-left text-red-600 text-sm mx-2">*{formik.errors.name}!</div> : null}
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" className="border mx-2 mt-2 p-2" required onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? <div className="text-left text-red-600 text-sm mx-2">*{formik.errors.email}!</div> : null}
              </div>
              <div class="form-group flex flex-col">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border mx-2 mt-2 p-2"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? <div className="text-left text-red-600 text-sm mx-2">*{formik.errors.message}!</div> : null}
              </div>
              <button type="submit" class="submit-btn w-[150px] p-2  m-2  rounded-md text-bold px-4 bg-yellow-400 text-white">
                Send Message
              </button>
            </form>

          </div>

          <p class="social-links">
            Do checkout footer, to connect with me on Social Media.
          </p>

          <p>
            I would love to hear from you! You can write me at{" "}
            <strong>vinamrasaurav1715@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
