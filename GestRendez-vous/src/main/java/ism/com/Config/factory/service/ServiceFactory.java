package ism.com.Config.factory.service;

import ism.com.Config.factory.repository.EntityName;
import ism.com.Config.factory.repository.RepositoryFactory;
import ism.com.repositories.DemandeRepository;
import ism.com.repositories.PatientRepository;
import ism.com.repositories.Rendez_vousRepository;
import ism.com.repositories.SecretaireRepository;
import ism.com.services.impl.DemandeServiceImpl;
import ism.com.services.impl.PatientServiceImpl;
import ism.com.services.impl.Rendez_vousServiceImpl;
import ism.com.services.impl.SecretaireServiceImpl;

public final class ServiceFactory {

  private ServiceFactory() {}

  public static <T> T getInstance(EntityName entityName, Class<T> type) {
    Object service;

    switch (entityName) {
      case Demande:
        service = DemandeServiceImpl.getInstance(
          RepositoryFactory.getInstance(EntityName.Demande, DemandeRepository.class)
        );
        break;

      case Patient:
        service = PatientServiceImpl.getInstance(
          RepositoryFactory.getInstance(EntityName.Patient, PatientRepository.class)
        );
        break;

      case Secretaire:
        service = SecretaireServiceImpl.getInstance(
          RepositoryFactory.getInstance(EntityName.Secretaire, SecretaireRepository.class)
        );
        break;

      case rendez_vous:
        service = Rendez_vousServiceImpl.getInstance(
          RepositoryFactory.getInstance(EntityName.rendez_vous, Rendez_vousRepository.class)
        );
        break;

      default:
        throw new IllegalArgumentException("Service non supporté");
    }
    return type.cast(service);
  }
}
