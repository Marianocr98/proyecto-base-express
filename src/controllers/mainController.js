// Acá nos falta nuestra fuente de datos

// Acá nos falta un objeto literal con las acciones para cada ruta
const controllerIndex = {
    home: (req, res) => {
        res.render('index', {menu: menu});
    },
    detalle: (req, res) => {
        let detalle = menu.find( element => element.id == req.params.id);
        res.render('detalleMenu', { plate: detalle});
    }
}

const menu = [
    {
        id: 1,
        title: 'Carpaccio fresco',
        image: '/img/Carpaccio-de-salmon.jpg',
        description: '',
        price: 65.50
    },
    {
        id: 2,
        title: 'Risotto de berenjena',
        image: '/img/Risotto-berenjena-queso-cabra.jpg',
        description: 'Risotto de berenjena y queso de cabra',
        price: 47.00
    },
    {
        id: 3,
        title: 'Mousse de arroz',
        image: '/img/Mousse-de-arroz-con-leche.jpg',
        description: 'Mousse de arroz con leche y aroma de azahar',
        price: 27.50
    },
    {
        id: 4,
        title: 'Espárragos blancos',
        image: '/img/esparragos.png',
        description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        price: 37.50
    }
]


// Acá exportamos el resultado
module.exports = controllerIndex;

