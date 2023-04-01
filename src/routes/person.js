let express = require('express'); //inyeccion de la dependencia de express
let router = express.Router(); // instalacion del router al que se asociaran todas las rutas


//Ruta para renderizar el formulario
router.get('/student', function(req,res){
    res.render('student');
});

//Ahora se utiliza el metodo render para mostrar la informacion del formulario
router.post('/addStudent', function(req,res){
    res.render('displayData', {
        nombre: req.body.nombre, 
        edad: req.body.edad, 
        nss: req.body.nss, 
        tipoSangre: req.body.tipoSangre
    });
});

/*Este nuevo endpoint permite parsear peticiones con objetos Json en el body*/
/*Tiene un parametro extra. Un callback express.json ---> ayuda a parsear el body 
y extraer el objeto que viene en la petición*/ 
router.post('/personJson', express.json({type:'*/*'}), function(req,res)
{
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`); 
}); 

//Ruta utilizada para rendeizar la vista "testJson.ejs"
router.get('/testJson',function(req,res){
    res.render('testJson');
});

module.exports = router; //se exporta el router