import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  //console.log(isChecked);
  return (
    <form className="mt-5 mb-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        className="form-check-input"
        type="checkbox"
      />
      <div className="terms-wrapper">
        <label htmlFor="terms">
          I Agree to Rewards Terms, Terms of Use, Privacy Policy
        </label>
        <p
          style={{
            visibility: isHover ? "visible" : "hidden",
          }}
        >
          Your Order on the Way
        </p>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default Form;
