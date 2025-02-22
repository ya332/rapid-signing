import React from 'react';
import "./Landing.css"
import Layout from "../Layout";
import { Link } from 'react-router-dom';
import FeelingProud from "../../assets/usecases/feeling_proud.svg";
import SocialGirl from "../../assets/usecases/social_girl.svg";
import Marketing from "../../assets/usecases/marketing.svg"
import Influencer from "../../assets/usecases/influencer.svg";
import OnlineEverywhere from "../../assets/usecases/online_everywhere.svg";


const Landing = ({userEmail}) => {
  return (
    <div>
      <Layout auth={userEmail != null ? true : false} />
      <div className="content">
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="welcome">Welcome to RapidSign</h1>
            <p>Collecting signatures has never been faster.</p>
          </div>
        </div>
        <div className="information">
          <h1>RapidSign!</h1>
          <h3>RapidSign allows you to quickly upload a pdf document, share it, and have it signed.</h3>
          <p>Upload your document</p>
          <p>Share the provided link</p>
          <p>The recipient opens the link and signs</p>
          <p>Gathering multiple signatures <i>is that simple</i></p>

        </div>
      </div>
      <div className="sections">
        <div className="section feature">
          <div>
            <h2>Meet John, Thesis Student</h2>
            <p
            >John needed to get 5 signatures on his thesis approval form. He used RapidSign and shared his form link with the recipients. He managed to gather all his signatures in 2 days.  </p>
          </div>
          <div>
            <img alt="feature" src={FeelingProud} />

          </div>
        </div>

        <div className="section feature feature-right">
          <div>
            <h2>Meet Alice, Marketing Club President </h2>
            <p>
              Alice needed to get her members sign a consent form for an outdoor trip. Alice used RapidSign and her 56 members signed her form in 3 days.
              </p>
          </div>
          <div>
            <img alt="feature" src={SocialGirl} />
          </div>
        </div>

        <div className="section feature">
          <div>
            <h2>Meet John, Recruiter</h2>
            <p>John is a recruiter for a big tech company and used RapidSign to extend the offer letter to the applicant. Applicant signed the form in RapidSign's secure platform. </p>
          </div>
          <div>
            <img alt="feature" src={Marketing} />
          </div>
        </div>

        <div className="section feature">
          <div>
            <img alt="feature" src={Influencer} />
          </div>
          <div>
            <h2>Meet Allison, Landlord</h2>
            <p>Allison is a landlord and used RapidSign to get signatures from her 5 tenants, all of whom signed the document using RapidSign under a day, which is much faster than using email.
              </p>
          </div>
        </div>


        <div className="bottom-section section">
          <h2>Supercharge Your Forms with RapidSign Now for Free.
              <br></br>
              No credit card required.
            </h2>

          <img alt="feature" src={OnlineEverywhere} />
          <p>&nbsp;</p>
          <p>
            <Link className="get-started-btn" to="/register">Get Started for Free</Link>
          </p>
        </div>

        <div className="footer">
          <div className="copyright">
            Copyright © 2021 <Link to="/">RapidSign</Link>. All rights reserved.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;