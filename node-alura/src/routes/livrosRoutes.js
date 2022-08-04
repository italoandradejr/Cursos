import Express from "express";
import LivroController from "../controllers/livrosController.js";

const router = Express.Router()

router
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)

export default router