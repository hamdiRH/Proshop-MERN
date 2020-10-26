import express from 'express';
import * as uploadController from '../controllers/upload.controller';
import validate from '../middleware/validate';
import { auth, admin } from '../middleware/auth';
const router = express.Router()


router.post('/upload',  auth, admin , uploadController.uploadFile);
router.get('/download/:id',  auth, admin , uploadController.getFile);

  
export default router

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Upload And Get File
 */

 /**
 * @swagger
 * path:
 *  /file/upload:
 *    post:
 *      summary: Uploads a file
 *      tags: [Upload]
 *      consumes:
 *       - multipart/form-data
 *      parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         description: The file to upload.
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  file:
 *                    $ref: '#/components/schemas/File'
 *        "401":
 *          description: Email already taken
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                code: 401
 *                message: Invalid data
 */