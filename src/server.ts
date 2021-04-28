import { Express } from './services/express';
import { config } from './config';
import api from './api';

const app = Express(api);
app.listen(config.port);
