import { sign_and_upload } from './upload';


function ReactS3Upload(props){

  const _inputChanged = (event) => {

    let file = event.target.files[0];

    const progress_handler = (evt) =>{
      console.log(evt);
    }

    if(file == null){
      console.error("No file selected.");
    }
    else{
      sign_and_upload({file, progress_handler:props.onProgress}).then( (URL) => {
        if(props.onProgress) props.onComplete(URL);
      }).catch( (err) =>{
        console.error("Something went wrong: " + err);
      });
    }
  }

  return (
    <div>
      <input id='file_input' onChange={_inputChanged} label="Image Upload" type="file" id="file_input"/>
    </div>
  );
}

export default ReactS3Upload;
