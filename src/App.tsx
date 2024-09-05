import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { Provider } from "react-redux"

import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalCss } from "./styles"
import { store } from "./components/store/reducer"

function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
    </Provider>
  )
}

export default App
