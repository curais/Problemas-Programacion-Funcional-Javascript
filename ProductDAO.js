let fs = require('fs');
module.exports = class ProductDAO {
    /**
     * 
     * @param {String} fileName name of the .json file
     */
    constructor(fileName) {
        this.fileName = fileName;
        let jsonsito = fs.readFileSync(fileName, 'utf8');
        this.data = JSON.parse(jsonsito);
    }
    getProductsWith(tag, ...param){
        switch (tag){
            case 'Existence More Than':
                return this.getProductsWithExistenceMoreThan(param[0]);
            case 'Existence Less Than':
                return this.getProductsWithExistenceLessThan(param[0]);
            case 'Same Classification And Price Greater Than':
                return this.getProductsWithSameClassificationAndPriceGreaterThan(param[0],param[1]);
            case 'Price Between':
                return this.getProductsWithPriceBetween(param[0],param[1]);
            case 'Same Classification':
                return this.getProductsSameClassification(param[0]);
        }
    }
    getProductsWithExistenceMoreThan(n){
        return this.data.filter((product) => product.stock > n);
    }

    getProductsWithExistenceLessThan(n){
        return this.data.filter((product) => product.stock < n);
    }

    getProductsWithSameClassificationAndPriceGreaterThan(clasification,price){
        return this.data.filter((product) => product.category === clasification && product.price > price);
    }

    getProductsWithPriceBetween(n1,n2){
        return this.data.filter((product) => (product.price > n1) && (product.price < n2));
    }

    getProductsSameClassification(clasification){
        return this.data.filter((product) => product.category === clasification);
    }
}