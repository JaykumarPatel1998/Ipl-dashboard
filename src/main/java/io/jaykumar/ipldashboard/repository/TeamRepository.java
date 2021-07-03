package io.jaykumar.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.jaykumar.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> 
{
    Team findByTeamName(String teamName);
}
