import express from 'express';
import {getAll, getUser ,addUser, updateUser, deleteUser} from './user.services';
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const result = await getUser(req.params.id);
        res.json(result??{});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async(req, res) => {
    try {
         const result = await addUser(req.body);
         res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const result = await updateUser(req.params.id, req.body);
        if (result === null) return res.sendStatus(404);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const result = await deleteUser(req.params.id);
        if (result) return res.sendStatus(200);
        res.sendStatus(404);       
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;