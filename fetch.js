// ######################################### FETCH ###############################################3
const url = 'https://jsonplaceholder.typicode.com/posts';
function getPosts() {
    return fetch(url)
}

console.log(getPosts()
    .then((response) => {
        console.log(response)
        // return response.json()
    })
    // .then(data => console.log(data))
)

/**
 *######################################### ADVANTAGES #####################################3
 1.  more pleasant simpler API. Has Request and Response abstractions, can be used separately (for example in ServiceWorkers). Based on Promises.
2. supports streaming, response.body is ReadableStream, you can read data chunk by chunk without buffering, available for binary data. Can access partial content while response is being received.
3. has cache control support (default, no-store, reload, no-cache, force-cache, only-if-cached)
4. has better control of cross-origin (same-origin, cors, no-cors) and credentialed requests (omit, same-origin, include)
5. has control of redirects
6. can set referrer policy (no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin)
7. XHR can parse XML/HTML directly returning a Document in its "response" property. It's not possible to get a Document back directly from the Fetch API itself. But you can use DOMParser.parseFromString() and parse response.text() yourself.

############################################### DISADVANTAGES ######################################################
1. not supported in IE, there is a polyfill, but it can implement only a subset of features
2. Previously it didn't have ability to abort requests. Now it's possible with a help of "AbortController+AbortSignal" API
3. Does not support tracking progress. For downloads you can implement it yourself by getting total legnth from Content-Length response header and reading raw data chunk by chunk from ReadableStream (it's not trivial). And for tracking uploads progress, it's impossible right now.
4. Does not support requests timeouts. Specification does not have request timeouts, so you need to implement your own timeout logic.
 */