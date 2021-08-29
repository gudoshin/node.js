import express from 'express';
const app = express();
const router = express.Router();
import user from './resources/users/user.router'

app.use('/api/v1/', router);
router.get('/', (req, res) => {
	res.send('hello');
});
router.use('/user', user);

export default app;