import './error.scss'

const ErrorPage = () => {
  return (
    <>
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to <a href="/auth/login">go back</a> or <a href="/">return to the homepage</a>.
        </p>
        {/*<input type='text' className='input'/>*/}
        <p className="output">Good luck.</p>
      </div>
    </>
  )
}

export default ErrorPage
