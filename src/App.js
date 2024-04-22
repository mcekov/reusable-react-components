import Sidebar from './components/Sidebar'
import Route from './components/Route'
import AccordionPage from './components/pages/AccordionPage'
import DropdownPage from './components/pages/DropdownPage'
import Buttonpage from './components/pages/ButtonPage'
import ModalPage from './components/pages/ModalPage'
import TablePage from './components/pages/TablePage'
import CounterPage from './components/pages/CounterPage'
import TagInput from './components/pages/TagPage'

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

        <Route path="/counter">
          <CounterPage initialCount={42} />
        </Route>

        <Route path="/tag">
          <TagInput initialCount={42} />
        </Route>
      </div>
    </div>
  )
}

export default App
