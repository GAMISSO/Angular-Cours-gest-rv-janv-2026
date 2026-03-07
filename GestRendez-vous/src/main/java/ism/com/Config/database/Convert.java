package ism.com.Config.database;

import java.sql.ResultSet;
import java.sql.SQLException;

public interface Convert<T> {
  T toEntity(ResultSet rs) throws SQLException;
}
