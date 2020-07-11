import React from "react";
import Inbox from "../messages/Inbox"
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "../headers/UserHeader";
import {useDispatch} from "react-redux";
import {setUserDashboardView} from "../../../actions";

function VetProfile() {
  const dispatch = useDispatch();

  const onClickInbox = (e) => {
    dispatch(setUserDashboardView('Messages'));
  }

  return (
      <>
        <UserHeader/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../profile-img-tmp/mock-avatar-2.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                        className="mr-4"
                        color="info"
                        href="../messages/Inbox"
                        onClick={e => e.preventDefault()}
                        size="sm"
                    >
                      Connect
                    </Button>
                    {/* <Link to= "../"> */}
                    <Button
                        className="float-right"
                        color="info"
                        onClick={onClickInbox}
                        size="sm"
                    >
                      Inbox
                    </Button>
                    {/* </Link> */}
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"/>
                      Vancouver, BC
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2"/>
                      Senior Vet -- Dogs
                    </div>
                    <div>
                      <i className="ni education_hat mr-2"/>
                      University of British Columbia
                    </div>
                    <hr className="my-4"/>
                    <p>
                      I am a Senior Vet who specializes in dog care.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Edit
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                      >
                        Edit Profile
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="jessica.jones"
                                id="input-username"
                                placeholder="Username"
                                type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-password"
                            >
                              Password
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="*********"
                                id="input-password"
                                placeholder="Password"
                                type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder="jessica.jones@example.com"
                                type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="Jessica"
                                id="input-first-name"
                                placeholder="First name"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="Jones"
                                id="input-last-name"
                                placeholder="Last name"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4"/>
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="6324 Sunshine Blvd"
                                id="input-address"
                                placeholder="Home Address"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="Vancouver"
                                id="input-city"
                                placeholder="City"
                                type="text"
                            />
                          </FormGroup>
                        </Col>


                        <Col lg="4">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-province"
                            >
                              Province
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="British Columbia"
                                id="input-province"
                                placeholder="province"
                                type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="4">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="Canada"
                                id="input-country"
                                placeholder="Country"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-postal-code"
                                placeholder="V6Z123"
                                type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4"/>
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            rows="4"
                            defaultValue="I am a practicing vet specializing in dogs."
                            type="textarea"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default VetProfile;