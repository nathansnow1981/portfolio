import React from 'react';

const socialMedia = [
  {
    name: "GitHub",
    link: "https://github.com/nathansnow1981",
    title: "Catch up and collaborate on GitHub",
    icon: "fab fa-github fa-2x grow",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nathan.snow.399",
    title: "Follow me on Facebook",
    icon: "fab fa-facebook fa-2x grow",
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/821987974690373662",
    title: "Come chat to me on Discord",
    icon: "fab fa-discord fa-2x grow",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/14024740/aussiedev81",
    title: "Check me out on Stack Overflow",
    icon: "fab fa-stack-overflow fa-2x grow",
  },
];

const SocialNav = () => {
    return (
      <div>
        <div>
          {
            socialMedia.map((social, index) => {
              return (
                <a key={index} className="social-icon" 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer external" 
                    title={social.title}>
                  <i className={social.icon}></i>
                </a>
              );
            })
          }
        </div>
      </div>
    );
};

export default SocialNav;