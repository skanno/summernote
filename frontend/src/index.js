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

$('.summernote').summernote({
  height: 300,   //set editable area's height
  lang: 'ja-JP',
  toolbar: [
    ['Insert', [
      'picture',
      'link',
      'video',
      'table',
      'hr',
    ]],
    ['Font Style', [
      'fontname',
      'fontsize',
      'fontsizeunit',
      'color',
      'forecolor',
      'backcolor',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'superscript',
      'subscript',
      'clear',
    ]],
    ['Paragraph style', [
      'style',
      'ol',
      'ul',
      'paragraph',
      'height',
    ]],
    ['Misc', [
      'fullscreen',
      'codeview',
      'undo',
      'redo',
      'help',
    ]],
  ],
  callbacks: {
    onImageUpload: (files, editor, welEditable) => {
       for (var i = files.length - 1; i >= 0; i--) {
          // console.log(this);
          sendFile(files[i], $('.summernote'));
        }
    }
  },
  codemirror: { // codemirror options
    CodeMirrorConstructor: CodeMirror,
    theme: 'monokai'
  },
});
const sendFile = (file, el) => {
  // console.log(el);
  var form_data = new FormData();
  form_data.append('file', file);
  $.ajax({
    headers: {'X-CSRF-TOKEN': $('meta[name="csrfToken"]').attr('content')},
    data: form_data,
    type: 'POST',
    contentType: 'multipart/form-data',
    url: '/index/upload',
    cache: false,
    contentType: false,
    processData: false,
    success: url => {
      // console.log(url);
      // console.log($(el));
      // console.log(el);
      $(el).summernote('editor.insertImage', url);
    }
  });
}
