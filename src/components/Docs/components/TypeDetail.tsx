import {SchemaType} from "../types.ts";

interface TypeDetailProps {
  typeInfo: SchemaType,
}

export const TypeDetail = ({typeInfo,}: TypeDetailProps) => {
  return (
    <span style={{color: 'orange'}} >
      {JSON.stringify(typeInfo)}
    </span>
  )
}
