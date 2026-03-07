package ism.com.repositories;

import ism.com.entities.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientRepository {

    List<Patient> selectAll();
    Optional<Patient> selectById(int id);
    int insert(Patient patient);

}
