import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import ipl from './logo/ipl.png'



import './TeamPage.scss';




export const TeamPage = () => {


  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();
 
  

  
  


  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        

        setTeam(data);
      };

      fetchMatches();

    }, [teamName]



  );

  if (!team || !team.teamName) {
    return <h1>Team not Found!!</h1>
  }

  // let temp = String(teamName)
  // let logo;
  // const logoArray = [Kings,Chennai,Mumbai,Rajasthan,Royal,Sunrisers,Delhi,Gujarat,Kolkata,Deccan]
  
  // logoArray.forEach((item)=>{
  //   const temp2 = String(item.toString())
  //   if(temp.includes(temp2)){
  //       logo = item;
  //   }
  //   console.log(logo)

  // })


  return (
   <div className="TeamPage">
      <div className="team-name-section">
      <img src={ipl} alt="ipl-team-logo" width="500px" height="300px" ></img>
     
        <h1 className="team-name">{team.teamName}</h1>
      </div>


      <div className="win-loss-section">
        win/loss Ratio
        <PieChart
          data={[
            { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d54' },
            { title: 'Wins', value: team.totalWins, color: '#4da375' },
            
          ]}
        />

      </div>


      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}

      <div className="more-link">
        <a href="#"> More⇒</a>
      </div>
    </div>
  );
}


