/*
        1) Número de productos con existencia mayor a 20.
        2) Número de productos con existencia menos a 15.
        3) Lista de productos con la misma clasificación y precio mayor 15.50
        4) Lista de productos con precio mayor a 20.30 y menor a 45.00
        5) Número de productos agrupados por su clasificación
    */

const ProductDAO = require('./productDAO.js');

let productDAO = new ProductDAO('./data.json');
console.log(`1) Numero de productos con existencia mayor a 20: ${productDAO.getProductsWith('Existence More Than',20).length}`);
console.log(`2) Numero de productos con existencia menor a 15: ${productDAO.getProductsWith('Existence Less Than',15).length}`);
console.log(`3) Lista de productos con la misma clasificacion y precio mayor a 15.50: `);
    console.log(productDAO.getProductsWith('Same Classification And Price Greater Than','dairy',15.50));
console.log(`4) Lista de productos con precio mayor a 20.30 y menor a 45.00:`);
    console.log(productDAO.getProductsWith('Price Between',20.30,45.00));
console.log(`5) Numero de productos agrupados por su clasificación: ${productDAO.getProductsWith('Same Classification','fruit').length}`);