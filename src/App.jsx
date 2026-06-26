import { Routes, Route } from 'react-router-dom'
import Hub from './pages/Hub.jsx'
import Power from './pages/Power.jsx'
import Trust from './pages/Trust.jsx'
import Money from './pages/Money.jsx'
import Labor from './pages/Labor.jsx'
import Accountability from './pages/Accountability.jsx'
import WhatYouCanDo from './pages/WhatYouCanDo.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Invest from './pages/Invest.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/power" element={<Power />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/money" element={<Money />} />
        <Route path="/labor" element={<Labor />} />
        <Route path="/accountability" element={<Accountability />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/what-you-can-do" element={<WhatYouCanDo />} />
      </Routes>
    </>
  )
}
