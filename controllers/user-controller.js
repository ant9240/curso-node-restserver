const { response } = require('express');


const usuariosGet = (req = query, resp = response) => {

  const { q, nombre = "No Name", apikey, page = 1, limit } = req.query

  resp.json({
    msg: 'get API - Controlador',
    q,
    nombre,
    apikey,
    page,
    limit
  })
}


const usuariosPost = (req, resp = response) => {

  const body = req.body;

  resp.json({body})
}


const usuariosPut = (req, resp = response) => {

  const id = req.params.id;

  console.log(req.params);

  resp.json({
    msg: 'put API - Controlador',
    id
  })
}


const usuariosPatch = (req, resp = response) => {
  resp.json({
    msg: 'patch API - Controlador'
  })
}


const usuariosDelete = (req, resp = response) => {
  resp.json({
    msg: 'delete API - Controlador'
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}