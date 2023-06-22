const { getAll, create, getOne, remove, update, verifyCode, login, logged, resetPassword, updatePassword } = require('../controllers/user.controlles');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT,getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me') // /users/me
    .get(verifyJWT, logged)

routerUser.route('/reset_password') // /users/reset_password
    .post(resetPassword)

routerUser.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

routerUser.route('/verify/:code')
    .get(verifyCode)

routerUser.route('/reset_password/:code')// /reset_password/:code
    .post(updatePassword)

module.exports = routerUser;