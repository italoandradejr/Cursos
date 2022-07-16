import Express from "express";
import LivroController from "../controllers/livrosController.js";

const router = Express.Router()

router
    .get("/livros", LivroController.listarLivros)

export default router