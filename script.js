function flip() {
    const images = [
      "https://assets.onecompiler.app/42mfmb35b/42xp4n2un/image0%20(1).png",
      "https://assets.onecompiler.app/42mfmb35b/42xp4n2un/image0%20(2).png"
    ];
    
    const coin = document.getElementById("coin");
    
    // Add the flipping animation class
    coin.classList.add("flip");
    
    // Change the image after the flip animation completes
    setTimeout(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      coin.src = randomImage;

      // Remove the flip class to reset the animation for the next click
      coin.classList.remove("flip");
    }, 600); // Delay matches the animation duration
  }