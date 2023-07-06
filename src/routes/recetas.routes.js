import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  obtenerReceta,
  obtenerRecetas,
} from "../controllers/recetas.controllers";
import validarReceta from "../helpers/validarRecetas";
const router = Router();

router
  .route("/recetas")
  .get(obtenerRecetas)
  .post(crearReceta);
router
  .route("/recetas/:id")
  .delete(borrarReceta)
  .put(editarReceta)
  .get(obtenerReceta);
export default router;
