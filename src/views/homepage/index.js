import React from 'react'

import Menu from '../menu'
import Footer from '../footer'

import Header1 from '../../assets/images/header1.png'
import Header2 from '../../assets/images/header2.png'
import Header3 from '../../assets/images/header3.png'
import ImgCamp from '../../assets/images/icn-camp.svg'
import ImgDevWeb from '../../assets/images/icn-devweb.svg'
import ImgRedes from '../../assets/images/icn-redes.svg'
import ImgServidores from '../../assets/images/icn-servidores.svg'
import ImgMarketing from '../../assets/images/icn-marketing.svg'

import LogoAri from '../../assets/images/logos-wn_ARI.svg'
import LogoMaxGroup from '../../assets/images/logos-wn_MAXGROUP.svg'
import LogoMaxi from '../../assets/images/logos-wn_maxicomm.svg'
import LogoPapas from '../../assets/images/logos-wn_PAPAS.svg'
import LogoPineda from '../../assets/images/logos-wn_PINEDA.svg'
import LogoPochteca from '../../assets/images/logos-wn_POCHTECA.svg'

import Carousel from './carousel'

export default class Example extends React.Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="container-fluid">
          <div className="row h-100 align-items-end">
            <div className="col-12 pl-0 pr-0 ">
              <Carousel/>
            </div>
            <div className="col-12 col-sm-3 text-right">
              <img src={Header1} height="85%" width="85%" alt="header1" className="slogan-image"/>
              <h3 className="slogan">Where solutions start</h3>
            </div>
          
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-3 d-none d-sm-inline">
              <img src={Header2} height="100%" width="40px" alt="header1" style={{position : 'absolute', right : '15px'}}/>
            </div>
            <div className="col-12 col-sm-6">
              <div className="txt-63px">
                We Natives
              </div>
              <div style={{color : 'black', fontSize : '20px', textAlign : 'justify'}}>
                Somos un equipo de especialistas apasionados por la innovación constante
                y el desarrollo de soluciones para mejorar la competitividad de tu empresa.
                Buscamos comprender las necesidades y expectativas de tu negocio para
                ofrecerte soluciones “Out of the Box”.
              </div>
            </div>
            <div className="col-12 col-sm-3 align-self-end">
              <img src={ImgCamp} height="85%" width="85%" style={{display: 'block' , marginLeft: 'auto',marginRight: 'auto'}} />
            </div>
          </div>
          <div className="row justify-content-center" style={{height : '200px'}}>
            <div className="col-3"></div>
            <div className="col-7">
              <img src={Header3} height="100px" width="100%" alt="header1" style={{    position: 'absolute',left : '-55px'}}/>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row" style={{}}>
            <div className="col-12 col-sm-3 text-center align-self-center">
              <div className="title-icons-lg">DESARROLLO WEB</div>
              <img src={ImgDevWeb} width="40%"/>
            </div>
            <div className="col-12 col-sm-3 text-center align-self-center">
              <div className="title-icons">REDES</div>
              <img src={ImgRedes} width="50%"/>
            </div>
            <div className="col-12 col-sm-3 text-center align-self-center">
              <div className="title-icons">SERVIDORES</div>
              <img src={ImgServidores} width="50%"/>
            </div>
            <div className="col-12 col-sm-3 text-center align-self-center">
              <div className="title-icons">MARKETING</div>
              <img src={ImgMarketing} width="50%"/>
            </div>
          </div>
        </div>
        <div className="container-fluid img-quehacemos">
          <div className="row" style={{height : '100%'}}>
            <div className="col-12 text-center align-self-center">
              <div className="text-que">¿Qué</div><div className="text-hacemos"> Hacemos?</div>
            </div>
          </div>
        </div>
        <div className="container-fluid img-clientes">
          <div className="row">
            <div className="col-12 text-center align-self-center">
              <div className="title-clientes">Nuestros clientes</div>
            </div>
          </div>
          <div className="row h-80 align-items-center">
            <div className="col-12 col-sm-3 text-center">
              <img src={LogoAri} className="" height="200" width="200"/>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <img src={LogoMaxi} className="" height="200" width="200"/>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <img src={LogoMaxGroup} className="" height="200" width="200"/>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <img src={LogoPineda} className="" height="200" width="200"/>
            </div>
          </div>
        </div>
        <div className="container-fluid seccionNews">
          <div className="row align-items-center pt-5 pb-5" style={{}}>
            <div className="col-7" style={{borderLeft : '20px solid #1ec5ea'}}>
              <h1>LOREM</h1>
              <h1>LOREM LOREM LOREM SIMPSON</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
            </div>
          </div>
          <div className="row align-items-center pb-5">
            <div className="col-12 col-sm-3">
              <h3>LOREM</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              <button>LOREM LOREM</button>
            </div>
            <div className="col-12 col-sm-3">
              <h3>LOREM</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              <button>LOREM LOREM</button>
            </div>
            <div className="col-12 col-sm-3">
              <h3>LOREM</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              <button>LOREM LOREM</button>
            </div>
            <div className="col-12 col-sm-3">
              <h3>LOREM</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
              <button>LOREM LOREM</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}