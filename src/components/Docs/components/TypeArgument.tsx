import {TypeItem} from "../types.ts";

interface TypeArgumentProps {
  typeInfo: TypeItem,
  onClick?: (typeInfo: TypeItem) => void,
}

export const TypeArgument = ({
                               typeInfo,
                               onClick = () => undefined
                             }: TypeArgumentProps) => {
  return (
    <span style={{color: 'orange'}} onClick={() => onClick(typeInfo)}>
      {typeInfo.name || typeInfo?.ofType?.name || typeInfo?.ofType?.ofType?.name || typeInfo?.ofType?.ofType?.ofType?.name}
      {(typeInfo.kind === 'LIST' || typeInfo?.ofType?.kind === 'LIST') ? '[]' : ''}
      {(typeInfo.kind === 'OBJECT' || typeInfo?.ofType?.kind === 'OBJECT') ? '{}' : ''}
    </span>
  )
}
