const dbMongoSettings = {
    db: process.env.MONGO_DATABASE || 'XXXXX',
    user: process.env.MONGO_DB_USER || 'XXXXX',
    pass: process.env.MONGO_DB_PASSWORD || 'XXXXX',
    url:process.env.MONGO_URL,
    repl: process.env.DB_REPLS || 'XX'
  }

  const serverSettings = {
    domain:process.env.HTTP_DOMAIN||'45.55.72.189',
    port: process.env.PORT || 3000,
  }
  const microservicesSettings = {
    email:{
      url:process.env.MICROSERVICE_EMAIL_URL||'XXXXXXX',
      secret_key: process.env.MICROSERVICE_EMAIL_SECRET_KEY||'XXXXXX',
    }
  }
  const dbSequelizeSettings={
      database: process.env.SQLITE_DATABASE,
      username: process.env.SQLITE_USERNAME,
      password: process.env.SQLITE_PASSWORD,
      options: {
          host: process.env.SQLITE_HOST,
          dialect: process.env.SQLITE_DIALECT,
          storage: process.env.SQLITE_STORAGE
      }
  }
export {serverSettings,dbMongoSettings,dbSequelizeSettings,microservicesSettings}
