import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
    } else if (!isValidEmail(email)) {
      setError("Oops! Please check your email");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Thank you for subscribing!");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:pr-4 p-4 md:p-0">
      <div className="w-full flex flex-col mb-4 md:mb-6 relative">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-full rounded-full text-white placeholder:text-white placeholder:opacity-50 px-6 py-3 bg-dark-gray"
        />
        <button className="w-full sm:absolute right-0 h-full px-7 py-3 sm:px-10 rounded-full cursor-pointer bg-light-green mt-6 sm:mt-0">
          Request Access
        </button>
      </div>
      {error && <div className="text-xs text-red">{error}</div>}
      {success && <div className="text-xs text-light-green">{success}</div>}
    </form>
  );
}

export default EmailForm;
