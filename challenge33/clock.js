const clock = () => {
  setInterval(() => {
    const date = new Date();
    const hours =
      date.getHours().toString().length < 2
        ? `0${date.getHours()}`
        : date.getHours();
    const minutes =
      date.getMinutes().toString().length < 2
        ? `0${date.getMinutes()}`
        : date.getMinutes();
    const seconds =
      date.getSeconds().toString().length < 2
        ? `0${date.getSeconds()}`
        : date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
};

clock();
