function countdown() {
  const startTime = Date.now()+1000; // Capture the time just before calling setTimeout

  // Log the expected execution time (1 second from now)
  console.log(
    `Expected execution in 1 second from: ${new Date(
      startTime
    ).toLocaleTimeString()}`
  );

  setTimeout(() => {
    const actualTime = Date.now(); // Capture the actual execution time
    const delay = actualTime - startTime; // Calculate the delay

    console.log(
      `Function executed at: ${new Date(actualTime).toLocaleTimeString()}`
    );
    console.log(
      `Delay between setTimeout call and function execution: ${delay}ms`
    );

    // Call countdown again after 1 second
    countdown();
  }, 1000);
}

countdown(); // Start the countdown
