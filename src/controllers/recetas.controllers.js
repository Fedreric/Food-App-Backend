import { validationResult } from "express-validator";
import Receta from "../models/receta";

//Read de recetas
export const obtenerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar las recetas",
    });
  }
};

//create recetas

export const crearReceta = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta fue creada conrrectamente!",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear receta",
    });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    //obtener el id y luego borrar
    await Receta.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Receta eliminada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al eliminar la receta",
    });
  }
};

export const editarReceta = async (req, res) => {
  try {
    // Extraer el id del request y el body
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Receta editada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo editar la receta",
    });
  }
};

export const obtenerReceta = async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    res.status(200).json(receta);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "no se pudo obtener la receta",
    });
  }
};
