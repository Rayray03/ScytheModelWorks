import React, { useState } from "react";
import Modal1 from "../components/modal/modal.js";
import { Button, Modal } from "react-bootstrap";

const partners = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <div
        class="d-flex justify-content-center"
        style={{ "padding-top": "5rem", "padding-bottom": "10rem" }}
      >
        <a variant="primary" onClick={handleShow}>
          <img
            src="../images/partners/plamod.png"
            height="100"
            style={{ "padding-right": "50px" }}
          />
        </a>
        <a variant="primary" onClick={handleShow1}>
          <img
            src="../images/partners/torchlightgames.png"
            height="100"
            style={{ "padding-right": "50px" }}
          />
        </a>
        <a variant="primary" onClick={handleShow2}>
          <img
            src="../images/partners/gundamhanger.png"
            height="100"
            style={{ "padding-right": "50px" }}
          />
        </a>
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body class="d-flex justify-content-center">
            <div>
              <img
                src="../images/partners/plamod.png"
                style={{ height: "7rem" }}
              />
              <br />
              <br />
              <h3>PLAMOD DISTRIBUTORS, INC</h3>
              <p style={{ color: "grey" }}>
                Plamod Distributors, Inc is the official Bandai distributor for
                Canada. Support them by telling your local shop to get Bandai
                products from them!
              </p>
              <Modal.Footer>
                <a href="https://plamod.com/" class="btn btn-primary btn-small">
                  Visit Them Here
                </a>

                <a class="btn btn-danger btn-small" onClick={handleClose}>
                  Close
                </a>
              </Modal.Footer>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Body class="d-flex justify-content-center">
            <div>
              <img
                src="../images/partners/torchlightgames.png"
                style={{ height: "7rem" }}
              />
              <br />
              <br />
              <h3>Torchlight Games and Hobbies</h3>
              <p style={{ color: "grey" }}>
                Torchlight Games and Hobbies is your premiere stop for gaming
                and hobby! Come on down and enjoy a store full of exciting
                products and areas to play!
              </p>
              <Modal.Footer>
                <a
                  href="https://torchlightgh.com/"
                  class="btn btn-primary btn-small"
                >
                  Visit Them Here
                </a>

                <a class="btn btn-danger btn-small" onClick={handleClose1}>
                  Close
                </a>
              </Modal.Footer>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Body class="d-flex justify-content-center">
            <div>
              <img
                src="../images/partners/gundamhanger.png"
                style={{ height: "7rem" }}
              />
              <br />
              <br />
              <h3>Torchlight Games and Hobbies</h3>
              <p style={{ color: "grey" }}>
                GundamHangar.com is a page for fans, by fans. We’re here to
                offer you kits, tools and accessories you can use.
              </p>
              <Modal.Footer>
                <a
                  href="https://gundamhangar.com/"
                  class="btn btn-primary btn-small"
                >
                  Visit Them Here
                </a>

                <a class="btn btn-danger btn-small" onClick={handleClose2}>
                  Close
                </a>
              </Modal.Footer>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default partners;
