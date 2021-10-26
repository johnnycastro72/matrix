"use strict";
const main = () => {
    let
      canvas = document.querySelector('canvas'),
      context = canvas.getContext('2d'),
      w = window.innerWidth,
      h = window.innerHeight,
      fontsize = 16,
      columns = Math.floor(w/fontsize),
      drops = [],
      str = 'JavaScript Matriz Effect',
      matrix = () => {
          context.fillStyle = 'rgba(0,0,55,.05)';
          context.fillRect(0,0,w,h);
          context.fontsize = `650 ${fontsize}px`;
          context.fillStyle = '#ff0';
          for (let i=0; i < columns; i++ ) {
              let
                j = Math.floor(Math.random()*str.length),
                x = i*fontsize,
                y = drops[i]*fontsize;
              context.fillText(str[j],x,y);
              y >= canvas.height && Math.random() > 0.99
              ? drops[i]=0
              : drops[i]++;
          }
      };
      canvas.width = w;
      canvas.height = h;
      for (let i=0; i < columns; i++) {
        drops.push(0);
      };
      matrix(); setInterval(matrix, 15);
}; document.addEventListener('DOMContentLoaded', main);