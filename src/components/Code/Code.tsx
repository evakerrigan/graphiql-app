import { useState } from 'react';
import './Code.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { DocumentNode, gql } from '@apollo/client';
import { CodeTemplates } from '../CodeTemplates/CodeTemplates';

interface CodePops {
  setQueryGraphql: (s: DocumentNode) => void,
  setVariablesGraphql: (s: string) => void,
}

export const Code = ({ setQueryGraphql, setVariablesGraphql }: CodePops) => {

  const [code, setCode] = useState<string>(
    'query rickAndMorty {}'
  );

  const [variables, setVariables] = useState<string>('');

  const [errorQuery, setErrorQuery] = useState<string>('');
  const [errorVariables, setErrorVariables] = useState<string>('');

  const [openVariables, setOpenVariables] = useState<boolean>(false);
  const [openHeaders, setOpenHeaders] = useState<boolean>(false);

  // '{"name": "rick"}'

  const run = () => {
    setErrorQuery('');
    setErrorVariables('');
    try {
      setQueryGraphql(gql(code));
    } catch (e) {
      setErrorQuery(e.message);
    }
    try {
      JSON.parse(variables || `{}`);
      setVariablesGraphql(variables || `{}`);
    } catch (e) {
      setErrorVariables(e.message);
    }
    // setVariablesGraphql(variables);
    // setQueryGraphql(gql(code));
  }

  return (
    <div className="code">
      <CodeTemplates setCode={setCode} />
      <div className="errorMessage">{errorQuery}</div>
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
          <div className="code-variables-title title-code" onClick={() => { setOpenVariables(!openVariables) }}> variables<br /></div>
          <div className="code-variables-wrapper wrapper-code">
            {openVariables ?
              <>
                <div className="errorMessage">{errorVariables}</div>
                <CodeEditor
                  value={variables}
                  language="json"
                  placeholder="Please enter JSON code."
                  onChange={(evn) => setVariables(evn.target.value)}
                  padding={15}
                  style={{
                    fontSize: 12,
                    backgroundColor: "#21242b",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                  }} />
              </>
              : null}
          </div>
        </div>
        <div className="code-headers code-block">
          <div className="code-headers-title title-code" onClick={() => { setOpenHeaders(!openHeaders) }}>headers<br /></div>
          {openHeaders ?
            <>
              <div className="code-headers-wrapper wrapper-code">Headers можно не делать, по желанию</div>
            </>
            : null}
        </div>
      </div>
      <button onClick={run} className="code-arrow">&gt;</button>
    </div>
  )
}