import { Schema, model } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        minLength: 2,
        maxLength:45,
        matchMedia:/^[A-ZÁ-Ü][A-Za-zá-üÁ-Ü\s]{1,44}$/,
        unique: true,
        required: true
    },
    destacado:{
        type:String,
        minLength:2,
        maxLength:2,
        required:true
    },
    imagen:{
        type: String,
        matchMedia:/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg|jpeg|webp)$/,
        required:true
    },
    ingredientes:{
        type: String,
        minLength:5,
        maxLength:1000,
        matchMedia:/[A-ZÁ-Ü][a-z0-9:,.()á-üÁ-Ü\s]{4,999}$/,
        required:true
    },
    pasos: {
        type: String,
        minLength: 5,
        maxLength:3000,
        required: true
    }
})

const Receta = model('receta', recetaSchema)

export default Receta;