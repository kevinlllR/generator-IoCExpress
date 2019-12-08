import * as db from './db';
import * as settings from './settings'
import { initDI } from './di';
import * as models from '../models';

import * as controllers from '../controllers';
import * as validations from '../validations';


const init = initDI.bind(null, { settings, db, models, controllers ,validations})();
export { init }