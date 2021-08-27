import React from "react";

const contactme = () => {
  return (
    <div class="container ">
      <u style={{ color: "red" }}>
        <h1
          class="text-uppercase font-weight-bold"
          style={{
            "font-size": "4.5rem",
            "padding-bottom": "1rem",
            "padding-top": "1rem",
            textAlign: "center",
          }}
        >
          contact me
        </h1>
      </u>

      <p
        style={{
          textAlign: "center",
          color: "grey",
          "padding-bottom": "1rem",
        }}
      >
        I am open to any type of collaborations and partnership,
        <br />
        If you like what I do, or if you have any questions, let’s talk!
      </p>

      <div
        class="container "
        style={{ width: "30rem", "padding-bottom": "10rem" }}
      >
        <label for="name" class="form-label" style={{ color: "white" }}>
          NAME:
        </label>
        <input type="name" class="form-control" id="name" placeholder="name" />
        <br />
        <label for="email" class="form-label" style={{ color: "white" }}>
          E-MAIL:
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <br />
        <label for="message" class="form-label" style={{ color: "white" }}>
          MESSAGE:
        </label>
        <textarea
          class="form-control"
          id="message"
          rows="3"
          placeholder="message"
        ></textarea>
        <br />
        <div class="col">
          <button
            type="submit"
            class="btn btn-danger mb-3"
            style={{ float: "right" }}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default contactme;
