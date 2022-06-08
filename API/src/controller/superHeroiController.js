
import { Router } from "express";
import { inserirHeroi, ListarHerois } from "../repository/superHeroiRepository.js";
const endpoints = Router();

endpoints.get('/superHeroi', async (req, resp) => {
    try {
        const r = await ListarHerois();
        resp.send(r);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/superHeroi', async (req, resp) => {
    try {
        const heroi = req.body;
        const r = await inserirHeroi(heroi);
        resp.send(r);

    } catch (err) {
       resp.status(400).send({
           erro: err.message
       }) 
    }
})

export default endpoints;