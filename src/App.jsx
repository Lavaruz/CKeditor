import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

function App() {

  const [textResult, setTextResult] = useState('dummy')

  return (
    <div className='main'>
      <h1>CKeditor Form</h1>
      <div className='ckeditor-form'>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            // onReady={ editor => {
            //     // You can store the "editor" and use when it is needed.
            //     console.log( 'Editor is ready to use!', editor );
            // } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setTextResult(data)
            } }
            // onBlur={ ( event, editor ) => {
            //     console.log( 'Blur.', editor );
            // } }
            // onFocus={ ( event, editor ) => {
            //     console.log( 'Focus.', editor );
            // } }
        />
      </div>
      <div className="result">
        <h3>HTML Result</h3>
        <p>{textResult}</p>
      </div>
    </div>
  );
}

export default App;
