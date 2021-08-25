'use strict';

'use strict';

const tourismModel = (sequelize, DataTypes) => sequelize.define('Tourism', {
  trip: { type: DataTypes.STRING, required: true },
  date: { type: DataTypes.STRING, required: true },
  transportation: { type: DataTypes.STRING, required: true }
});

module.exports = tourismModel;