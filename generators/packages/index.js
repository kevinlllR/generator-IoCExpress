var Generator = require("yeoman-generator");

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.inputName = this.config.get('name');
        this.log('NAME=', this.config.get('name'))
        // this.argument('name', {type: Object, required: true});
        // this.log(this.options)
    }
    install() {
        const pkgJson = {
            name: `${this.inputName}`,
            description: '',
            "description": "Generator Express + Typescript + Webpack + Jest + IoC ",
            "main": "index.js",
            "repository": "https://github.com/kevinlllR/generator-IoCExpress",
            "private": false,
            "license":"MIT",
            "scripts":
            {
                "start": "per-env",
                "start:dev": "NODE_ENV=development npm run start:development",
                "start:prod": "NODE_ENV=production npm run start:production",
                "start:development": " npm run clean && npm run build:dev && nodemon --exitcrash dist/server.js",
                "start:production": " npm run clean && npm run build:prod && node dist/server.js",
                "build": "webpack",
                "build:dev": " npm run gulp",
                "build:prod": "webpack --env.mode=production && npm run gulp",
                "prebuild": "npm run clean",
                "commit": "git cz",
                "clean": "rimraf dist",
                "gulp": "gulp env",
                "lint": "eslint src/**/*.ts  test/**/*.ts",
                "webpack": "webpack",
                "watch": "webpack --watch",
                "release": "standard-version",
                "release:init": "conventional-changelog -p angular -i CHANGELOG20.md -s -r 0",
                "test": "NODE_ENV=test gulp env && jest test/**/*.ts",
                "coverage": "jest --coverage",
                "test:debug": "node --inspect jest --runInBand test/**/.ts",
            },
            "config": {
                "commitizen": {
                    "path": "git cz"
                }
            },
            "dependencies": {
                "awilix": "4.2.3",
                "bcrypt": "^3.0.7",
                "body-parser": "^1.19.0",
                "compression": "^1.7.4",
                "cookie-parser": "^1.4.4",
                "dotenv": "^8.2.0",
                "dotenv-webpack": "^1.7.0",
                "express": "^4.17.1",
                "express-swagger-generator": "^1.1.15",
                "express-validation": "1.0.3",
                "express-wrapper": "^2.1.0",
                "joi": "^14.3.1",
                "jwt-simple": "^0.5.6",
                "method-override": "^3.0.0",
                "moment": "^2.24.0",
                "mongoose": "^5.7.13",
                "morgan": "^1.9.1",
                "multer": "^1.4.2",
                "cors": "^2.8.5",
                "per-env": "^1.0.2",
                "sequelize": "^5.21.2",
                "sqlite3": "^4.1.1",
            },
            "engines": {
                "node": ">=12.13"
            },

            devDependencies: {
                "@types/debug": "^4.1.5",
                "@types/express": "^4.17.2",
                "@types/jest": "^24.0.23",
                "@types/node": "^12.12.14",
                "@typescript-eslint/eslint-plugin": "^2.10.0",
                "@typescript-eslint/parser": "^2.10.0",
                "eslint-config-google": "^0.14.0",
                "eslint": "^6.7.2",
                "commitizen": "^4.0.3",
                "commitlint": "^8.2.0",
                "cz-conventional-changelog": "^3.0.2",
                "express-swagger-generator": "^1.1.15",
                "git-cz": "^3.3.0",
                "gulp": "^4.0.2",
                "gulp-rename": "^2.0.0",
                "html-webpack-plugin": "^3.2.0",
                "husky": "^3.1.0",
                "jest": "^24.9.0",
                "nodemon": "^2.0.1",
                "raw-loader": "^4.0.0",
                "rimraf": "^3.0.0",
                "script-ext-html-webpack-plugin": "^2.1.4",
                "standard-version": "^7.0.1",
                "supertest": "^4.0.2",
                "swagger-ui-express": "^4.1.2",
                "ts-jest": "^24.2.0",
                "ts-loader": "^6.2.1",
                "ts-node": "8.5.4",
                "tslint": "^5.20.1",
                "typescript": "^3.7.3",
                "webpack": "^4.41.2",
                "webpack-cli": "^3.3.10",
                "webpack-merge": "^4.2.2",
                "webpack-node-externals": "^1.7.2"
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath(`package.json`), pkgJson);
        // this.log("initializando lodash");
        this.yarnInstall();
    }
};
