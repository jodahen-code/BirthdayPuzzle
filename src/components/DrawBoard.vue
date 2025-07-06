<template>
  <div class="board-container">
    <canvas
      ref="canvas"
      width="600"
      height="400"
      @mousedown="startDrawing"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @mousemove="draw"
    ></canvas>
    <button @click="clearCanvas" class="cool-button">neues Bild anfangen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawing: false,
      ctx: null,
      lastX: 0,
      lastY: 0,
    }
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#fff';
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true;
      const rect = this.$refs.canvas.getBoundingClientRect();
      this.lastX = event.clientX - rect.left;
      this.lastY = event.clientY - rect.top;
    },
    stopDrawing() {
      this.isDrawing = false;
    },
    draw(event) {
      if (!this.isDrawing) return;

      const rect = this.$refs.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      this.lastX = x;
      this.lastY = y;
    },
    clearCanvas() {
      const canvas = this.$refs.canvas;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
  },
}
</script>

<style scoped>
.board-container {
  text-align: center;
  margin-top: 20px;
}
canvas {
  border: 1px solid #ccc;
  cursor: crosshair;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
}
</style>
