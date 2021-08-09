import React, { useState, useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import Widget from '../UI/Widget'
import List from '../UI/List'
import LI from '../UI/List/Item'

const Footer = () => {
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='row'>
          {/*  Start:About  */}
          <div className='col-lg-3 col-sm-12'>
            <Widget title='Om Oss'>
              <p>Välkommen till SINFRENOS AB Tack för att du besöker vår webbplats.
                Här hittar du all information du behöver om vårt företag och de tjänster vi erbjuder.
              </p>
            </Widget>
          </div>
          {/*  End:About  */}

          {/*  Start:Quick Link  */}
          <div className='col-lg-3 col-sm-12'>
            <Widget title='Helpful Link'>
              <List classes='recent-post helpful_post'>
                <LI>
                  <Link to={process.env.PUBLIC_URL + '/about'}>Varför välja oss?</Link>
                </LI>
                <LI>
                  <Link to={process.env.PUBLIC_URL + '/services'}>Vår Tjänster</Link>
                </LI>
                <LI>
                  <Link to={process.env.PUBLIC_URL + '/single-services'}>Om Oss</Link>
                </LI>
              </List>
            </Widget>
          </div>
          {/*  End:Quick Link  */}

          {/*  Start:Latest post   */}
          <div className='col-lg-3 col-sm-12'>
            <Widget title='Latest Articles'>
              <List classes='recent-post'>
                <LI>
                  <h6><Link to={process.env.PUBLIC_URL + '/blog'}>Loren ipsum dolor consectetur  </Link></h6>
                </LI>
                <LI>
                  <h6><Link to={process.env.PUBLIC_URL + '/blog'}>Loren ipsum dolor consectetur  </Link></h6>
                </LI>
                <LI>
                  <h6><Link to={process.env.PUBLIC_URL + '/blog'}>Loren ipsum dolor consectetur  </Link></h6>
                </LI>
              </List>
            </Widget>
          </div>
          {/*  End:Latest post  */}

          {/*  Start:Newsletter  */}
          <div className='col-lg-3 col-sm-12'>
            <Widget title='Subcribe now'>
              {/*  Start:Subscribe  */}
              <div className='news_letter_wrp'>
                <p>Subscribe our newsletter to get more update &  join to klinarmen </p>
                <form className='footer_subs'>
                  <input className='form-input' placeholder='Enter Your Email Address' type='text' />
                  <button type='submit' className='form-button' />
                </form>
                {/*  END MAILCHIMP FORM  */}
              </div>
            </Widget>
          </div>
          {/*  End:Start Subscribe  */}

          {/*  Start:Subfooter  */}
          <div className='subfooter'>
            <div className='copyright_text'> &copy; {new Date().getFullYear()} SINFRENOS AB |<Link to={process.env.PUBLIC_URL + '/'}> Stockholm, Sverige </Link>
            </div>
            <button className={`scrollup ${scroll > top ? 'show' : ''}`} onClick={() => scrollToTop()}>
              <span className='icon-glyph-203' />
            </button>
          </div>
          {/* End:Subfooter  */}

        </div>
      </div>

    </footer>

  )
}

export default Footer
