# react-s3-upload

This library allows you to very easily upload files from a react application to Amazon S3, using express for authing with S3 and signing.

The component is completely stateless, so while it functions as a React component, there's no dependency on the React framework for this package.

Actually, this package has no hard dependencies - it does, however, assume you have aws-sdk configured on your express server.

Library was created following the tutorial available on Heroku - https://devcenter.heroku.com/articles/s3-upload-node

  - Embed the react component in your application
  - Set up your express server
  - Magic

# Installation

    $ npm install react-s3-upload

# React Component

    import ReactUpload from 'react-s3-upload';

    <ReactUpload 
      onProgress={ (pct) => { console.log(pct) } }
      onComplete={ (url) => { console.log(url) } } />


# Server-Side

     app.get('/sign_s3', require('react-s3-upload/S3Sign')({
        S3_BUCKET:'unilever-digitaldata-develop', 
        unique: false
      }));

  - `unique` - generate a unique filename for your upload or not.
  - `S3_BUCKET` - the name of your Amazon S3 bucket.
