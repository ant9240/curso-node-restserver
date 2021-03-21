const { response, request } = require('express');


const usuariosGet = (req = request, resp = response) => {

  const query = req.query

  resp.json({
    msg: 'get API - Controlador',
    query
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