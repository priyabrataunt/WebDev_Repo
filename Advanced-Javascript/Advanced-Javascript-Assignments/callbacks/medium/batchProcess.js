// Problem Description – Ordered Parallel Batcher
//
// You need to process many items in parallel, but with a fixed
// concurrency limit to avoid resource exhaustion.
//
// Tasks should start as soon as a slot is free, and the final
// results must preserve the original input order.
//
// Requirements:
// - Run at most `limit` workers in parallel.
// - Preserve the original order of results.
// - Start new work as soon as one finishes.
// - Stop and return an error if any task fails.

function batchProcess(items, limit, worker, onComplete) {
    if (items.length === 0) {
        return onComplete(null, []);
    }
    
    const results = new Array(items.length);
    let nextIndex = 0;
    let completed = 0;
    let hasError = false;

    function startWorker() {
        if(hasError || nextIndex >= items.length){
            return;
        }

        const currenctIndex = nextIndex++;
        const item = items[currenctIndex];

        worker(item, (err, result) => {
            if(hasError) return;

            if(err){
                hasError = true;
                return onComplete(err);
            }

            results[currenctIndex] = result;
            completed++;

            if(completed === items.length){
                onComplete(null, results);
            }else{
                startWorker();
            }
        })
    }

    const initialWorkers = Math.min(limit, items.length);
    for (let i = 0; i < initialWorkers; i++) {
        startWorker();
    }
    
}

module.exports = batchProcess;
