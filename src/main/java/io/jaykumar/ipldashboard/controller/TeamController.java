package io.jaykumar.ipldashboard.controller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.jaykumar.ipldashboard.model.Team;
import io.jaykumar.ipldashboard.repository.MatchRepository;
import io.jaykumar.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    


    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }




    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        
      Team team =  this.teamRepository.findByTeamName(teamName);
  
      team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));

      return team;
    }
    
}
