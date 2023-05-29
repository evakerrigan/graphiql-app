import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <a
          href='https://github.com/osipikav'
          className='footer-link'
          target='_blank'
          rel='noreferrer'
        >
          osipikav
        </a>
        <a
          href='https://github.com/evakerrigan'
          className='footer-link'
          target='_blank'
          rel='noreferrer'
        >
          evakerrigan
        </a>
        <a
          href='https://github.com/bloodredhood'
          className='footer-link'
          target='_blank'
          rel='noreferrer'
        >
          bloodredhood
        </a>
      </div>
      <a href='https://rs.school/js/' className='footer-link' target='_blank' rel='noreferrer'>
        <img src='https://rs.school/images/rs_school_js.svg' className="footer-logo" alt='rs school' />
      </a>
    </div>
  )
}