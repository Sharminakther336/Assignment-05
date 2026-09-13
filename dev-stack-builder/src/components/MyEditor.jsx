import AceEditor from "react-ace";

// mode এবং theme import করতে হবে
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function MyEditor() {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="editor"
      width="100%"
      height="300px"
      editorProps={{ $blockScrolling: true }}
    />
  );
}

export default MyEditor;
