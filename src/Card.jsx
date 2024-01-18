import React from 'react'


function Card(props) {
  return    <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.title}</h5>
      <h6 className="card-price text-center">{props.cardData.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
        <li className={props.cardData.project} ><span className="fa-li"><i className={props.cardData.projectIcon} ></i></span>Unlimited
          Private Projects</li>
        <li className={props.cardData.phone}><span className="fa-li"><i className={props.cardData.phoneIcon}></i></span>Dedicated
          Phone Support</li>
        <li className={props.cardData.subDomain}><span className="fa-li"><i className={props.cardData.subDomainIcon}></i></span>{props.cardData.domain}
        </li>
        <li className={props.cardData.monthly}><span className="fa-li"><i className={props.cardData.monthlyIcon}></i></span>Monthly Status
          Reports</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card