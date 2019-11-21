import React from 'react';
import { Link }from 'react-router-dom';
import './FullVersionComponent.scss'

const FullVersionComponent = () => {
  return <div className="full-version">
<div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">OOOOOPS!</div>
      <div className="description">
        Your trial version doesn't give you a chance to try this function!
      </div>
    </div>
    <div className="ui bottom attached green button">
      <i className="dollar sign icon"></i>
      I WANNA BUY FULL VERSION!
    </div>

    <Link to="/home"><div className="ui bottom attached button"
    >
      <i className="dollar sign icon"></i>
      No, thanks.
    </div>
    </Link>
  </div>
</div>
  </div>
}

export default FullVersionComponent;