import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import notFound from "../img/n1.gif";
import notFound1 from "../img/n6.gif";



const NotFound = () => {
    return (
        <div className="w-100 not my-5">
     
      <Container className="container my-5 py-5">
        <Row className="mt-5">
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center my-3 align-items-center "
          >
            <img className="img-fluid rounded h-100" src={notFound} alt="" />
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center my-3 align-items-center "
          >
            <div className="px-4  text-center ms-4">
              <img src={notFound1} alt="" className="my-3 h-50 w-50 rounded" />
             
                <h2 className="my-2 fw-bold  server">404! SERVER ERROR! </h2>
             
                <h4 className="mt-3 not">Not Found In Server</h4>
            
              <Form className="d-flex my-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default NotFound;