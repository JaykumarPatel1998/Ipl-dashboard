import { React, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';

import Kings from './logo/Kings XI Punjab.png';
import Chennai from './logo/Chennai Super Kings.png';
import Mumbai from './logo/Mumbai Indians.png';
import Rajasthan from './logo/Rajasthan Royals.png';
import Royal from './logo/Royal Challengers Bangalore.png';
import Sunrisers from './logo/Sunrisers Hyderabad.png';
import Delhi from './logo/Delhi Capitals.png';
import Gujarat from './logo/Gujarat Lions.png';
import Kolkata from './logo/Kolkata Knight Riders.png';
import Deccan from './logo/Deccan Chargers.png';
import Kochi from './logo/Kochi tuskers kerala.png';
import Pune from './logo/Pune Warriors.png';
import Rising from './logo/Rising Pune supergiants.png';
import ipl from './logo/ipl.png'



import './TeamPage.scss';




export const TeamPage = () => {


  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();





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
   if(teamName == null){logo = ipl}  ;

  }

  teamLogo();
 









  useEffect(
    () => {
      const fetchTeam = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();


        setTeam(data);
      };

      fetchTeam();

    }, [teamName]



  );

  if (!team || !team.teamName) {
    return <h1>Team not Found!!</h1>
  }



  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <Link to={"/"}>
        <img src={logo} alt="ipl-team-logo" width="300px" height="300px" ></img>
        </Link>
        <h1 className="team-name">{team.teamName}</h1>
      </div>


      <div className="win-loss-section">
        win/loss Ratio
      
        <PieChart
          data={[
            {
              color: "#a34d54",
              title: "Losses",
              value: team.totalMatches - team.totalWins,
            },
            {
              color: "#4da375",
              title: "Wins",
              value: team.totalWins,
            },
          ]}
        
        />

      </div>


      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}

      <div className="more-link">
      <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`} > More⇒ </Link>
     
      </div>
    </div>
  );
}


