<<<<<<< HEAD
=======
// // Copyright IBM Corp. 2015,2016. All Rights Reserved.
// // Node module: loopback-example-access-control
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

>>>>>>> f9fc9fe702be3e08ce1496366cb9e511ce372437
// module.exports = function(app) {
//     var User = app.models.User;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;
<<<<<<< HEAD
//     User.create(
//       {username: 'Admin', email: 'admin@gmail.com', password: 'opensesame'}
//         , function(err, user) {
=======
    
  
//     User.create(
//       {username: 'Admin', email: 'jahaelle@gmail.com', password: 'jahaelle'}
//       , function(err, user) {
>>>>>>> f9fc9fe702be3e08ce1496366cb9e511ce372437
//       if (err) throw err;
  
//       console.log('Created users:', user);
  
//       //create the admin role
//       Role.create({
//         name: 'admin'
//       }, function(err, role) {
//         if (err) throw err;
  
//         console.log('Created role:', role);
  
//         //make bob an admin
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: user.id
//         }, function(err, principal) {
//           if (err) throw err;
  
//           console.log('Created principal:', principal);
//         });
//       });
//     });
//   };
<<<<<<< HEAD
// {
//     "accessType": "READ",
//     "principalType": "ROLE",
//     "principalId": "$everyone",
//     "permission": "ALLOW"
//   }
// {
//     "accessType": "*",
//     "principalType": "ROLE",
//     "principalId": "admin",
//     "permission": "ALLOW"
//   },
=======
  
>>>>>>> f9fc9fe702be3e08ce1496366cb9e511ce372437
