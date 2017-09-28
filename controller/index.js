var https = require('https');

module.exports = {

   init: function(app){

       app.get('/',function(request,response){

           response.send('hello root');
       })

       app.get('/inbound',function(request,response){

            var options = {
                            host: 'api.github.com',
                            path: '/users/rsp',
                            headers: {'User-Agent': 'request'}
                        };

            var result = 'hello world';
            
//             https.get(options, function(response){
//                 var body = '';
// console.log('start');
//                 response.on('data',function(chunk){
//                     body += chunk;
//                 });
// console.log('middle');
// console.log(body);
//                 response.on('end',function(){
//                      if (response.statusCode === 200) {
//                           try {
//                                 result = JSON.parse(body);
//                           }catch(e){console.log('parsing error');}} else {console.log('status code:'+response.statusCode)}
//                 });
// console.log('end');
//                 console.log(result);
//             }).on('error',function(e){result = 'error while retrieving the data...'});
            
            //response.send(result);

const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
var result = '';

            https.get(url, res => {
                                    res.setEncoding("utf8");
                                    let body = "";
                                    res.on("data", data => {
                                                                body += data;
                                                            });
                                    res.on("end", () => {
                                                                this.result += JSON.parse(body);
                                                                response.send(JSON.parse(body));
                                                                console.log(this.result);
                                                        });
                                });

       })
   }
}