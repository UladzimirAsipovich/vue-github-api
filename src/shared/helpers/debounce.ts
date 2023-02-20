const Debounced: <T>(fn: T, wait?: number) => any = <T>(fn: T, wait = 200) => {
  let timer: ReturnType<typeof setTimeout>;
  return (params: unknown) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (typeof fn === "function") {
        fn(params);
      }
    }, wait);
  };
}

export default Debounced;
