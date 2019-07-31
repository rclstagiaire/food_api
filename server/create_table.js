var server = require('./server');
var ds = server.dataSources.food_api;
var lbTables = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'notification',
  'customer',
  'delivers',
  'orders',
  'ligne_commande',
  'categories',
  'menus',
  'products',
  'restaurants',
  'menu_item',
  'payment_mode',
  'ligne_retaurants_categories'
];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in '
    , ds.adapter.name);
  ds.disconnect();
});
