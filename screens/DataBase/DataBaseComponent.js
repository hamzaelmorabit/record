
import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';

export default class DataBasecomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log(props)
    }



    componentDidMount = () => {
        if (this.props.data[0] == "insert") {

            this.addUserInDataBase()
            // console.log(this.props.data[1] + "!")
        } else if (this.props.data[0] == "delet") {

            //kan pass lih gmail bash ysepprimi lya l user selon email et password
            this.deletUserInDataBase(this.props.data[1] ,this.props.data[2] )
        }

    }

    deletUserInDataBase = (email_delet,password_delet) => {
        firebase.database().ref('users').on('value', data => {
            data.forEach((item) => {

                if (item.val().email == email_delet && item.val().password == password_delet) {
                    // console.log(item.val().id + "ppp")
                    // console.log(item.val().email+" : Emaildeleted ******************")
                    var path = 'users/user_' + item.val().id
                    firebase.database().ref(path).remove();
                }
            })
        }
        )
    }


    addUserInDataBase = () => {
        var id_ = parseInt(Math.random() * 100)+ parseInt(Math.random() * 10),
            path = "users/user_" + id_
        setTimeout(() => {
            firebase.database().ref(path).set({
                email: this.props.data[1],
                password: this.props.data[2],
                firstName: this.props.data[3],
                firstName: this.props.data[4],
                phoneNumber: this.props.data[5],
                age: this.props.data[6],
                gendre: this.props.data[7],
                bloodType: this.props.data[8],
                id: id_,
            }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });

        }, 2000);
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}





//pour  calculer che7Al aandi f l base donne count_users
        // var count_users = 0, path;
        // firebase.database().ref('users').on('value', data_item => {
        //     data_item.forEach(() => { count_users += 1; })

        // })

        // var m = (Math.random() * 100)

        // path = "users/user_" + ++(count_users) +  parseInt(m)
        // console.log(count_users + "count_users");

        //To Await 5 seconds to insert a new user


// import React from 'react';
// import { View, Text } from 'react-native';
// import firebase from 'firebase';

// class App extends React.Component {

//     componentWillMount() {

//         // To Configure react native app with cloud of Google Firebase database !
//         var config = {
//             apiKey: "AIzaSyCCrQklY2JOaLbyriwCcnyW76SBRP_jh94",
//             authDomain: "reactnativedatabase-29573.firebaseapp.com",
//             databaseURL: "https://reactnativedatabase-29573.firebaseio.com",
//             projectId: "reactnativedatabase-29573",
//             storageBucket: "",
//             messagingSenderId: "1003641028384"
//         };
//         firebase.initializeApp(config);

//         // To select data from firebase every time data has changed !
//         firebase.database().ref('users').on('value', (data) => {
//             console.log(data.toJSON());
//         })

//         // To Await 5 seconds to insert a new user
//         setTimeout(() => {
//             firebase.database().ref('users/004').set(
//                 {
//                     name: 'Pheng Sengvuthy 004',
//                     age: 24
//                 }
//             ).then(() => {
//                 console.log('INSERTED !');
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }, 5000);

//         // To Update a user
//         firebase.database().ref('users/004').update({
//             name: 'Pheng Sengvuthy'
//         });

//         // To Remove a user
//         firebase.database().ref('users/004').remove();

//     }

//     render() {
//         return (
//             <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
//                 <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
//                     Welcome To ------>
//                     {'\n'}Our Google Firebase Database !
//                 </Text>
//             </View>
//         )
//     }
// }

// export default App;