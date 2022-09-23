import React from 'react'
import images from '../../constants/images'
import Header from '../Header/Header'
import {GeneralJson} from '.././ContainerImages/JSON/GeneralJson'
import {Mafkad} from '.././ContainerImages/JSON/Mafkad'
import {MklanJson} from '.././ContainerImages/JSON/MklanJson'
import Footer from '../Footer/Footer'
import Carosual from '../ContainerImages/Carosual'
const LandingPage = ({title,subtitle,Classification}) => {
  return (
    <div className='landingPage_div'>
        <Header title={title} subtitle={subtitle} Classification={Classification} />
        <Carosual title="כללי" obj={GeneralJson}/>
        <Carosual title="מקלען" obj={MklanJson}/>
        <Carosual title="מפקד" obj={Mafkad}/>
        <Footer/>

    </div>
  )
}

export default LandingPage