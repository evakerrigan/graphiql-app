import { TypeArgument } from "./TypeArgument.tsx";
import { Schema, SchemaType } from "../types.ts";
import { useState } from "react";
import { TypeDetail } from "./TypeDetail.tsx";


interface TreeProps {
  data: { __schema: Schema }
}

const ROOT_TYPE_NAME = 'Query';

export const Tree = ({ data }: TreeProps) => {

  const [currentType, setCurrentType] = useState<SchemaType>()

  const getType = (typeName: string) => data.__schema.types.find(({ name }) => name === typeName);

  const nodeQuery = getType(ROOT_TYPE_NAME)

  const showType = () => {
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
