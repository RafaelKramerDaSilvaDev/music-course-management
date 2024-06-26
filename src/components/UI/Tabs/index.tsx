import { ComponentType, useEffect, useState } from 'react'
import * as S from './styles'
import { colors } from '../../../styles/constants/colors'

type Tab = {
  name: string
  color: keyof typeof colors
  content: ComponentType
}

type TabsProps = {
  names: string[]
  colors: (keyof typeof colors)[]
  content: ComponentType[]
}

export const Tabs = ({ names, colors, content }: TabsProps) => {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [selected, setSelected] = useState(names[0])

  const handleClickTab = (selected: string) => {
    setSelected(selected)
  }

  useEffect(() => {
    setTabs(() => [
      ...names.map((name, index) => {
        return {
          name,
          color: colors[index],
          content: content[index],
        }
      }),
    ])
  }, [])

  return (
    <S.WrapperTabs>
      <S.Header>
        {tabs.map(({ name, color }) => (
          <S.Tab
            key={`tab-${name}`}
            $color={color}
            onClick={() => handleClickTab(name)}
          >
            {name}
          </S.Tab>
        ))}
      </S.Header>

      {tabs.map(({ name, content: TabContent }) => {
        if (selected !== name) return null

        return (
          <S.Content key={`content-${name}`}>
            <TabContent />
          </S.Content>
        )
      })}
    </S.WrapperTabs>
  )
}
