const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');


const usuariosPost = async(req, res) => {

    const { username, password } = req.body

    //#region Validaciones
    if (!username) {
        res.status(400).json({
            msg: "Debe enviar el usuario"
        })
    }
    if (!password) {
        res.status(400).json({
            msg: "Debe enviar el password"
        })
    }
    //#endregion

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    password = bcryptjs.hashSync(password, salt);

    await Usuario.save({

        username,
        password
    })


    res.json({
        msg: 'POST - api',
        usuario: req.body
    })
}

module.exports = {
    usuariosPost
}