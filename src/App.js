import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import author from './author.jpeg'
import { CgWebsite } from 'react-icons/cg'
import { GiGears } from 'react-icons/gi'
import { IoIosRocket } from 'react-icons/io'

function App () {
  return (
    <>
      <nav id='nav' className='navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Portfolio
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#expertise'>
                  Expertise
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#projects'>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className='jumbotron text-center'>
        <img src={author} alt='Dhanny Adhi Pramana' width='200px' className='rounded-circle img-thumbnail' />
        <h1 className='display-4'>Dhanny Adhi Pramana</h1>
        <p className='lead'>Student | Computer Science</p>
      </section>

      <section id='about'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>About Me</h2>
            </div>
          </div>
          <div className='row fs-5 text-center justify-content-center'>
            <div className='col-md-6'>
              <div className='about-content'>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate debitis quae eum harum soluta cupiditate autem veritatis magni? Delectus deleniti ipsam iusto alias, cum voluptatibus aspernatur ut reprehenderit odio
                  neque?
                </p>
                <ul className='clearfix'>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Date of birth:</span> 05 August 2000
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Email:</span> p.dhannypramana@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Phone:</span> 0831 7055 0450
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Location:</span> Bandar Lampung
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis quos doloribus eaque aperiam rem alias sapiente, porro quod pariatur explicabo inventore dicta sint. Vitae repellendus dolorem earum nihil ea.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='expertise'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>Area of Expertise</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <GiGears color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text fw-bold text-center fs-3'>Backend</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
            </div>
          </div>
        </div>
      </section>

      <section id='projects'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>Projects</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-primary text-white text-center pb-5'>
        <h4>Dhanny Adhi Pramana 118140182</h4>
        <p>Praktikum 2 Pemrograman Web Lanjut</p>
      </footer>
    </>
  )
}

export default App