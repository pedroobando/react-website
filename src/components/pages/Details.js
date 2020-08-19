import React, { useState } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faReddit,
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

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
            <HeaderDetails className="container-fluid align-items-center" key={id}>
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
            </HeaderDetails>
            {/* Nav Link */}
            <div className="container">
              <ul className="nav nav-tabs">
                {/* About Place */}
                <li className="nav-item">
                  <a
                    href="#aboutPlace"
                    className={`${tabSelect === 1 ? 'active' : ''} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="1"
                    onClick={handleTabSelected}>
                    About Place
                  </a>
                </li>
                {/* Reviews */}
                <li className="nav-item">
                  <a
                    href="#reviews"
                    className={`${tabSelect === 2 ? 'active' : ''} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="2"
                    onClick={handleTabSelected}>
                    Reviews
                  </a>
                </li>
                {/* Maps */}
                <li className="nav-item">
                  <a
                    href="#maps"
                    className={`${tabSelect === 3 ? 'active' : ''} nav-link`}
                    role="tab"
                    data-toggle="tab"
                    tabIndex="3"
                    onClick={handleTabSelected}>
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
                    tabSelect !== 1 ? 'sr-only' : 'active'
                  } tab-pane in text-center mt-5`}
                  role="tabpanel">
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img src={img} alt={title} className="img-thumbnail img-fluid" />
                </div>
                {/* Reviews */}
                <div
                  id="reviews"
                  className={`${tabSelect !== 2 ? 'sr-only' : 'active'} tab-pane mt-5`}
                  role="tabpanel">
                  <Reviews />
                </div>
                {/* Maps */}
                <div
                  id="maps"
                  className={`${tabSelect !== 3 ? 'sr-only' : 'active'} tab-pane mt-5`}
                  role="tabpanel">
                  <iframe
                    title="the maps"
                    src={maps}
                    style={{
                      border: '0',
                      height: '28.125rem',
                      width: '100%',
                      frameborder: '0',
                    }}></iframe>
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

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(225, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    color: var(--mainDark);
  }

  svg {
    font-size: 1.877rem;
    color: var(--mainDark);
  }

  svg:hover {
    color: var(--mainBlue);
  }

  .nav-item {
    height: 18.75rem;
  }

  @mdedia (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
