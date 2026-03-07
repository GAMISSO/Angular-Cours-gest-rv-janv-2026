package ism.com;

import ism.com.repositories.DemandeRepository;
import ism.com.repositories.Impl.DemandeRepositoryImpl;
import ism.com.repositories.Impl.PatientRepositoryImpl;
import ism.com.repositories.PatientRepository;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Factory
        DemandeRepository demandeRepository = new DemandeRepositoryImpl();
        PatientRepository patientRepository = new PatientRepositoryImpl();

        Scanner sc = new Scanner(System.in);
        int choice;

        do {

        }while (true);
    }
}
