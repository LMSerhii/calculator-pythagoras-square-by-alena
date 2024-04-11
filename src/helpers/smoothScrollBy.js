export async function smoothScrollBy(x, y, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const targetX = startX + x;
  const targetY = startY + y;
  const startTime = performance.now();
  const endTime = startTime + duration;

  const easing = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  await new Promise(resolve => {
    function step() {
      const now = performance.now();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        window.scroll(targetX, targetY);
        resolve();
        return;
      }

      const progress = 1 - remainingTime / duration;
      const easedProgress = easing(progress);

      const newX = startX + (targetX - startX) * easedProgress;
      const newY = startY + (targetY - startY) * easedProgress;

      window.scroll(newX, newY);

      if (now >= endTime) {
        resolve();
        return;
      }

      requestAnimationFrame(step);
    }

    step();
  });
}
