import React from 'react';
import { Link } from "react-router-dom";

const githubTitle = "Catch up and collaborate on GitHub";
const facebookTitle = "Follow me on Facebook";
const discordTitle = "Come chat to me on Discord";
const stackOverflowTitle = "Check me out on Stack Overflow";

const SocialNav = () => {
    return (
      <div>
        <div>
          <Link className="social-icon" to="https://github.com/nathansnow1981" title={githubTitle} style={{ color: "#171515" }}>
            <i className="fab fa-github fa-2x grow"></i>
          </Link>
          <Link className="social-icon" to="https://www.facebook.com/nathan.snow.399" title={facebookTitle} style={{ color: "#3b5998" }}>
            <i className="fab fa-facebook fa-2x grow"></i>
          </Link>
          <Link className="social-icon" to="https://discordapp.com/users/821987974690373662" title={discordTitle} style={{ color: "#7289d9" }}>
            <i className="fab fa-discord fa-2x grow"></i>
          </Link>
          <Link className="social-icon" to="https://stackoverflow.com/users/14024740/aussiedev81" title={stackOverflowTitle} style={{ color: "#F47F24" }}>
            <i className="fab fa-stack-overflow fa-2x grow"></i>
          </Link>
        </div>
      </div>
    );
};

export default SocialNav;