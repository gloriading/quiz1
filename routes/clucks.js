
const express = require('express');
const router = express.Router();
const knex = require('../db');
// ---------------------------------------------------------------------
// const multer = require('multer');
const path = require('path');
// const UPLOADS_DIR = 'uploads';
// const upload = multer({dest: path.join(__dirname, '..', 'public', UPLOADS_DIR)});
// ---------------------------------------------------------------------

router.get('/new', (request, response) => { //real path: cohort/new
  response.render('clucks/new');
});

// '/' has to match the form action="/clucks"
router.post('/', (request, response) => {
  const username = request.body.username;
  const image_url = request.body.image_url;
  const content = request.body.content;

    knex
      .insert({username, image_url, content})
      .into('clucks') //table name
      .returning('id')
      .then(result => response.redirect(`/clucks/${result}`)) // result is the returning id
      .catch(error => response.send(error));

});

router.get('/:id', (request, response) =>{
  const id = request.params.id;
  knex // is the database
  .first() // want the first thing
  .from('clucks') // from which table
  .where({id}) // with this id
  .then(entry=>{
      response.render('clucks/showNew', {entry:entry});
  })
  .catch(error => response.send(error));

});
// List of cohorts  --------------------------------------------------------
router.get('/', (request, response) => {

  knex
    .select()
    .from('clucks')
    .orderBy('created_at', 'DESC')
    .then(lists => {
      response.render('clucks/allClucks', {lists});
    });

})


module.exports = router;









//
