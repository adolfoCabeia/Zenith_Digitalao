import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import Home from './Page/Home'
import ServicosPage from './Page/ServicosPage'
import ScrollTo from './Components/utils/ScrollTo'
import ServicosDetalhes from './Components/Servicos/ServicosDetalhes'
import ServicosInscrincao from './Components/Servicos/ServicosInscrincao'

const AppRoute = () => {
  return (
    <>
        <BrowserRouter>
           <Layouts>
            <ScrollTo/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/servicos' element={<ServicosPage/>}/>
                <Route path='/servicos/detalhes/:slug' element={<ServicosDetalhes/>} />
                <Route path='/servicos/inscricao/:slug' element={<ServicosInscrincao/>}/>
            </Routes>
           </Layouts>
        </BrowserRouter>
    </>
  )
}

export default AppRoute