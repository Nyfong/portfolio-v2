"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  forceTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  forceTheme,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(() => forceTheme ?? defaultTheme)

  React.useEffect(() => {
    if (forceTheme) {
      setTheme(forceTheme)
      return
    }
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored) {
      setTheme(stored)
    }
  }, [storageKey, forceTheme])

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(forceTheme ?? theme)
    if (!forceTheme) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey, forceTheme])

  const value = {
    theme: forceTheme ?? theme,
    setTheme: forceTheme ? () => {} : setTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
