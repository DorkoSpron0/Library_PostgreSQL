const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: process.env.PASSWORD_PG,
    database: 'cart'
});

const getBooks = async () => {
    try {
        const res = await pool.query('SELECT * FROM users')
        console.log(res.rows);
        pool.end()
    } catch (e) {
        console.log(e);
    }
}

const insertUser = async () => {
    const res = await pool.query("insert into users values('joe', 'joe123')")
    console.log('AÑADIDO');
}

const deleteUser = async () => {
    try {
        const res = await pool.query("DELETE FROM users WHERE username = 'joe'")
        console.log('Elimiado')
    } catch (error) {
        
    }
}

getBooks()
deleteUser()