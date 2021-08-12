const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'GET - API'
    })
})

router.post('/', (req, res) => {

    const { username, password } = req.body

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


    res.json({
        msg: 'POST - api',
        usuario: req.body
    })
})

module.exports = router;