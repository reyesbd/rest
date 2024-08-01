
const LibrosModel = require('../models/libros');

class LibrosController {
    static async indexGet(req, resp) {
        let data = await LibrosModel.consultarLibros();
        console.log(data);
        resp.send(data);
    }

    static async itemGet(req, resp) {
        let id = req.params.id;
        let data = await LibrosModel.idSearch(id);
        resp.send(data);
    }

    static async insertPost(req, resp) {
        let libro = req.body;
        let data = await LibrosModel.insertarLibro(libro);
        resp.send(data);
    }

}

module.exports = LibrosController;