import Sidebar from './components/Sidebar'
import Route from './components/Route'
import AccordionPage from './components/pages/AccordionPage'
import DropdownPage from './components/pages/DropdownPage'
import Buttonpage from './components/pages/ButtonPage'
import ModalPage from './components/pages/ModalPage'
import Table from './components/Table'
import TablePage from './components/pages/TablePage'

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>

        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/buttons">
          <Buttonpage />
        </Route>

        <Route path="/modal">
          <ModalPage />
        </Route>

        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  )
}

export default App
