package ism.com.repositories.Impl;

import ism.com.entities.Patient;
import ism.com.repositories.PatientRepository;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class PatientRepositoryImpl implements PatientRepository {
    @Override
    public List<Patient> selectAll() {
        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("select * from patient");
            //convertion des types Java ==> Types e Bases donées
            ResultSet rs=ps.executeQuery();
            List<Patient> patients=new ArrayList<>();
            while(rs.next()){
                //convertion des types e Bases donées  ==> Types Java
                //ligne de table rs  =====> Objet Catégorie
                Patient patient=new Patient();
                patient.setId(rs.getInt("id"));
                patient.setName(rs.getString("nom"));
                patient.setTel(rs.getInt("tel"));

                patients.add(patient);
            }
            return patients;
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }

        return Collections.emptyList();
    }

    @Override
    public Optional<Patient> selectById(int id) {

        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("select * from patient where id=?");
            ps.setInt(1,id);
            //convertion des types Java ==> Types e Bases donées
            ResultSet rs=ps.executeQuery();
            List<Patient> patients=new ArrayList<>();
            Patient patient=new Patient();
            if(rs.next()){
                //convertion des types e Bases donées  ==> Types Java
                //ligne de table rs  =====> Objet Catégorie
                patient.setId(rs.getInt("id"));
                patient.setName(rs.getString("nom"));
                patient.setTel(rs.getInt("tel"));

            }
            return Optional.of(patient);
        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }

        return Optional.empty();
    }

    @Override
    public int insert(Patient patient) {


        try{
            Class.forName("com.mysql.cj.Driver");
            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/ism_glrs_java","root","");
            PreparedStatement ps=conn.prepareStatement("INSERT INTO `patient` ( `nom`, `tel`) VALUES (?,?);");
            //convertion des types Java ==> Types e Bases donées
            ps.setString(1,patient.getName());
            ps.setInt(2,patient.getTel());
            int rowsAffected=ps.executeUpdate();

        }catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }


        return 0;
    }
}
