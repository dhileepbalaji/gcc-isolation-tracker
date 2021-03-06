/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  const PersonIsolation = sequelize.define('person_isolation', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_present_at_home: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_family_members_at_home: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    basic_necessities: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_self_or_family_with_symptoms: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    additional_comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_check_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location_lat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    location_long: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    is_offline_enquiry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    tableName: 'person_isolation_details',
    timestamps: true
  });

  PersonIsolation.associate = (db) => {
    PersonIsolation.belongsTo(db.person, { as: '_person', foreignKey: 'person' });
    PersonIsolation.belongsTo(db.user, { as: '_created_by', foreignKey: 'created_by' });
    PersonIsolation.belongsTo(db.user, { as: '_updated_by', foreignKey: 'updated_by' });
  };

  return PersonIsolation;
};