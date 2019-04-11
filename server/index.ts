import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as Loadable from 'react-loadable';
import renderer from './renderer';

const PORT = process.env.PORT || 3000;
const server = express();

server.use(compression());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());
server.use(morgan('dev'));

server.use(express.Router().get('/', renderer));
server.use(express.static('build'));
server.use(renderer);

Loadable.preloadAll().then(() => {
    server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

