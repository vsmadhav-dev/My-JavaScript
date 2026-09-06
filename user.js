let DATA = 'example'

class user {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
    viewData(){
       console.log("user viewData" , DATA);
    }
}
let student1 = new user('madhav' , 'madhav@madhavaanand.dev');
let student2 = new user('Jhon' , 'jhon@jhon.dev');

class admin extends user{
    constructor(name, email) {
        super(name, email);
    }
    editData(){
        DATA = 'admin';
    }
}
let admin1 = new admin('HOD' , 'admin');