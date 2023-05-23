import { DocumentNode, useQuery } from '@apollo/client';
import './Output.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

interface OutputProps {
  queryGraphql: DocumentNode,
}

export const Output = ({ queryGraphql }: OutputProps) => {

  const { loading, error, data } = useQuery(queryGraphql);

  return (
    <div className="output">
      <div className="json">
        Здесь выводится json, полученный из api,
        после нажатия кнопки стрелка в разделе код
        <div className="code">
          <CodeEditor
            value={JSON.stringify(data)}
            language="js"
            placeholder="тут итоговый json"
            onChange={() => {JSON.stringify(data)}}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#21242b",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />

          {/* {JSON.stringify(loading)}
          {JSON.stringify(error)}
          {JSON.stringify(data)} */}

        </div>
      </div>
    </div>
  )
}