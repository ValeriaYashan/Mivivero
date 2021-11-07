/* APP -------------------------------- */
const express = require('express');
const path = require('path');
const app = express();
const methoOverride = require("method-override");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const mainRoutes = require("./routes/mainRoutes");
const cursosRoutes = require("./routes/productsRoutes");/*arregalar esto*/


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended:false}));
app.use(express.json( ));
app.use(methoOverride("_method"))


/*estilos*/
app.use('/', express.static(path.resolve(__dirname, '../public'))); 

/*Usuarios*/
app.use("/users", usersRoutes);

//Productos
app.use("/products", productsRoutes);

/*cursos*/
app.use("/products", productsRoutes);/*arregalar esto*/
//Home y variados

app.use("/", mainRoutes);




app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});
