var request = require("request");

var options = {
  method: 'POST',
  url: 'https://dev-6rz61tp1.us.auth0.com/dbconnections/change_password',
  headers: {'content-type': 'application/json'},
  body: {
    client_id: 'AlRJTa6KERkJGjSSNlB3Bkd28YoDGVYy',
    email: '',
    connection: 'Username-Password-Authentication'
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});