import { TypeArgument } from "./TypeArgument.tsx";
import { Schema, SchemaType, TypeItem } from "../types.ts";
import { useState } from "react";
import { TypeDetail } from "./TypeDetail.tsx";


interface TreeProps {
  data: { __schema: Schema }// todo: результат ответа запроса IntrospectionQueryRequest
}

const ROOT_TYPE_NAME = 'Query';

export const Tree = ({ data }: TreeProps) => {
  console.log('data:', data);

  const [currentType, setCurrentType] = useState<SchemaType>()

  // const schema: GraphQLSchema = buildClientSchema(data);
  // const printedSchema = printSchema(schema);
  // const {nodes} = Parser.parse(printedSchema);

  const getType = (typeName: string) => data.__schema.types.find(({ name }) => name === typeName);

  const nodeQuery = getType(ROOT_TYPE_NAME)

  console.log('nodeQuery:', nodeQuery)

  const showType = (typeInfo: TypeItem) => {
    console.log('typeInfo:', typeInfo)
    if (currentType?.name) {
      setCurrentType(getType(currentType.name))
    }
  }
  return <>
    {nodeQuery ? (
      <div style={{ position: 'relative' }}>
        <div><strong> {nodeQuery.name}</strong></div>
        <div>
          {nodeQuery.fields.map(({ name, description, args, type }) => (
            <div key={name} style={{ marginBottom: '10px' }}>
              <div>
                <span style={{ color: 'blue' }}>{name}</span>({args.map((arg, index) => (<div key={index}>
                  <span style={{ color: 'red' }}>{arg.name}</span>:
                  <TypeArgument typeInfo={arg.type} onClick={showType} />
                  {args.length > 1 && index !== args.length - 1 && ', '}
                </div>
                ))}) : <span style={{ color: 'orange' }}><TypeArgument typeInfo={type} onClick={showType} /></span>
              </div>
              <div style={{ color: 'green' }}>// {description}</div>
            </div>
          ))}
        </div>
        {currentType && currentType.name ? (
          <div style={{ background: 'skyblue' }}>
            {JSON.stringify(getType(currentType.name))}
            <TypeDetail typeInfo={currentType} />
          </div>
        ) : null}
      </div>
    ) : null}
  </>
}
