// // Copyright IBM Corp. 2015,2016. All Rights Reserved.
// // Node module: loopback-example-access-control
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

// module.exports = function(app) {
//     var User = app.models.User;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;
    
  
//     User.create(
//       {username: 'Admin', email: 'jahaelle@gmail.com', password: 'jahaelle'}
//       , function(err, user) {
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
  