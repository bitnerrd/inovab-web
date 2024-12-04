import React from 'react'
import Transparency from '../home/_components/Transparency'
import CurrentBalance from './_components/CurrentBalance'
import StabilitySection from './_components/StabilitySection'
import BuildCurrency from '../buildCurrency/BuildCurrency'

const TransparencyStability = () => {
  return (
    <div>
      <Transparency/>
      <CurrentBalance/>
      <StabilitySection/>
    </div>
  )
}

export default TransparencyStability
