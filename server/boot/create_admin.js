// module.exports = function(app) {
//     var User = app.models.User;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;
//     User.create(
//       {username: 'Admin', email: 'admin@gmail.com', password: 'opensesame'}
//         , function(err, user) {
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