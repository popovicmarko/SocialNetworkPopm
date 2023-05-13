// class User = {
//     user_id = ' ';
//     username = '';
//     email = '';
//     password = '';
//     api_URL = 'https://645d0271250a246ae3150d5f.mockapi.io';
// };

class User { 
    uswer_id = '';
    username = '';
    email = '';
    password = '';
    api_URL = 'https://645d0271250a246ae3150d5f.mockapi.io';
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    create(){
        let date = {
            username: this.username,
            email: this.email,
            password: this.password
        }
    }

    register(){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.api_URL + '/users',
                type: 'POST',
                data: {
                    username: this.username,
                    email: this.email,
                    password: this.password
                },
                success: (response) => {
                    resolve(response);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    }
    
}
