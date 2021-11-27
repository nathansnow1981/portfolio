import React from 'react';
import BottomNav from './navigation/BottomNav';
import "./SiteFooter.css";
import SocialNav from "./SocialNav";

const startYear = 2021;
const ownerName = "Nathan Snow";
const notice = "All Rights Reserved";
const currentYear = new Date().getFullYear();
const copyrightNotice = currentYear > startYear?    
        `${ownerName} ${startYear} - ${currentYear} | ${notice}`:
        `${ownerName} ${currentYear} | ${notice}`;

const SiteFooter = () => {
     return (
       <footer>
         <div className="row center">
           <div className="col-md-4 col-6 p-3">
             <BottomNav />
           </div>
           <div className="col-md-4 col-12 p-3">&copy; {copyrightNotice}</div>
           <div className="col-md-4 col-6 p-3">
             <SocialNav />
           </div>
         </div>
       </footer>
     );
};

export default SiteFooter;