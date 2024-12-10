// postcss.config.js
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  plugins: [
    autoprefixer, // Добавление автопрефиксов
    cssnano, // Минификация CSS
  ],
};
