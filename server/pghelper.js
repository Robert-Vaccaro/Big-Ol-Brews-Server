"use strict";

let pg = require('pg'),
    config = require('./config'),
    DATABASE_URL = config.DATABASE_URL;

exports.query = function (sql, values, singleItem, dontLog) {

    if (!dontLog) {
        console.log(sql, values);
    }

    return new Promise((resolve, reject) => {

        pg.connect(DATABASE_URL, function (err, conn, done) {
            if (err) return reject(err);
            try {
                conn.query(sql, values, function (err, result) {
                    done();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(singleItem ? result.rows[0] : result.rows);
                    }
                });
            }
            catch (e) {
                done();
                reject(e);
            }
        });

    });

};