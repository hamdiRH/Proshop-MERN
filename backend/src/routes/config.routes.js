import express from 'express';
import config from '../config';
const router = express.Router();

router.get('/paypal', (res, req) => req.send(config.paypal.clientId));

export default router;


/**
 * @swagger
 * tags:
 *   name: Config
 *   description: Config
 */

 /**
 * @swagger
 * path:
 *  /config/paypal:
 *    get:
 *      summary: Get paypal client id
 *      description: Get paypal client id
 *      tags: [Config]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 * */