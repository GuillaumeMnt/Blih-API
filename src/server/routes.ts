import * as express from 'express';

const app = express();
const router = express.Router();

router.post('/repos/:repoName', (req, res) => {
    res.send(`Creer un repo ${req.params.repoName}`);
})

router.get('/repos', (req, res) => {
    res.send('Tous les repositories');
})

router.get('/repos/:repoName/acl', (req, res) => {
    res.send(`tous les acl de ${req.params.repoName}`);
})

router.put('/repos/:repoName/acl', (req, res) => {
    res.send(`set les acl de ${req.params.repoName}`);
})

router.delete('/repos/:repoName', (req, res) => {
    res.send(`set les acl de ${req.params.repoName}`);
})

export { router };