/* eslint-disable no-mixed-operators */

// eslint-disable-next-line no-unused-vars
function promiseNoData (promise, data, error) {
  const newLocal = !promise && <span>no data</span> ||
        error && <h1>{error}</h1> ||
        !data && <img src="http://www.csc.kth.se/~cristi/loading.gif" />
  return newLocal
}
