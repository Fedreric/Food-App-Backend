import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarRecetas = () =>{
    [
        check('nombreReceta')
          .notEmpty()
          .withMessage("El nombre de la receta es obligatorio")
          .isLength( {min: 2, max: 45} )
          .withMessage('El nombre de la receta debe tener entre 2 y 45 caracteres'),
        check('destacado')
          .notEmpty()
          .withMessage("El valor destacado es obligatorio"),
        check('imagen')
          .notEmpty()
          .withMessage("La imagen de la receta es obligatoria")
          .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg|jpeg|webp)$/)
          .withMessage('URL incorrecta, la imagen debe ser jpg, png, svg, jpeg o webp'),
        check('ingredientes')
          .notEmpty()
          .withMessage("Los ingredientes son obligatorios")
          .isLength( {min: 5, max: 1000} )
          .withMessage('El nombre de la receta debe tener entre 2 y 45 caracteres')
          .matches(/[A-ZÁ-Ü][a-z0-9:,.()á-üÁ-Ü\s]{4,999}$/)
          .withMessage('Los ingredientes de la receta deben comenzar con la primera letra mayúscula además solo pueden contener letras, numeros y signos de puntuación (",",".",":") y parentesis de ser necesario'),
        check('pasos')
          .notEmpty()
          .withMessage("Los pasos de la receta son obligatorios")
          .isLength( {min: 5, max: 3000} )
          .withMessage('Los pasos deben contener entre 5 y 3000 caracteres'),
          // al final de las validacion invoco a resultadoValidacion
          (req, res, next) => { resultadoValidacion(req, res, next) }
    ]
}

export default validarRecetas;