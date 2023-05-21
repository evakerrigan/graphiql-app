import { DocumentNode, useQuery } from '@apollo/client';
import './Output.css';

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

        {JSON.stringify(loading)}
        {JSON.stringify(error)}
        {JSON.stringify(data)}

      </div>
    </div>
  )
}