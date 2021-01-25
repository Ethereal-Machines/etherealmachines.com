/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';

import './about-us.css';

import pdf from '../../assets/images/ethereal-journey/pdf.svg';

const aboutUs = (props) => {
  return (
    <div className="about-us-container">
      <div className="about-ethereal-machines">
        {/* <div className="about-title subtitle u-margin-bottom-small">
          <span>Ethereal Machines</span>
        </div> */}
        <p>At Ethereal machines, we are manufacturers of simultaneous 5axis CNC Machines. These CNC Machines are built to invigorate, nurture and embolden an engineer while unbridling the designer’s freedom to create.</p>
        <p>The experience gained over the years by manufacturing CNC Machines has helped us command technical strength and expertise over the field. Technologies that have the potential to create large-scale impacts have always consumed us and shaped the direction of our work over the past few years. Our team of engineers strive every day to refine the shape of the manufacturing industry, lesser the burden of capital costs of machineries and increase user friendliness of CNC machines.</p>
        <p>Based out of the start-up hub of India, Bangalore, Ethereal Machines caters to clients across various fields and helps them establish successful businesses. Our clients from various sectors including range from aerospace, tool and die, healthcare, jewellery, automobile, electronics and education.</p>
      </div>
      <div className="vision-mission">
        {/* <div className="vision">
          <div className="about-title subtitle u-margin-bottom-small">
            <span>Our Vision</span>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ex quisquam possimus libero obcaecati! Deleniti, perferendis optio unde quibusdam, illo repellendus doloremque saepe nemo asperiores libero temporibus quisquam cupiditate dolores.</p>
        </div> */}
        <div className="certifications">
          <div className="about-title subtitle u-margin-bottom-small">
            <span>Certifications</span>
          </div>
          <p>Ethereal Machines is an ISO 9001: 2015 certified company. Ethereal Machines is also recognized as a start-up under the ‘Start-up India’ and ‘Make in India’ scheme by the   Government of India.</p>
        </div>
        <br></br>
        <div className="mission">
          <div className="about-title subtitle u-margin-bottom-small">
            <span>Our Mission</span>
          </div>
          <p>Our mission is to solve problems related to manufacturing faced by industries, engineers and makers through our machines and aid the growth of small-scale and mid-scale entrepreneurs by equipping them with affordable machines.</p>
        </div>
        <div className="mission">
          <span>Investor Relations  |</span>

          <span onClick={() => {
            window.location.href = "https://ethereal-website2020.s3-ap-southeast-1.amazonaws.com/static/Form+MGT-7_Ethereal+website+upload+copy_protected+(1).pdf";
          }}><img src={pdf} alt="Facebook" width="30" height="30" />

              FY 19-20</span>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;