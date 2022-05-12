var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "CREATE DATABASE node_web_react";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});