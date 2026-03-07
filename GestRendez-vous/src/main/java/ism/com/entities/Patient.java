package ism.com.entities;

import lombok.*;

import java.util.ArrayList;
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Patient {
    private int id;
    private String name;
    private int tel;
    private ArrayList<Demande> demandes = new ArrayList<>();






}
