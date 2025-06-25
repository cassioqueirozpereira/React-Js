import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {
  return (
    <>
      {/* Utilizando os componentes importdos no JSX */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome = "Cássio" idade = {33} />
    </>
  )
}

export default App
