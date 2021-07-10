import {React} from 'react';
import {Link} from 'react-router-dom';

import './TeamTile.scss';
import Kings from '../pages/logo/Kings XI Punjab.png';
import Chennai from '../pages/logo/Chennai Super Kings.png';
import Mumbai from '../pages/logo/Mumbai Indians.png';
import Rajasthan from '../pages/logo/Rajasthan Royals.png';
import Royal from '../pages/logo/Royal Challengers Bangalore.png';
import Sunrisers from '../pages/logo/Sunrisers Hyderabad.png';
import Delhi from '../pages/logo/Delhi Capitals.png';
import Gujarat from '../pages/logo/Gujarat Lions.png';
import Kolkata from '../pages/logo/Kolkata Knight Riders.png';
import Deccan from '../pages/logo/Deccan Chargers.png';
import Kochi from '../pages/logo/Kochi tuskers kerala.png';
import Pune from '../pages/logo/Pune Warriors.png';
import Rising from '../pages/logo/Rising Pune supergiants.png';


 


export const TeamTile=({teamName})=>{


    let logo;
  
    const teamLogo =()=>{
     if (teamName == "Kings XI Punjab") { logo = Kings };
     if (teamName == "Chennai Super Kings") { logo = Chennai };
     if (teamName == "Mumbai Indians") { logo = Mumbai };
     if (teamName == "Rajasthan Royals") { logo = Rajasthan };
     if (teamName == "Royal Challengers Bangalore") { logo = Royal };
     if (teamName == "Sunrisers Hyderabad") { logo = Sunrisers };
     if (teamName == "Delhi Capitals") { logo = Delhi };
     if (teamName == "Gujarat Lions") { logo = Gujarat };
     if (teamName == "Kolkata Knight Riders") { logo = Kolkata };
     if (teamName == "Deccan Chargers") { logo = Deccan };   
     if (teamName == "Kochi Tuskers Kerala") { logo = Kochi };   
     if (teamName == "Rising Pune Supergiants") { logo = Rising };   
     if (teamName == "Pune Warriors") { logo = Pune }; 
    
  
    }
  
    teamLogo();

    return (
        <Link to={`/teams/${teamName}`}>
        <div className="TeamTile">
            <img className="image" src={logo} alt="ipl-team-logo" width="200px" height="200px" ></img>
            <h1 className="name">{teamName}</h1>
        </div>
        </Link>
    )

}