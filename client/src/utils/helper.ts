export const isEmpty = (obj: any): boolean => {
  for (const _ in obj) {
    return false;
  }
  return true;
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const asyncWithTimeout = (
  asyncPromise: Promise<any>,
  timeLimit: number,
) => {
  let timeoutHandle: NodeJS.Timeout;

  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutHandle = setTimeout(
      () => reject(new Error("Async call timeout limit reached")),
      timeLimit,
    );
  });

  return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
    clearTimeout(timeoutHandle);
    return result;
  });
};
