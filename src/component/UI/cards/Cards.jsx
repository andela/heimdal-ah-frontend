import React from 'react';
import Glow from '../buttons/glow/Glow';

// eslint-disable-next-line react/prefer-stateless-function
class Cards extends React.Component {
  render() {
    return (
      <div className="card col-12 col-md-3" style={{ border: '0rem' }}>
        <h5 className="card-title">Article title</h5>
        <img className="card-img-top" src="https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg" alt="Card" />
        <div className="card-body" style={{ padding: '0rem' }}>
          <br />
          <p className="card-text">low as a natural lead-in to additional content. This content is a little bit longer.</p>
          <i className="fas fa-user-circle" />
          <p className="col-8 col-md-7" style={{ display: 'inline-block' }}>Peter Debs</p>
          <i className="far fa-clock " style={{}}> 5days ago</i>
          <Glow className="col-6" />
          <div className='stars col-7' style={{ display: 'inline-block' }}>
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </div>
          <i className="far fa-comment-alt" />
          <hr />
        </div>
      </div>
    );
  }
}

export default Cards;
