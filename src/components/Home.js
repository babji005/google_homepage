import React, { Component } from "react";
import "./Home.css";
import googleapps from "../components/Images/googleapps_button.png";
import usericon from "../components/Images/user_icon.png";
// import Logo from './Logo';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        st : {
        title: "Google",
        data: [
              {
                "letter": "G",
                "color": "#4285f4",
                "pos": "none",
                "pad": 0
              },
              {
                "letter": "o",
                "color": "#ea4335",
                "pos": "none",
                "pad": 0
              },
              {
                "letter": "o",
                "color": "#fbbc05",
                "pos": "none",
                "pad": 0
              },
              {
                "letter": "g",
                "color": "#4285f4",
                "pos": "none",
                "pad": 0
              },
              {
                "letter": "l",
                "color": "#34a853",
                "pos": "none",
                "pad": 0
              },
              {
                "letter": "e",
                "color": "#ea4335",
                "pos": "fixed",
                "pad": "-4px"
              },
            ]
          }
    };
  
  }

  render() {
    return (
      <div>
        <div id="navbar">
          <a href="#" id="gmail">
            Gmail
          </a>
          <a href="#" id="images">
            Images
          </a>
          <a href="#" id="menu">
            <img src={googleapps} width="20" />
          </a>
          <a href="#" id="icon">
            <img src={usericon} alt="user_button" width="30" />
          </a>
        </div>
        <div id="main">
          <a id="logo">
            {this.state.st.data.map((e, i) => {
              return (
                <span style={{ color: `${e.color}`, marginLeft:`${e.pad}`,position: `${e.pos}`,
                transform:"rotate(335deg)" }} key={i}>
                  {e.letter}
                </span>
                
              );
            })}
          </a>

          {/* <img  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/> */}

          <input id="input" class="nosubmit"></input>
          <div id="flexbox">
            <button id="gs">Google Search</button>
            <button id="ifl">I'm Feeling Lucky</button>
          </div>
          <p id="langs">
            Google offered by:
            <a style={{ color: "blue" }}>
              हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
            </a>
          </p>
        </div>

        <footer id="footer" height="20">
          <div id="country">
            <p id="nation">India</p>
            <hr />
          </div>

          <div id="footer1">
            <a href="#" id="about">
              About
            </a>
            <a href="#" id="advertising">
              Advertising
            </a>
            <a href="#" id="bussiness">
              Bussiness
            </a>
            <a href="#" id="hsw">
              How Search Works
            </a>
            <a href="#" id="privacy">
              Privacy
            </a>
            <a href="#" id="terms">
              Terms
            </a>
            <a href="#" id="settings">
              Settings
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
