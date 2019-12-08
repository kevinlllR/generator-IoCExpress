import * as Sequelize from 'sequelize';
export function dbSequelize(opts) {
    var dbSequelizeSettings=opts.dbSequelizeSettings;
      // Database name
            var name = 'main';
    
        // Sequelize types
            var DataTypes = Sequelize;
        // Create database
            var db = new Sequelize.Sequelize(
                dbSequelizeSettings.database,
                dbSequelizeSettings.username,
                dbSequelizeSettings.password,
                dbSequelizeSettings.options
            );
            
        // Models
            
            var SuccessResponseLog = db.define('SuccessResponseLog', {
                PersonId: DataTypes.INTEGER,
                method: DataTypes.STRING,
                url: DataTypes.STRING,
                duration: DataTypes.INTEGER
            });
            
            var ClientErrorLog = db.define('ClientErrorLog', {
                PersonId: DataTypes.INTEGER,
                method: DataTypes.STRING,
                url: DataTypes.STRING,
                duration: DataTypes.INTEGER,
                code: DataTypes.INTEGER
            });
            
            var ServerErrorLog = db.define('ServerErrorLog', {
                PersonId: DataTypes.INTEGER,
                method: DataTypes.STRING,
                url: DataTypes.STRING,
                duration: DataTypes.INTEGER,
                code: DataTypes.INTEGER
            });                         
                     
        // Sync database
            db.sync({force: false});
        // Export database
        return db;
    
    } 