import React, { Component } from 'react'
import { Link} from "react-router-dom";
import newspic from "./news_image.png"


export default class navbar extends Component {
  render() {
    return (
        <nav className="navbar  navbar-expand-lg sticky-top navbar-light bg-secondary " 
         style={{ 
          backgroundImage: `url("https://st.depositphotos.com/1000350/4770/i/950/depositphotos_47702405-stock-photo-digital-news-technology-background.jpg")`
        }}
        >
        {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
        {/* <img className="navbar"  src={newspic} height={120} width={180} alt="Card image cap" /> */}
      

       
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className=" collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/general"><button type="button" className="btn btn-warning">Home</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general"> <button type="button" className="btn btn-warning">general</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health"><button type="button" className="btn btn-warning">health</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports"><button type="button" className="btn btn-warning">sports</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology"><button type="button" className="btn btn-warning">technology</button></Link>
            </li>
            
          </ul>
        </div>
      </nav>  
      
     
        
  
    
     
    
    )
  }
}
