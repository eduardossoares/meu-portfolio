import { Header } from './components/header'
import { Home } from './components/home'
import { About } from './components/about'
import { Stacks } from './components/stacks'
import { Projects } from './components/projects'
import { Contacts } from './components/contacts'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Stacks />
      <Projects />
      <Contacts />
    </>
  )
}