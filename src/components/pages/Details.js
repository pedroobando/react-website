import React, { useState } from "react";
import { InfoConsumer } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faReddit,
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const iconFacebook = <FontAwesomeIcon icon={faFacebookF} />;

const Details = () => {
  const [tabSelect, setTabSelect] = useState(1);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setTabSelect({ ...values, [name]: value });
  // };

  const handleTabSelected = (e) => {
    const { tabIndex } = e.target;
    setTabSelect(tabIndex);
  };

  return (
    <InfoConsumer>
      {(data) => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          img,
          title,
          maps,
          description,
        } = data.detailInfo;

        return (
          <React.Fragment>
            <div className="container-fluid align-items-center">
              <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>
              {/* Social Icons */}
              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-2">{iconFacebook}</div>
                  <div className="col-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="col-2">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </div>
                  <div className="col-2">
                    <FontAwesomeIcon icon={faReddit} />
                  </div>
                  <div className="col-2">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="col-2">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </div>
                </div>
              </div>
            </div>
            {/* Nav Link */}
            <div className="container">
              <ul className="nav nav-tabs">
                {/* About Place */}
                <li className="nav-item">
                  <a
                    href="#"
                    className={`${tabSelect === 1 ? "active" : ""} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="1"
                    onClick={handleTabSelected}
                  >
                    About Place
                  </a>
                </li>
                {/* Reviews */}
                <li className="nav-item">
                  <a
                    href="#"
                    className={`${tabSelect === 2 ? "active" : ""} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="2"
                    onClick={handleTabSelected}
                  >
                    Reviews
                  </a>
                </li>
                {/* Maps */}
                <li className="nav-item">
                  <a
                    href="#"
                    className={`${tabSelect === 3 ? "active" : ""} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="3"
                    onClick={handleTabSelected}
                  >
                    Maps
                  </a>
                </li>
              </ul>
              {/* Tab Panel */}
              <div className="tab-content mb-5">
                {/* About Place Tab*/}
                <div
                  id="aboutPlace"
                  className={`${
                    tabSelect !== 1 ? "sr-only" : "active"
                  } tab-pane in text-center mt-5`}
                  role="tabpanel"
                >
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img src={img} alt={title} className="img-thumbnail img-fluid" />
                </div>
                {/* Reviews */}
                <div
                  id="reviews"
                  className={`${tabSelect !== 2 ? "sr-only" : "active"} tab-pane mt-5`}
                  role="tabpanel"
                >
                  <h2>Reviews content</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
                    veniam ullam aliquid non, maxime ducimus tempora neque voluptates
                    necessitatibus eligendi sed unde est porro iure voluptatibus pariatur
                    corrupti rerum fuga.
                  </p>
                </div>
                {/* Maps */}
                <div
                  id="maps"
                  className={`${tabSelect !== 3 ? "sr-only" : "active"} tab-pane mt-5`}
                  role="tabpanel"
                >
                  <iframe
                    src={maps}
                    style={{
                      border: "0",
                      height: "28.125rem",
                      width: "100%",
                      frameborder: "0",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
