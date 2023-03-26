import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="lg"
      style={{
        opacity: "0.5",
        fontWeight: "bold",
      }}
    >
      <div className="d-flex flex-column align-items-center mx-auto">
        <Navbar.Brand style={{ fontSize: '2rem' }}>Dollars to Trees</Navbar.Brand>
        <Button variant="none" onClick={handleShow}>
          <BsChevronDown size={32} className="double-arrow-icon" />
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="fullscreen-modal"
        scrollable
        fullscreen="sm-down"
      >
        <Modal.Header className="bg-success text-white" closeButton>
          <Modal.Title>About This Website</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <p>
            When a tree sequesters 22kg of carbon per year, it means that it
            absorbs or takes in 22kg of carbon dioxide (CO2) from the atmosphere
            and stores it in its biomass (i.e. trunk, branches, leaves) through
            the process of photosynthesis. This process helps to mitigate
            climate change by reducing the amount of carbon dioxide in the
            atmosphere, which is a greenhouse gas that contributes to global
            warming.
          </p>
          <p>
            This application estimates the amount of carbon dioxide (CO2)
            emitted for each dollar you spend on clothing. The amount of carbon
            dioxide (CO2) emitted is then converted to the number of trees
            needed to sequester the carbon dioxide (CO2) emitted. With fast
            fashion on the rise, it is important to understand how the clothing
            industry impacts the environment.
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="link" onClick={handleClose}>
            <BsChevronUp size={32} />
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}
