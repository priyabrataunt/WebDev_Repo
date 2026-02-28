// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let hasCompleted = false;
    let cachedError;
    let cachedResult;
    let pendingCallbacks = [];

    return function(...args) {
        const callback = args[args.length - 1];
    
    // If already completed, immediately return cached result
    if (hasCompleted) {
      return callback(cachedError, cachedResult);
    }

    // Add callback to pending list
    pendingCallbacks.push(callback);

    // If this is the first call, execute the function
    if (pendingCallbacks.length === 1) {
      const fnArgs = args.slice(0, -1);
      
      fn(...fnArgs, (err, res) => {
        hasCompleted = true;
        cachedError = err;
        cachedResult = res;

        // Invoke all pending callbacks
        const callbacks = pendingCallbacks;
        pendingCallbacks = [];
        
        callbacks.forEach(cb => cb(err, res));
      });
    }
  };
}

module.exports = once;
