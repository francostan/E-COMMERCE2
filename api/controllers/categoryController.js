const {Products} = require('../models/index');
const {Op} = require('sequelize');

const getByMarca = (req, res, next) => {
    console.log(req.params.marca);

    Products.findAll({
        where: {
        marca: req.params.marca,
        }
    })
        .then((producto) => {
        if (!producto) return next('No se encontro el producto deseado');
        res.send(producto).status(200);
        })
        .catch(next);
};

const getByPrecio = (req, res, next) => {

    Products.findAll({
        //usamos op para hacer la comparacion con el precio maximo
        where: {
        precio: {
            [Op.lte]: req.params.precio,
        }
        }
    })
        .then((producto) => {
        if (!producto) return next('No se encontro el producto deseado');
        res.send(producto).status(200);
        })
        .catch(next);
};

module.exports = {
    getByMarca,
    getByPrecio,
};
