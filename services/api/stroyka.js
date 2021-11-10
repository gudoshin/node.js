const fs = require('fs');
const Sequelize = require("sequelize");
const sequelize = new Sequelize("stroyka", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});

async function main (){
    const data = fs.readFileSync('08.11.2021.csv');
    let customers = data.toString().split('\n');
    customerEmails = customers.map(i => {
        let row = i.split(';');
        return {
            Email: row[0],
            Name: row[1],
            Phone: row[2],
            Date: row[3],
        };

    })
    let emails = await sequelize.query('select email from oc_customer');
    emails = emails[0].map(i => i.email);
    
    let array = customerEmails.filter(i => {
        let result = emails.indexOf(i.Email);
        if (result !== -1) {
            return i;
        }
    });
    array.forEach(element => {
        console.log(element);
    });
    
}

main();