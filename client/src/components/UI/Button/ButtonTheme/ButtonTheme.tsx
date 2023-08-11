import { BiSun } from 'react-icons/bi'
import { RxMoon } from 'react-icons/rx'
import { themeVariant, useTheme } from '../../../../hooks/useTheme'

import './ButtonTheme.scss'

export const ButtonTheme = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <button
      data-title="Тема"
      className={theme === themeVariant.light ? 'btn-theme active light' : 'btn-theme dark'}
      onClick={() =>
        theme === themeVariant.light ? changeTheme(themeVariant.dark) : changeTheme(themeVariant.light)
      }
    >
      {theme === themeVariant.light ? <BiSun size={22} /> : <RxMoon size={22} />}
    </button>
  )
}
