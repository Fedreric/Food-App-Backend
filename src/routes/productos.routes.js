import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
const router = Router();

// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de la solicitud get a mi backend');
// });

router.route("/productos").get(obtenerProductos).post(crearProducto);
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarProducto)
  .get(obtenerProducto);
export default router;
