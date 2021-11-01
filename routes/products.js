const express = require("express");
const contenedor = require ('../manejo-db-productos');

const objetoConfiguracion = {
    client:"mysql",
    connection: {
        host:"127.0.0.1", //phpmyadmin
        port:3307,//puerto mysql
        user:"root",
        password:"daniel",
        database: "codertestdb"
    },
    pool:{min: 2, max:8}
};

const newContainer = new contenedor.Contenedor(objetoConfiguracion,"productos");

const {Router} = express;

const router =  new Router();


//----------------------------------------

router.get("/",(req,res)=>{
    res.sendFile("public/index.html", {root: "."})
})

router.post("/save",(req,res)=>{
    let obj={
        title:req.body.title,
        price:req.body.price,
        thumbnail:req.body.thumbnail
    }
    console.log(obj)
    newContainer.save(obj).then( () => {
        
        res.send("Registro guardado")
    })
    .catch(err => {
        res.send("Registro no guardado")
    })
})

//----------------------------------------
module.exports = router;
