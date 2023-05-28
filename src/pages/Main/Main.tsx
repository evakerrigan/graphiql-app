import { useState } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Docs } from '../../components/Docs/Docs'
import { Code } from '../../components/Code/Code'
import { DocumentNode } from '@apollo/client'
import { Output } from '../../components/Output/Output'
import { t } from 'i18next'

const Main = () => {

  const [queryGraphql, setQueryGraphql] = useState<DocumentNode | undefined>(undefined);
  const [variablesGraphql, setVariablesGraphql] = useState<string | undefined>();

  return (
    <div className="app-content">
      <Sidebar />
      <Docs />
      <Code setQueryGraphql={setQueryGraphql} setVariablesGraphql={setVariablesGraphql} />
      <div className="output">
        {queryGraphql ? <Output queryGraphql={queryGraphql} variablesGraphql={variablesGraphql} /> :
          <div>{t('notQuery')}</div>}
      </div>
    </div>
  )
}

export default Main;