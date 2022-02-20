const express = require('express');
const port = process.env.port || 5000;
const app = express();
const routerConfig = require('./routerConfig');
const dbConfig = require('./database/dbConfig');
const connexion = require('./database/connexion');
const cors = require('cors')

//cors
app.use(cors());
/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    next()
  }),
 */
routerConfig.initialize('/api/1.0/', app).then(() => {
    connexion.initialize().then(() => {
        dbConfig.initialize().then(function () {
            dbConfig.isNewDB().then((count) => {
                if (count == 0) {
                    dbConfig.seedUser(20).then(() => {
                        dbConfig.seedPatient(300).then(() => {
                            dbConfig.seedTest(500);
                        });
                    });
                }
            });
        });
    });
});

app.listen(port, function () {
    console.log('App started on port', port)
});






















