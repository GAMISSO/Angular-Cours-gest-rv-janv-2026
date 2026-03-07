package ism.com.Config.factory.database;

import ism.com.Config.database.Database;
import ism.com.Config.database.DatabaseImpl;

public final class DatabaseFactory {
  private static final SGBDName sgbdName = SGBDName.POSTGRESQL;

  private DatabaseFactory() {
  }

  public static Database getInstance() {
    return DatabaseImpl.getInstance(EntityManager.persistanceUnit(sgbdName));
  }
}
