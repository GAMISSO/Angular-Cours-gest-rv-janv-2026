package ism.com.repositories;

import ism.com.entities.Demande;

import java.util.List;
import java.util.Optional;

public interface DemandeRepository {
    List<Demande> selectAll();
    Optional<Demande> selectById(int id);
    int insert(Demande demande);
}
