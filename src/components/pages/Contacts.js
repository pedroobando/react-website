import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <section className="my-y py-5">
      <div className="container">
        <div className="well well-sm">
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.15386468978!2d4.763534098997145!3d52.35479212941816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2zw4Ftc3RlcmRhbSwgUGHDrXNlcyBCYWpvcw!5e0!3m2!1ses!2sve!4v1594670791921!5m2!1ses!2sve"
              style={{ border: '0', width: '100%', height: '315px', frameborder: '0' }}
              allowFullScreen
              title="Locacion"
            />
          </div>
          <div className="col-md-5">
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <textarea
                className="form-control"
                cols="30"
                rows="3"
                placeholder="Message"
              />
              <Link className="btn btn-outline-primary text-uppercase mt-3">
                <FontAwesomeIcon icon={faTelegramPlane} className="mr-2" />
                Enviar
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
