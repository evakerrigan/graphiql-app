import { useState } from 'react';
import characters from './characters.graphql';


const templates = [
  {
    id: '1',
    code: characters,
    name: 'characters'
  },
  {
    id: '2',
    code: characters,
    name: 'characters2'
  }
];

interface CodeTemplatesProps {
  setCode: (s: string) => void
}
export const CodeTemplates = ({
  setCode
}: CodeTemplatesProps) => {
  const [query, setQuery] = useState<string>('');

  const ok = () => {
    console.log('query', query);

    setCode(query)
  }

  return (
    <div className="" >
      <select name='tmpl' onChange={(e) => {
        setQuery(e.currentTarget.value)
      }}>
        <option>...</option>
        {templates.map(({ id, name, code }) => (
          <option value={code} key={id}>{name}</option>
        ))}
      </select>
      <button onClick={ok} type="button">Ok</button>
    </div>
  )
}