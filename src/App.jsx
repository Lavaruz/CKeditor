import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './App.css'

function App(){

    const [result, setResult] = useState('Result Here')

    return(
        <div className="main">
            <h2>Input Raw Text</h2>
            <div className="main-ckeditor">
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setResult(data)
                    } }
                />
            </div>
            <h2>Coverted Text to HTML Tag</h2>
            <div className="main-result">
                {result}
            </div>
        </div>
    )
}

export default App;
