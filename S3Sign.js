var aws = require('aws-sdk');


module.exports = function (options) {

  return (req,res,next) => {

    var s3 = new aws.S3();

    console.log(req.query.file_name);

    var s3_params = {
      Bucket: options.S3_BUCKET,
      Key: req.query.file_name,
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
          url: 'https://' + options.S3_BUCKET + '.s3.amazonaws.com/' + req.query.file_name
        };
        res.write(JSON.stringify(return_data));
        res.end();
      }
    });

  }

}
