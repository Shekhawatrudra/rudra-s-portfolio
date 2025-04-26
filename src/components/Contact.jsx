import React from "react";

const Contact = () => {
  return (
    <section id="contact" style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#0984e3" }}>📩 Contact Me</h2>
      <p>Have a project or want to connect? Reach out!</p>

      <form
        action="mailto:rudra.shekhawat@outlook.com"
        method="post"
        encType="text/plain"
        style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "left" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={inputStyle}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "0.75rem 2rem",
            backgroundColor: "#0984e3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

export default Contact;
