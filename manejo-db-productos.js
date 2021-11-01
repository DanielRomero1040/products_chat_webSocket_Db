
class Contenedor{
    constructor(objetoDeConfiguracion, tabla){
        this.objetoDeConfiguracion = objetoDeConfiguracion;
        this.tabla = tabla;
    }    
    
    save(objeto){
        const knex = require("knex")(this.objetoDeConfiguracion);
        knex.schema.createTableIfNotExists(this.tabla,(table)=>{
            table.increments("id").primary();
            table.string("title");
            table.integer("price");
            table.string("thumbnail");
        })
        .then(()=>{
            console.log("tabla creada");
        })
        .catch(err=>{
            console.log(err);
        })

        return knex(this.tabla).insert(objeto);
        
    };

    getById(id){

    };

    getAll(){
        const knex = require("knex")(this.objetoDeConfiguracion);
        knex.schema.createTableIfNotExists(this.tabla,(table)=>{
            table.increments("id").primary();
            table.string("title");
            table.number("price");
            table.string("thumbnail");
        })
        .then(()=>{
            console.log("tabla creada");
        })
        .catch(err=>{
            console.log(err);
        })
        return knex.from(this.tabla).select("*")
    }

    deleteById(id){

    }

    deleteAll(){

    }

    updateById(objeto){

    }

}


module.exports = {Contenedor} 
