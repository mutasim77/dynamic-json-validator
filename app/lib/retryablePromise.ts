interface PromiseExecutor<T> {
    (resolve: (value: T) => void, reject: (reason?: any) => void): void;
}

export class RetryablePromise<T> extends Promise<T> {
    static async retry<T>(attempts: number, executor: PromiseExecutor<T>): Promise<T> {
        return new RetryablePromise<T>(executor).catch((error) => {
            console.error(`Retrying (${attempts} attempts left) due to an error: ${error}`);
            return attempts > 0
                ? RetryablePromise.retry(attempts - 1, executor)
                : RetryablePromise.reject(error)
        })
    }
}