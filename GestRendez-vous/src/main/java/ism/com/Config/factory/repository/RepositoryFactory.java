package ism.com.Config.factory.repository;

import ism.com.Config.factory.database.DatabaseFactory;
import ism.com.repositories.Impl.DemandeRepositoryImpl;
import ism.com.repositories.Impl.PatientRepositoryImpl;
import ism.com.repositories.Impl.Rendez_vousRepositoryImpl;
import ism.com.repositories.Impl.SecretaireRepositoryImpl;
import ism.com.repositories.Impl.list.SecretaireRepositoryImpl;

public final class RepositoryFactory {
  private static final PersistenceName persitanceName = PersistenceName.Database;

  private RepositoryFactory() {}

  public static <T> T getInstance(EntityName entityName, Class<T> type) {

    Object repo;

    switch (persitanceName) {
      case Database:
        repo = getRepositoryDatabase(entityName);
        break;
      default:
        throw new IllegalStateException("Persistence non supportée");
    }

    if (repo == null) {
      throw new IllegalStateException(
        "Repository non trouvé pour " + entityName
      );
    }

    return type.cast(repo);
  }

  private static Object getRepositoryDatabase(EntityName entityName) {
    switch (entityName) {
      case Demande:
        return DemandeRepositoryImpl.getInstance(DatabaseFactory.getInstance());
      case Patient:
        return PatientRepositoryImpl.getInstance(DatabaseFactory.getInstance());
      case Secretaire:
        return SecretaireRepositoryImpl.getInstance(DatabaseFactory.getInstance());
      case rendez_vous:
        return Rendez_vousRepositoryImpl.getInstance(DatabaseFactory.getInstance())
      default:
        throw new IllegalArgumentException("Entity non supportée");
    }
  }

}
