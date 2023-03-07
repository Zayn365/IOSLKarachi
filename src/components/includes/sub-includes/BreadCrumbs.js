import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = props => {
  return (
    <div>
          <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{marginBottom: '90px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-1">{props.name}</h1>
            <div className="d-inline-flex text-white mb-5">
                <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                <i className="fa fa-angle-double-right pt-1 px-3"></i>
               <Link to={props.url} className="text-warning font-weight-bold"><p className="m-0 text-uppercase">{props.name}</p></Link>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}

    </div>
  )
}

export default BreadCrumbs