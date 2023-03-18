const db = require('../db');
//User constructor
function User ({
    name, 
    father_name, 
    mother_name, 
    gender,
    name_hoshpital, 
    birth_weight, 
    dob, 
    birth_address, 
    permanent_address, 
}) {
    this.name = name;
    this.father_name = father_name;
    this.mother_name = mother_name;
    this.gender = gender;
    this.name_hoshpital = name_hoshpital;
    this.birth_weight = birth_weight;
    this.dob = dob;
    this.birth_address = birth_address;
    this.permanent_address = permanent_address;
};
// add a createUser method to the prototype
User.prototype.createUser = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO users(name, father_name, mother_name,gender, name_hoshpital,birth_weight,dob,birth_address,permanent_address) 
            VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9)`,
            [this.name, this.father_name, this.mother_name,this.gender, this.name_hoshpital,this.birth_weight,this.dob,this.birth_address,this.permanent_address]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = User;
// db.query: the query method we exported earlier from db/index.js