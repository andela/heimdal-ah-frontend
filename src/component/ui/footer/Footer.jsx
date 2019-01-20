/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './footer.scss';

const Footer = () => (
  <footer className="page-footer font-small indigo footer-wrapper">
    <div className="container text-center text-md-left">
      <div className='row'>
        <div className='col-md-6'>
          <form className='input-group '>
            <input className='mt-4 footer-text-field' placeholder='Email Address ' />
            <input type="submit" value='Subscribe' className=" submitbtn footerBtn btn btn-outline-secondary mt-4 ml-4 br-5" />

          </form>
        </div>

        <div className='col-md-6 mt-4'>
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1 fa-2x mr-5">
                <i className="fa fa-facebook-f" />
              </a>
            </li>

            <li className="list-inline-item">
              <a className="btn-floating mx-1">
                <i className="fa fa-instagram fa-2x mr-5" />
              </a>
            </li>

            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fa fa-twitter fa-2x" />
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
              <Link to='/top-articles'>Top articles </Link>
            </li>
            <li>
              <Link to='/editors-pick'>Ediitor’s pick</Link>
            </li>
            <li>
              <Link to='/writers-arena'>Writers’ Arena  </Link>
            </li>
            <li>
              <Link to='/featured'>Featured </Link>
            </li>
            <li>
              <Link to='/categories'>Categories </Link>
            </li>
          </ul>

        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-2 mx-auto mt-5">

          <ul className="list-unstyled">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <br />
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link to="privacy-policy">Privacy policies</Link>
            </li>
          </ul>

        </div>
        <hr className="clearfix w-100 d-md-none" />
        <div className="col-md-2 mx-auto">

          <ul className="list-unstyled mt-5">
            <li>
              <Link to="need-help">Need help?</Link>
            </li>
            <br />
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="knopwledge-base">Knowledge Base</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
    @heimdal
      {' '}
      {new Date().getFullYear()}
      {' '}
Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
