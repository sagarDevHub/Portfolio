import React, { useState } from "react";
import emailJs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";

    if (!formData.email) {
      errors.email = "E-mail is reqired";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "E-mail is invalid";
    }

    if (!formData.message) errors.message = "Messagae is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailJs
        .send(
          "service_7xa1g47",
          "template_tmu3852",
          formData,
          "eMen0p3UayVHcIdwC"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen p-4" id="contact">
      <Toaster />
      <div className="lg:w-3/4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Let's Connect
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex space-x-4">
            <div className="lg:w-1/2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full mb-8 appearance-none rounded-lg border border-green-50/30 bg-transparent px-3 py-2 text-sm focus:border-green-300 focus:outline-none"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-sm text-rose-800"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div className="lg:w-1/2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full mb-8 appearance-none rounded-lg border border-green-50/30 bg-transparent px-3 py-2 text-sm focus:border-green-300 focus:outline-none"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-sm text-rose-800"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="w-full mb-8 appearance-none rounded-lg border border-green-50/30 bg-transparent px-3 py-2 text-sm focus:border-green-300 focus:outline-none"
              rows="6"
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className={`mb-8 w-full rounded border border-green-50/30 bg-green-200 px-4 text-sm font-semibold text-black hover:bg-green-300 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}

              <FiSend />
            </div>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
