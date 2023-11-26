const sql = require("mssql");

const config = {
    user: 'sa',
    password: 'Kim_PH0924',
    server: 'localhost',
    database: 'QUANLYBDS_TEAM11',
    port: 1433,
    dialect: "mssql",
    options: {
        trustServerCertificate: true,
    }
};

const connection = async () => {
    try {
        let pool = await sql.connect(config)
        if (pool) {
            console.log('Connect database successfully')
        }
        return pool.request()

    } catch (err) {
        console.log(err)
    }
}

sql.on('error', err => {
    console.log("this error", err)
})

module.exports = connection