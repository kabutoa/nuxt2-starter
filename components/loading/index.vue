<template>
  <div class="app-loading">
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.app-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.loading {
  position: relative;
  width: 8px;
  height: 8px;
}

.loading > div {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  animation: loading-one 1s 0s ease infinite;
  background-color: #ffba00;
}

.loading > div:nth-child(1) {
  top: 0;
  left: 50%;
  z-index: 1;
}

.loading > div:nth-child(2) {
  top: 50%;
  left: 100%;
  z-index: 2;
  animation-name: loading-two;
}

.loading > div:nth-child(3) {
  top: 100%;
  left: 50%;
  z-index: 1;
  animation-name: loading-three;
}

.loading > div:nth-child(4) {
  top: 50%;
  left: 0;
  z-index: 2;
  animation-name: loading-four;
}

@keyframes loading-two {
  0% {
    opacity: 0.35;
  }

  50% {
    top: 200%;
    left: 200%;
    opacity: 1;
  }

  100% {
    top: 100%;
    left: 50%;
    z-index: 1;
    opacity: 0.35;
  }
}

@keyframes loading-one {
  0% {
    opacity: 0.35;
  }

  50% {
    top: -100%;
    left: 200%;
    opacity: 1;
  }

  100% {
    top: 50%;
    left: 100%;
    z-index: 2;
    opacity: 0.35;
  }
}

@keyframes loading-three {
  0% {
    opacity: 0.35;
  }

  50% {
    top: 200%;
    left: -100%;
    opacity: 1;
  }

  100% {
    top: 50%;
    left: 0;
    z-index: 2;
    opacity: 0.35;
  }
}

@keyframes loading-four {
  0% {
    opacity: 0.35;
  }

  50% {
    top: -100%;
    left: -100%;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 50%;
    z-index: 1;
    opacity: 0.35;
  }
}
</style>
