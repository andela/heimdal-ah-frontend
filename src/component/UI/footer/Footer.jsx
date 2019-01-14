/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="page-footer font-small indigo">
    <div className="container text-center text-md-left">
      <div className='row'>
        <div className='col-md-6'>
          <form className='input-group '>
            <input className='mt-4 footerTextField' placeholder='Email Address ' />
            <input type="submit" value='Subscribe' className=" submitbtn footerBtn btn btn-outline-secondary mt-4 ml-4 br-5" />

          </form>
        </div>

        <div className='col-md-6 mt-4'>
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1 fa-2x mr-5">
                <i className="fab fa-facebook-f" />
              </a>
            </li>

            <li className="list-inline-item">
              <a className="btn-floating mx-1">
                <i className="fab fa-instagram fa-2x mr-5" />
              </a>
            </li>

            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          Hiemdal is a community,
          <br />
        a place to geek out about all forms
          <br />
          of literature with other enthusiastic people.
        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-2 mx-auto mt-5">
          <ul className="list-unstyled">
            <li>
              <a href="#">Top articles </a>
            </li>
            <li>
              <a href="#!">Ediitor’s pick</a>
            </li>
            <li>
              <a href="#!">Writers’ Arena  </a>
            </li>
            <li>
              <a href="#!">Featured </a>
            </li>
            <li>
              <a href="#!">Categories </a>
            </li>
          </ul>

        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-2 mx-auto mt-5">

          <ul className="list-unstyled">
            <li>
              <a href="#!">About us</a>
            </li>
            <br />
            <li>
              <a href="#!">Company</a>
            </li>
            <li>
              <a href="#!">Terms of use</a>
            </li>
            <li>
              <a href="#!">Privacy policies</a>
            </li>
          </ul>

        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-2 mx-auto">

          <ul className="list-unstyled mt-5">
            <li>
              <a href="#!">Need help?</a>
            </li>
            <br />
            <li>
              <a href="#!">Contact Us</a>
            </li>
            <li>
              <a href="#!">Knowledge Base</a>
            </li>

          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
    @heimdal 2019 Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
