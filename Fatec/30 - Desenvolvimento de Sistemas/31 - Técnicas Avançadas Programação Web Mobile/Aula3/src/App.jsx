import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'

// Sudeste
import SaoPaulo from './paginas/SaoPaulo'
import MinasGerais from './paginas/MinasGerais'
import RioJaneiro from './paginas/RioJaneiro'
import EspiritoSanto from './paginas/EspiritoSanto'

// Outros estados
import Acre from './paginas/Acre'
import Alagoas from './paginas/Alagoas'
import Amapa from './paginas/Amapa'
import Amazonas from './paginas/Amazonas'
import Bahia from './paginas/Bahia'
import Ceara from './paginas/Ceara'
import DistritoFederal from './paginas/DistritoFederal'
import Goias from './paginas/Goias'
import Maranhao from './paginas/Maranhao'
import MatoGrossoSul from './paginas/MatoGrossoSul'
import MatoGrosso from './paginas/MatoGrosso'
import Para from './paginas/Para'
import Paraiba from './paginas/Paraiba'
import Parana from './paginas/Parana'
import Pernambuco from './paginas/Pernambuco'
import Piaui from './paginas/Piaui'
import RioGrandeNorte from './paginas/RioGrandeNorte'
import RioGrandeSul from './paginas/RioGrandeSul'
import Rondonia from './paginas/Rondonia'
import Roraima from './paginas/Roraima'
import SantaCatarina from './paginas/SantaCatarina'
import Sergipe from './paginas/Sergipe'
import Tocantins from './paginas/Tocantins'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro />} />
        <Route path="/estados/es" element={<EspiritoSanto />} />
        <Route path="/estados/ac" element={<Acre />} />
        <Route path="/estados/al" element={<Alagoas />} />
        <Route path="/estados/ap" element={<Amapa />} />
        <Route path="/estados/am" element={<Amazonas />} />
        <Route path="/estados/ba" element={<Bahia />} />
        <Route path="/estados/ce" element={<Ceara />} />
        <Route path="/estados/df" element={<DistritoFederal />} />
        <Route path="/estados/go" element={<Goias />} />
        <Route path="/estados/ma" element={<Maranhao />} />
        <Route path="/estados/ms" element={<MatoGrossoSul />} />
        <Route path="/estados/mt" element={<MatoGrosso />} />
        <Route path="/estados/pa" element={<Para />} />
        <Route path="/estados/pb" element={<Paraiba />} />
        <Route path="/estados/pr" element={<Parana />} />
        <Route path="/estados/pe" element={<Pernambuco />} />
        <Route path="/estados/pi" element={<Piaui />} />
        <Route path="/estados/rn" element={<RioGrandeNorte />} />
        <Route path="/estados/rs" element={<RioGrandeSul />} />
        <Route path="/estados/ro" element={<Rondonia />} />
        <Route path="/estados/rr" element={<Roraima />} />
        <Route path="/estados/sc" element={<SantaCatarina />} />
        <Route path="/estados/se" element={<Sergipe />} />
        <Route path="/estados/to" element={<Tocantins />} />
      </Routes>
    </BrowserRouter>
  )
}
