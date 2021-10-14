/* APP -------------------------------- */
const express = require('express');
const path = require('path');
const app = express();
const usersRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const mainRoutes = require("./routes/mainRoutes.js");

app.set('view engine', 'ejs');
//app.set('views', './src/views');

/*app.use(express.urlencoded({ extended:false}));
app.use(express.json( ));*/



/*estilos*/
app.use('/', express.static(path.resolve(__dirname, '../public'))); 



/*Usuarios*/
app.use("/users", usersRoutes);

//Productos
app.use("/products", productsRoutes);

//Home y variados
app.use("/", mainRoutes);





app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en puerto 3000`);
});
