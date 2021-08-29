import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.send('hello user');
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;