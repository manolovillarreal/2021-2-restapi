const Usuario = require('../models/usuario')


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