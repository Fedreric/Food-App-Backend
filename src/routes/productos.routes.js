import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
const router = Router();

// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de la solicitud get a mi backend');
// });

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check('nombreProducto')
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength( {min: 2, max: 40} )
        .withMessage('El nombre del producto debe tener entre 2 y 40 caracteres'),
      check('precio')
        .notEmpty()
        .withMessage("El precio del producto es obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((precio)=>{
          if(precio >= 10 && precio <= 20000){
            return true;
          }else{
            throw new Error('El precio debe estar entre 10 y 20000');
          }
        }),
      check('imagen')
        .notEmpty()
        .withMessage("La imagen del producto es obligatoria")
        .matches(/^(https?:\/\/.*\.(?:jpg|png|jpeg|webp))$/)
        .withMessage('URL incorrecta, la imagen debe ser jpg, png, jpeg o webp'),
      check('categoria')
      .notEmpty()
      .withMessage("La categoria del producto es obligatoria")
      .isIn(['salado','dulce','bebida caliente','bebida fria'])
      .withMessage("Error en la categoria, opciones: salado, dulce, bebida caliente, bebida fria"),
      check('descripcion')
        .notEmpty()
        .withMessage("La descripcion del producto es obligatoria")
        .isLength( {min: 8, max: 400} )
        .withMessage('El nombre del producto debe tener entre 2 y 40 caracteres')
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(editarProducto)
  .get(obtenerProducto);
export default router;
