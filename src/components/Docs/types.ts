export interface TypeItem {
  kind: 'SCALAR' | 'NON_NULL' | 'LIST' | 'OBJECT' | 'INTERFACE' | 'UNION';
  name?: string;
  ofType?: TypeItem;
  __typename: "__Type"
}

interface SchemaField extends Record<string, any> {
  args: Array<{
    defaultValue?: string
    description: string,
    name: string
    type: TypeItem
  }>,
  deprecationReason?: string,
  description?: string,
  isDeprecated?: boolean
  name: string
  type: TypeItem
}


export interface SchemaType{
  name: string,
  fields: Array<SchemaField>
  directives: Record<string, string|number>[],
  mutationType: string,
  queryType: TypeItem,
  subscriptionType: any
}

export interface Schema extends Record<string, any> {
  types: Array<SchemaType>,
}
