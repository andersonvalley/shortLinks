import { useCallback, useEffect, useState } from 'react'

export enum themeVariant {
  dark = 'dark',
  light = 'light',
}

export const useTheme = () => {
  const [theme, setTheme] = useState('light')
  const html = document.querySelector('html')

  const changeTheme = useCallback(
    (variant: string) => {
      localStorage.setItem('data-theme', variant)
      html?.setAttribute('data-theme', variant)
      setTheme(variant)
    },
    [html]
  )

  useEffect(() => {
    const currentTheme = localStorage.getItem('data-theme')

    if (currentTheme == themeVariant.dark) {
      changeTheme(themeVariant.dark)
    } else if (currentTheme === themeVariant.light) {
      changeTheme(themeVariant.light)
    } else {
      const { matches } = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

      if (matches) {
        changeTheme(themeVariant.dark)
      } else {
        changeTheme(themeVariant.light)
      }
    }
  }, [html, changeTheme])

  return { theme, changeTheme }
}
