import React from 'react';
import { sign_and_upload } from './upload';

class ReactS3Upload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this._inputChanged = this._inputChanged.bind(this);
  }

  _inputChanged(event){

    let file = event.target.files[0];

    const progress_handler = (evt) =>{
      console.log(evt);
    }

    if(file == null){
      console.error("No file selected.");
    }
    else{
      sign_and_upload({file, progress_handler}).then( (URL) => {
        console.log(URL)
      });
    }
  }

  render() {

    return (
      <div>
        <input id='file_input' onChange={this._inputChanged} label="Image Upload" type="file" id="file_input"/>
      </div>
    );
  }
}

ReactS3Upload.displayName = 'ReactS3Upload';

export default ReactS3Upload;
