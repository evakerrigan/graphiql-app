import { useState } from 'react';
import './Code.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { DocumentNode, gql } from '@apollo/client';
import { CodeTemplates } from '../CodeTemplates/CodeTemplates';

interface CodePops {
  setQueryGraphql: (s: DocumentNode) => void,
}

export const Code = ({ setQueryGraphql }: CodePops) => {

  const [code, setCode] = useState<string>(
    'query rickAndMorty {}'
  );

  const run = () => {
    setQueryGraphql(gql(code));
  }

  return (
    <div className="code">
      <CodeTemplates setCode={setCode} />
      <CodeEditor
        value={code}
        language="graphql"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#21242b",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <div className="code-wrapper">
        <div className="code-variables code-block">
          variables<br />
          тут вводим переменные
        </div>
        <div className="code-headers code-block">
          headers<br />
          тут вводим заголовки
        </div>
      </div>
      <button onClick={run} className="code-arrow">&gt;</button>
    </div>
  )
}