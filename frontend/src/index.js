import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/monokai.css'

import 'summernote/dist/summernote-bs4';
import 'summernote/dist/summernote-bs4.css';
import 'summernote/src/lang/summernote-ja-JP.js';

$(".summernote").summernote({
    height: 300,   //set editable area's height
    lang: "ja-JP",
    codemirror: { // codemirror options
      CodeMirrorConstructor: CodeMirror,
      theme: 'monokai'
    }
});
