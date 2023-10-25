import GlobalStyle from "./config/GlobalStyle"
import DefaultTheme from "./config/theme/DefaultTheme"
import RoutesApp from "./routes/RoutesApp"



function App() {
  return (
    <DefaultTheme>
      <RoutesApp />
      <GlobalStyle />
    </DefaultTheme>
  )
}

export default App
