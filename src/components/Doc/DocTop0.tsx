import {gql, useQuery} from "@apollo/client";

const GET_DOCUMENTATION = gql`
  {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
          description
          args {
            name
            description
          }
        }
      }
    }
  }
`;


export const DocsTot0 = () => {
  const {loading, error, data} = useQuery(GET_DOCUMENTATION);

  return (
    <>
      {loading ? '...' : null}
      {error ? JSON.stringify(error) : null}
      {(!loading && !error) ? (
        <ul>
          {/*{JSON.stringify(data)}*/}
          {data.__schema.types.map((type) => (
            <li key={type.name}>
              {/*{JSON.stringify(type)}*/}

              <p>name: {type.name}</p>
              <p>description: {type.description}</p>
              <p>kind: {type.kind}</p>
              <p>fields: {JSON.stringify(type.fields)}</p>
              <p>fields: {type?.fields?.map((field)=>(
                <p>
                  {field.name}: {field.description}
                </p>
              ))}</p>

            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
