// User - test 1
// --------------
// class User {
//     constructor({email, password}) {
//         this.email = email
//         this.password = password
//     }
//     getEmail() {
//         return this.email
//     }
//     getPassword() {
//         return this.password
//     }
// }
// export default User

// // const email = 'koder@devmentor.pl';
// // const password = 'pw123456';
// // const user1 = new User({email, password})
// // console.log( user1.getEmail() )


// User - test 2
// -----------------
class User {
    constructor({email, password}) {
        this.email = email
        if(!this.email.includes('@')) {
            throw new Error('no char @')
        }
        this.password = password
        if(this.password.length < 8) {
            throw new Error('password must have 8 chars')
        }
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
}
export default User

// const email = 'devmentor.pl';
// const password = '123456';
// const user1 = new User({email, password})
// console.log( user1.getEmail() )









