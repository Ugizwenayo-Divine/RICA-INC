const userDefinition = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {}
  );

  return User;
};

export default userDefinition;
