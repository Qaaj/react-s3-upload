# react-s3-upload

This library allows you to very easily upload files from a react application to Amazon S3, using express for authing with S3 and signing.

Library was created following the tutorial available on Heroku - https://devcenter.heroku.com/articles/s3-upload-node

  - Embed the react component in your application
  - Set up your express server
  - Magic ensues

  Install
-----------

    $ npm install react-s3-upload

# React Component

    import ReactUpload from 'react-s3-upload';

    ...

     <ReactUpload />



# Server-Side

    app.get('/sign_s3', require('react-s3-upload/S3Sign')({S3_BUCKET:'your_s3_bucket'}));
