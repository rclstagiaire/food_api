var server = require('./server');
var ds = server.dataSources.food_api;
var lbTables = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
<<<<<<< HEAD
  'notification',
  'customer',
  'delivers',
  'orders',
  'ligne-commande'];
=======
  'rolemembre',
  'utilisateur',
  'categories',
  'menus',
  'products',
  'restaurants',
  'menuItem'
];
>>>>>>> 45f394830c83307b6904ba4680ca05aef459b69d
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in '
    , ds.adapter.name);
  ds.disconnect();
<<<<<<< HEAD
});
=======
});
>>>>>>> 45f394830c83307b6904ba4680ca05aef459b69d
