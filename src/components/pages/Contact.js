import React from 'react'
import ContactSec from '../includes/sections/ContactSec';
import BreadCrumbs from '../includes/sub-includes/BreadCrumbs';

const Contact = props => {
  return (
    <div>
      <div>
      <BreadCrumbs name="Contact" url="/contact" />
    </div>
      <div>
        <ContactSec />
      </div>
    </div>
  )
}

export default Contact