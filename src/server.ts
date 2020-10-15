import express from './services/express';
import api from './api';
import config from './config';

const { port } = config;

const app = express(api);

app.listen(port);
