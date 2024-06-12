import '@pages/ErrorPage/error.scss'

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
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
          Please try to <a href="/signup">go back</a> or <a href="/public">return to the homepage</a>.
        </p>
        {/*<input type='text' className='input'/>*/}
        <p className="output">Good luck.</p>
      </div>
    </div>
  )
}

export default ErrorPage
