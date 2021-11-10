const fs = require('fs');
const axios = require('axios');
const Sequelize = require("sequelize");
const sequelize = new Sequelize("stroyka", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});

async function main (){
    const data = fs.readFileSync('08.11.2021.csv');
    let customers = data.toString().split('\n');
    let customerEmails = [];
    customers.map(i => {
        let row = i.split(';');
        let name = row[1]?.split(' ');
        if(row[0]){
            customerEmails.push({
                email: row[0],
                firstname: name?.[0],
                lastname: name?.[1] ?? '',
                telephone: row[2],
                date_added: row[3],
            })
        }
    })

    let emails = await sequelize.query('select email from oc_customer');
    emails = emails[0].map(i => i.email);
    
    let array = customerEmails.filter(i => {
        let result = emails.indexOf(i.email);
        if (result === -1) {
            return i;
        }
    });
    // array.forEach(element => {
    //     console.log(`Insert into stroyka.oc_customer (customer_group_id, firstname, lastname, email, telephone, date_added) VALUES ("1","${element.firstname}","${element.lastname}","${element.email}","${element.telephone}","${element.date_added}");`);
    // });
    for (const customer of array) {
            const response = await axios.post('http://api.stroyka-market.com.local/api/1.0/customers',customer, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': 'Token hJx9gu2OvOeP4aceSSISVI90NR2kIQN9'
                },
    
            });
            console.log(response.status)
;
    }
}

main();