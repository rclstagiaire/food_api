var server = require('./server');
var ds = server.dataSources.food_api;
var lbTables = [
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'categories',
  'menus',
  'products',
  'restaurants',
  'menu_item',
  'notification',
  'delivers',
  'orders',
  'customer',
  'ligne_commande',
  'payment_mode',
  'ligne_restaurants_categories'
  
];
ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in '
    , ds.adapter.name);
  ds.disconnect();
});
