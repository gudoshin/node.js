import express from 'express';
import user from './resources/user/user.router';
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api/v1/', router);
router.get('/', (req, res) => {
	res.send('hello');
});
router.use('/user', user);

export default app;