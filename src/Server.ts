import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as http from 'http';

class Server {
  private app: express.Application;
  private http: any;
  private router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
  }

  // constructor() {
  //   this.express = express();
  // }

  public start(): void {
    
    this.router.get('/', (req, res) => {
      res.json({
        message: 'Hello World !'
      })
    })

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    // require('./routes_public/')(this.router);
    // require('./src/routes_private')(router, require('./src/middleware/tokenValidator'));

    this.app.use(this.router);


    this.http = http.createServer(this.app);
    this.http.listen(8035, () => {
      console.log("Listening on 8035...");
    });
  }
}

new Server().start();