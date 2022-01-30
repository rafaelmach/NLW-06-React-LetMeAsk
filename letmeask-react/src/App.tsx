import { BrowserRouter, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom"


const App = () => {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />

    
    </BrowserRouter>
  )
  
}

export default App
