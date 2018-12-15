import React from 'react'

import ImgBrand from '../../assets/images/icn-brand-white.svg'


export default class Footer extends React.Component {

  render() {
    return (
      <div style={{paddingTop : '100px', backgroundColor : '#1d2533'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3">
              <ul>
                <li className="titulo-li">SOLUCIONES </li>
                <li>Desarrollo Software a la medida</li>
                <li>Redes </li>
                <li>Servidores</li>
                <li>Desarrollo Web</li>
                <li>Desarrollo de Apps</li>
                <li>Desarrollo de APis</li>
                <li>Desarrollo de ERPs</li>
                <li>Desarrollo WMS</li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <ul>
                <li className="titulo-li">MARKETING </li>
                <li>Consultoria</li>
                <li>Branding</li>
                <li>Social Media</li>
                <li>Search Engine Marketing</li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <ul>
                <li className="titulo-li">SOPORTE </li>
                <li>Instalaciones de Programas</li>
                <li>Troubleshoot</li>
              </ul>
            </div>
            <div className="col-12 col-sm-3">
              <ul>
                <li className="titulo-li">CONTACTO </li>
                <li>Live Chat</li>
                <li>Mapa</li>
                <li>RRSS</li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12" style={{borderTop : '1px white solid'}}>
              <div className="row">
                <div className="col-10 text-center">
                  <img className="pb-3 pb-sm-0" src={ImgBrand} width="30%" />
                  <div className="brand-footer">
                    <p className="text-white ml-3">Bronce 2188 <br/> Ensenada B.C México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}