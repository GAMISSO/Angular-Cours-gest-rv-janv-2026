package ism.com.repositories.Impl;

import ism.com.entities.Demande;
import ism.com.entities.Patient;
import ism.com.entities.StatutDemande;
import ism.com.repositories.DemandeRepository;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.lang.Class.forName;

public class DemandeRepositoryImpl implements DemandeRepository {
    @Override
    public List<Demande> selectAll() {
        /*
            1-chargement des classe du driver en Memoire ==> Class.forName(driver)
            2-connexion a la bd ==> DriverManager ==> getConnexion(url,user,password) --> interface connection ===> CreatePreparedStatement()--> preparedStatement
            deux methode d'exution
                executeQuery():resultSet
                executeUpdate():int
                setString()
                setInt()
                setDate() de type java en type de bd

                interface ResultSet ==>{
                    next()
                    getString() de type de bd en type java
                    getInt()
                }

                3-Executer la requete SQL:
                a-Mapping Objet Relationnel
                    BD(ligne de table ou tuple) -->Java(objet)
                    table--> classe
                    ligne de table --> Objet
                b-Requeteq prepareees ==>
                c-convertion
                    Types de Base de donnees ==> Type Java
                d-récupération des résultat
                    un Objet
                    List Objet
         */
        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("SELECT d.*,p.* FROM `demande` d, patient p WHERE d.patient_id=p.id");
            //convertion des types Java ==> Types e Bases donées
            ResultSet rs=ps.executeQuery();
            List<Demande> demandes=new ArrayList<>();
            while(rs.next()){
                //convertion des types e Bases donées  ==> Types Java
                //ligne de table rs  =====> Objet Catégorie
                Demande demande=new Demande();
                demande.setId(rs.getInt("d.id"));
                demande.setNumeDemande(rs.getString("d.num_demande"));
                demande.setDate(rs.getDate("d.date").toLocalDate());
                demande.setStatut(StatutDemande.valueOf(rs.getString("d.statut_demande")));
                Patient patient=new Patient();
                patient.setId(rs.getInt("p.patient_id"));
                patient.setName(rs.getString("p.nom"));
                patient.setTel(rs.getInt("p.tel"));
                demande.setPatient(patient);
                demandes.add(demande);
            }
            return demandes;
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }

        return Collections.emptyList();
    }

    @Override
    public Optional<Demande> selectById(int id) {

        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("select * from demande where id=?");
            ps.setInt(1,id);
            //convertion des types Java ==> Types e Bases donées
            ResultSet rs=ps.executeQuery();
            List<Demande> demandes=new ArrayList<>();
            Demande demande=new Demande();
            if(rs.next()){
                //convertion des types e Bases donées  ==> Types Java
                //ligne de table rs  =====> Objet Catégorie
                demande.setId(rs.getInt("id"));
                demande.setNumeDemande(rs.getString("num_demande"));
                demande.setDate(rs.getDate("date").toLocalDate());
                demande.setStatut(StatutDemande.valueOf(rs.getString("statut_demande")));
            }
            return Optional.of(demande);
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }

        return Optional.empty();
    }


    @Override
    public int insert(Demande demande) {


        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("INSERT INTO `demande` ( `num_demande`, `date`, `statut_demande`, `patient_id`) VALUES (?, ?, ?, ?, ?);");
            //convertion des types Java ==> Types e Bases donées
            ps.setString(1,demande.getNumeDemande());
            ps.setDate(2, Date.valueOf(demande.getDate()));
            ps.setString(3, String.valueOf(demande.getStatut()));
            ps.setInt(4, demande.getPatient().getId());
            int rowsAffected=ps.executeUpdate();
            return rowsAffected;
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }


        return 0;
    }


}
