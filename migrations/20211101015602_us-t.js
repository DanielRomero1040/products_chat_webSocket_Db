
exports.up = function(knex) {
    knex.schema.createTable("chat",(table)=>{
        table.increments("id").primary();
        table.string("name");
        table.string("msn", 128);
        table.string("date");
    })
    .then(()=>{
        console.log("tabla creada");
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.down = function(knex) {
  
};
