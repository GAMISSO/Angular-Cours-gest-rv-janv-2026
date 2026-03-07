package ism.com.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Demande {
    private int id;
    private String numeDemande;
    private LocalDate date;
    private StatutDemande statut;
    private Patient patient;

    public Demande(int id, String numeDemande, LocalDate date) {
        this.id = id;
        this.numeDemande = numeDemande;
        this.date = date;
    }
}
