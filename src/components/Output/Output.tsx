import { DocumentNode, useQuery } from '@apollo/client';
import './Output.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

type TData = Record<string, string | number >

interface OutputProps {
  queryGraphql: DocumentNode,
  variablesGraphql:  string,
}

export const Output = ({ queryGraphql, variablesGraphql }: OutputProps) => {

  const { loading, error, data } = useQuery<TData>(queryGraphql, { variables: JSON.parse(variablesGraphql || `{}`) });

  if (loading) {
    return <div className="output-loading">Loading...</div>
  }
  if (error) {
    return <div className="output-error">Error {error.message}</div>
  }

  return (
    <div className="output-inner">
      <div className="json">
        Здесь выводится json, полученный из api,
        после нажатия кнопки стрелка в разделе код
        <div className="code">
          <CodeEditor
            value={JSON.stringify(data)}
            language="js"
            placeholder="тут итоговый json"
            onChange={() => { JSON.stringify(data) }}
            padding={15}
            readOnly={true}
            style={{
              fontSize: 12,
              backgroundColor: "#21242b",
              width: "500px",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />

        </div>
      </div>
    </div>
  )
}