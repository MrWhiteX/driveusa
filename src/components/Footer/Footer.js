import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer__wrapper">
              <div className="social__ico">
                <a href="#">
                  <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                </a>
                <a href="#">
                  <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                </a>
              </div>

              <div className="contact__details">
                <div className="singleElementContact">
                  <PhoneAndroidIcon style={{ fontSize: 30 }} />
                  <span>+48 123 456 789</span>
                </div>

                <div className="singleElementContact phone__talk">
                  <PhoneInTalkIcon style={{ fontSize: 30 }} />
                  <span>+48 32 652 10 25</span>
                </div>

                <div className="singleElementContact email">
                  <EmailIcon style={{ fontSize: 30 }} />
                  <span>kontakt@driveusa.pl</span>
                </div>

                <div className="singleElementContact address">
                  <LocationOnIcon style={{ fontSize: 30 }} />
                  <span>ul. Aleja “Solidarności 117/315 00-140 Warszawa</span>
                </div>
              </div>
            </div>
            <div className="copyright">
              <span>Copyright 2021 DRIVEUSA.PL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
