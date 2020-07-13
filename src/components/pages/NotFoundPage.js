import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
  return (
    <ComponentNotFound className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Ops!</h1>
            <h2>Error 404 Not Found</h2>
            <div className="error-details">
              Sorry, an error occurred. The requested page was not found!
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-outline-primary btn-lg mx-2">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Back To Main
              </Link>
              <Link className="btn btn-outline-secondary btn-lg mx-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ComponentNotFound>
  );
};

export default NotFoundPage;

const ComponentNotFound = styled.div`
  .row {
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
  .error-template {
    padding: 40px, 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-botton: 15px;
  }
`;
