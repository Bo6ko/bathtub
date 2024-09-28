
function ErrorFallback({ error, resetBoundary }: any) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
        <button onClick={resetBoundary}>Try again</button>
      </div>
    );
  }

export default ErrorFallback;