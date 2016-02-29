var aws = require('aws-sdk');


module.exports = function (options) {

  return (req,res,next) => {

    var s3 = new aws.S3();

    var filename = req.query.file_name;

    var guid = function(){
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    if(options.unique) filename = filename + '-' + guid();

    console.log(options.unique,filename,guid());

    var s3_params = {
      Bucket: options.S3_BUCKET,
      Key: filename,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3_params, function (err, data) {
      if (err) {
        console.log(err);
        res.status(400).send({error: "Something went wrong: " + err})
      }
      else {
        var return_data = {
          signed_request: data,
          url: 'https://' + options.S3_BUCKET + '.s3.amazonaws.com/' + filename
        };
        res.write(JSON.stringify(return_data));
        res.end();
      }
    });

  }

}
