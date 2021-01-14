const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();


/**
 * const express = require('express');
 * const RegistroControler = require('../controllers/RegistroController');
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Busca/listar um informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Altera uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmentros
 * 
 * Query Params, Route Params, Request Body
 */

/**
 *  Query: Parámetros nomeados e enviados na rota após "?" (Filtros, paginação)
 * 
 *  /users?nome=Kaio&idade=55
 *  const { nome , idade } = request.query;
 */

/**
 * Route: Parametros utilizados para identificar recursos
 * 
 * /users/50
 * const { id } = request.params;
*/

/**
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * const { nome, idade } = request.body;
*/

routes.get('/users', async (request,response) => {

    /*const {email, password} = request.body;*/

    const registros = await connection('dbo.usuario').select('*');

    return response.json(registros);
});

module.exports = routes;