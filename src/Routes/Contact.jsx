import React, { useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const { theme } = useContextGlobal();
  const formClassName = theme === "dark" ? "backDark" : "back";

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.fullName.trim().length < 5) {
      newErrors.fullName = "Name has to have at least 5 characters";
      isValid = false;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setFormMessage("Please correct your information");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormMessage(
        `Thank you, ${formData.fullName}, we will contact you as soon as possible.`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className={formClassName}>
      <section className="container">
        <h1 className={`title is-3 pad ${formClassName}`}>
          Contact us for more information
        </h1>
        <div class="columns">
          <div class="column">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName">Full name:</label>
                  <input
                    className="input"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    className="input"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                {formMessage && (
                  <p className={errors._error ? "error" : "success"}>
                    {formMessage}
                  </p>
                )}
                <button className="button mt-5" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </section>
    </section>
  );
};

export default Form;
