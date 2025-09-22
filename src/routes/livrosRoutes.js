import express from "express";
import {
  createLivro,
  getAllLivros,
  getLivroById,
  updateLivro,
  deleteLivro,
} from "./../controllers/livrosControllers.js";

const router = express.Router();

// Rotas
router.post("/", createLivro);
router.get("/", getAllLivros);
router.get("/:id", getLivroById);
router.put("/:id", updateLivro);
router.delete("/:id", deleteLivro);

export default router;
