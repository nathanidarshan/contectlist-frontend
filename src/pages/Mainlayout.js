import '../App.css';
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { IoIosContact } from "react-icons/io";
import { MdContactMail, MdDashboard, MdOutlineImportContacts } from "react-icons/md";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { RxWidth } from 'react-icons/rx';
import { FaBars } from 'react-icons/fa';

function Mainlayout() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <div className="main">
                <div className="header">
                    <Row >
                        <Col>
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <IoIosContact style={{ marginRight: "10px" }} />
                                <h5>contect list</h5>
                            </div>
                        </Col>
                        <Col className='d-md-none' style={{ display: "flex", justifyContent: "end", paddingRight: "10%" }}  >
                            <Button variant="primary" onClick={handleShow}>
                                <FaBars />
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title style={{ fontSize: "40px" }}>Contect </Offcanvas.Title>
                                </Offcanvas.Header>
                                <div className="pt-2 mt-2">
                                    <ul className="p-0">
                                        <li style={{ paddingLeft: "20px" }}><Link to="/" style={{ color: "black", textDecoration: "none" }}><MdDashboard style={{ marginRight: "10px" }} />Dashboard</Link></li><hr style={{ marginBottom: "0", marginTop: "15px" }} />
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header> <MdContactMail style={{ marginRight: "10px", color: "black" }} />Contect Add</Accordion.Header><hr style={{ margin: "0" }} />
                                                <Accordion.Body style={{ marginLeft: "30px" }}>
                                                    <Link style={{ color: "black", textDecoration: "none" }} to="/contactadd">
                                                        <RiContactsBookUploadLine style={{ marginRight: "10px" }} />Add
                                                    </Link>
                                                    <hr style={{ margin: "10px 0px" }} />

                                                    <Link style={{ color: "black", textDecoration: "none" }} to="/contactview">
                                                        <MdOutlineImportContacts style={{ marginRight: "10px" }} />View
                                                    </Link>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </ul>
                                </div>
                            </Offcanvas></Col>
                    </Row>
                </div>
            </div>
            <div className="saidbar d-none d-md-block">
                <div className="pt-2">
                    <ul className="p-0">
                        <li style={{ paddingLeft: "20px" }}><Link to="/" style={{ color: "black", textDecoration: "none" }}><MdDashboard style={{ marginRight: "10px" }} />Dashboard</Link></li><hr style={{ marginBottom: "0", marginTop: "15px" }} />
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <MdContactMail style={{ marginRight: "10px", color: "black" }} />Contect Add</Accordion.Header><hr style={{ margin: "0" }} />
                                <Accordion.Body style={{ marginLeft: "30px" }}>
                                    <Link style={{ color: "black", textDecoration: "none" }} to="/contactadd">
                                        <RiContactsBookUploadLine style={{ marginRight: "10px" }} />Add
                                    </Link>
                                    <hr style={{ margin: "10px 0px" }} />

                                    <Link style={{ color: "black", textDecoration: "none" }} to="/contactview">
                                        <MdOutlineImportContacts style={{ marginRight: "10px" }} />View
                                    </Link>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Mainlayout;