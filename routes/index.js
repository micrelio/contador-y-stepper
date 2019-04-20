var express = require('express');
const User = require( '../models/user' );
var router = express.Router();


/*localhost:3000/    */
/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('uuuuuuuuuuuuuuuuu');
  
  res.render('index', { title: 'Express' });

});


router.get( '/registro', function ( req, res, next ) {
  res.render('registro');
 } );




router.get( '/login', function ( req, res, next ) {
 //console.log(req.body);
 
  
  res.render( 'login' );
 
  
} );





//   users
router.post( '/login', function ( req, res, next ) {

  console.log( req.body );

  User.findOne( req.body )
      .then( ( user ) => {
          console.log( 'login valido', user );
          if ( user ) {
              res.render( 'login', { message: 'Bienvenido al castillo! ' + user.email } );
          } else {
              res.render( 'login', { error: 'credenciales incorrectos' } );

          }
      } )
      .catch( ( err ) => {
          console.log( 'login invalido', err );
          res.render( 'login', { error: 'Ups algo no ha ido bien.  vuelva intentarlo más tarde' } );

      } )
} );


router.post( '/registro', function ( req, res, next ) {

  console.log( req.body );
  new User( req.body )
      .save()
      .then( () => {
          console.log( 'registro valido' );

        

          res.render( 'registro', { message: 'Registro válido. Ya puedes hacer login' } );


      } )
      .catch( ( err ) => {
          console.log( 'registro invalido', err );

          res.render( 'registro', { error: err.message } );

      } )
} );



router.get('/users', (req, res) => {
  User.find({}).then(users => {
      res.send(users)
  }).catch(err => {
      res.status(500).send(err)
  })
});


module.exports = router;









  
