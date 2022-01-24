const mysql = require('mysql2')

const conexao = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '894531627089@!GXXZASDLK!@',
	database: 'petshop',
})

module.exports = conexao
