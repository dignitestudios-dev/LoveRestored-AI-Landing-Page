"use client";
import React, { useState } from "react";
import Location from "../icons/Location";
import Email from "../icons/Email";
import Phone from "../icons/Phone";
import Button from "../Button";
import RandomHeartIconsContact from "./RandomHeartIconsContact";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertIsError, setAlertIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent duplicate API calls if already loading
    if (loading) return;

    setLoading(true);
    setAlertIsError(false);
    try {
      const res = await fetch(
        "https://staging.api.loverestoredai.com/user/feedback",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email, phone, message }),
        },
      );

      if (res.ok) {
        setAlertMessage("Thanks! Your message was sent successfully.");
        // Delay showing alert for smooth transition
        setTimeout(() => setAlertVisible(true), 300);
        // reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => null);
        const errMsg =
          (data && data.message) || `Request failed (${res.status})`;
        setAlertIsError(true);
        setAlertMessage(errMsg);
        setAlertVisible(true);
      }
    } catch (err) {
      setAlertIsError(true);
      setAlertMessage(err.message || "Network error");
      setAlertVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="contact"
        className="w-fit flex md:flex-row flex-col-reverse md:gap-0 gap-5 pt-16 sm:mb-22 mb-12 sm:px-10 px-4 max-w-screen relative"
      >
        <RandomHeartIconsContact />

        <div className="bg-(--primary-light) w-72 h-72 rounded-full blur-[260px] absolute md:top-[50%] top-[60%] sm:left-[35%] left-0 z-[-1]" />

        <div className="sm:p-10 p-5 md:rounded-s-xl md:rounded-e-none rounded-xl contact-bg">
          <h1 className="sm:text-[32px] text-[30px] leading-[120%] font-bold">
            Contact Details
          </h1>
          <p className="mt-3 text-[#cccccc] text-sm">
            Have questions or feedback? Get in touch with our <br /> friendly
            support team for assistance. We're here to help!
          </p>

          <ul className="flex flex-col sm:gap-6 gap-3 mt-7">
            <li>
              <h3 className="mb-2 sm:text-[22px] font-bold">Email</h3>
              <div className="flex items-center gap-2">
                <Email />{" "}
                <a
                  href="mailto:business.solutions@loverestoredai.com"
                  className="text-[#cccccc] text-sm"
                >
                  business.solutions@loverestoredai.com
                </a>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <Email />{" "}
                <a
                  href="mailto:support@loverestoredai.com"
                  className="text-[#cccccc] text-sm"
                >
                  support@loverestoredai.com{" "}
                </a>
              </div>
            </li>
            <li>
              <h3 className="mb-2 sm:text-[22px] font-bold">Phone</h3>
              <div className="flex items-center gap-2">
                <Phone />{" "}
                <a
                  href="tel:+1 (727) 459-8735"
                  className="text-[#cccccc] text-sm"
                >
                  +1 (727) 459-8735
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="sm:p-10 p-5 bg-white/5 border border-s-0 border-white/10 text-white shadow-xl shadow-black/25 md:rounded-e-xl md:rounded-s-none rounded-xl backdrop-blur-[20px]">
          <h2 className="sm:text-[32px] text-[30px] leading-[120%] font-bold">
            Let’s Connect{" "}
          </h2>
          <p className="mt-3 text-[#cccccc] text-sm">
            Have questions or feedback? Get in touch with our friendly <br />{" "}
            support team for assistance. We're here to help!
          </p>

          <form className="grid grid-cols-2 gap-3 mt-7" onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required={true}
              placeholder="First Name"
              className="input-class"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={loading}
            />

            <input
              type="text"
              id="lastName"
              name="lastName"
              required={true}
              placeholder="Last Name"
              className="input-class"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={loading}
            />

            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="Email"
              className="col-span-full input-class"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              required={true}
              placeholder="Phone Number"
              className="col-span-full input-class"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />

            <textarea
              name="message"
              id="message"
              required={true}
              placeholder="Message"
              className="col-span-full input-class !h-28 pt-[10px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />

            <div className="col-span-full">
              <Button size="full" type="submit" disabled={loading}>
                <div className="flex items-center justify-center gap-2">
                  {loading && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  <span>{loading ? "Submitting..." : "Submit"}</span>
                </div>
              </Button>
            </div>
          </form>
        </div>
      </div>
      {alertVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-in fade-in duration-300"
          onClick={() => setAlertVisible(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="sm:p-10 p-5 bg-white/5 border border-white/10 text-white shadow-xl shadow-black/25 rounded-2xl backdrop-blur-[20px] max-w-lg w-full animate-in zoom-in-95 fade-in duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setAlertVisible(false)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-[20px] font-bold mb-2">
              {alertIsError ? "Error" : "Success"}
            </h3>
            <p className="text-[#cccccc] text-sm mb-4">{alertMessage}</p>
            <div className="flex justify-center w-full">
              <Button
                onClick={() => setAlertVisible(false)}
                className="w-full! min-w-full!"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
