const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  //   console.log(counter);
  counter.innerHTML = 0;

  const updateCounter = () => {
    //data in string thats why we have to convert in number
    // +counter unary operator string to number
    const targetCount = +counter.getAttribute('data-target');
    // console.log(targetCount);
    const startingCount = Number(counter.innerHTML);
    const incr = targetCount / 100;
    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  updateCounter();
});
