
export const snapToGrid = ({ x, y }, { width, height }) => {
  const snapX = Math.floor(x / width) * width;
  const snapY = Math.floor(y / height) * height;

  return { x: snapX, y: snapY };
};

const drawGrid = (
  ctx,
  canvas,
  pixel = { width: 8, height: 8, scale: 1 },
  color = 'rgba(150, 150, 150, 0.75)'
) => {
  let x = 0;
  let y = 0;
  const pixelWidth = pixel.width * pixel.scale;
  const pixelHeight = pixel.height * pixel.scale;

   if(canvas.width % (pixel.width * pixel.scale) !== 0 || canvas.height % (pixel.height * pixel.scale) !== 0) {
    console.log('canvas width and height are not multiple of pixel width and height');
    console.log(`Canvas - width: ${canvas.width}, height: ${canvas.height}`);
    console.log(`Pixel - width: ${pixel.width}, height: ${pixel.height}, scale: ${pixel.scale}`);
    console.log(`Suggest canvas size
      width: ${ canvas.width + (canvas.width % (pixelWidth)) }
      height ${ canvas.height + (canvas.height % (pixelHeight)) }
    `);

    return false;
  }

  ctx.beginPath();
  ctx.strokeStyle = color;

  while(x <= canvas.width) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    x += pixelWidth;
  }

  while(y <= canvas.height) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    y += pixelHeight;
  }

  ctx.stroke();
};

const getMousePos = (canvas, e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  return { x, y };
};

const drawPixel = (ctx, mouse, pixel) => {
  const pixelWidth = pixel.width * pixel.scale;
  const pixelHeight = pixel.width * pixel.scale;
  // const snapX = Math.floor(mouse.x / pixelWidth) * pixelWidth;
  // const snapY = Math.floor(mouse.y / pixelHeight) * pixelHeight;
  const { x, y } = snapToGrid(mouse, { width: pixelWidth, height: pixelHeight });
  ctx.fillStyle = pixel.color;
  if(pixel.color == 'eraser') {
    ctx.clearRect(x, y, pixelWidth, pixelHeight);
  } else {
    ctx.fillRect(x, y, pixelWidth, pixelHeight);
  }

  return { x, y: y, pixelWidth, pixelHeight, color: pixel.color };
};

const savePixelInfo = (pixel = { x: 0, y: 0, w: 0, h: 0, c: 0 }, data = []) => {
  data.push({ x: pixel.x, y: pixel.y, w: pixel.w, h: pixel.h, c: pixel.c });
};

const saveCanvas = (canvas = document.createElement('canvas')) => {
  const ctx = canvas.getContext('2d');
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = image.data;

  return data;
};

const getCanvasData = (canvas = document.createElement('canvas'))=> {
  return canvas.toDataURL();
};

const restoreCanvas = (canvas = document.createElement('canvas'), dataURL) => {
  let img = new Image();
  let ctx = canvas.getContext('2d');
  img.src = dataURL;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return { canvas, dataURL };
};

const groupBy = (arr, num = 4) => {
  let start = 0;
  let newArr = [];
  let temp = Array.from(arr);

  for(let i = 0; i < temp.length + 1; i++) {
    if(i !== 0 && i % num === 0) {
      newArr.push(temp.slice(start, i));
      start = i;
    }
  };

  return newArr;
};

const indexPixels = (arr) => {
  return arr.map(pixels => {
    return pixels.indexOf(255);
  });
};

const convertToBitPlane = (arr) => {
  // first bit plane
  const firstPlane = arr.map(inner => {
    return inner.map(item => {
      switch(item) {
        case -1:
          return 0;
        case 0:
          return 0;
        case 1:
          return 1;
        case 2:
          return 1;
        default:
          return item;
      }
    });
  });

  // second bit plane
  const secondPlane = arr.map(inner => {
    return inner.map(item => {
      switch(item) {
        case -1:
          return 0;
        case 0:
          return 1;
        case 1:
          return 0;
        case 2:
          return 1;
        default:
          return item;
      }
    });
  });

  return { firstPlane, secondPlane };
};

const planesToBinary = (firstPlane, secondPlane) => {
  let fp = firstPlane.map(arr => {
    let end = arr.join('').replace(/,/g, '');
    let bin = `0b${ end }`;
    return bin;
  });
  let sp =secondPlane.map(arr => {
    let end = arr.join('').replace(/,/g, '');
    let bin = `0b${ end }`;
    return bin;
  });

  return [].concat(fp).concat(sp);
};

const getChrFromCanvas = (canvas = document.querySelector('canvas'), pixel = { width: 8, height: 8, scale: 2 }) => {
  const indexed = indexPixels(groupBy(saveCanvas(scaleCanvas(canvas, pixel))));
  const bitsMap = groupBy(indexed, 8);
  const bitplanes = convertToBitPlane(bitsMap);
  const binaryPlanes = [].concat(groupBy(bitplanes.firstPlane, 8)).concat(groupBy(bitplanes.secondPlane, 8));
  const binary = planesToBinary(binaryPlanes[0], binaryPlanes[1]);

  return binary;
};

const scaleCanvas = (canvas, pixel = { width: 8, height: 8, scale: 1 }) => {
  const savedImage = canvas.toDataURL();
  const scaleCanvas = document.createElement('canvas');
  const scaleCtx = scaleCanvas.getContext('2d');
  const scaledImage = new Image();

  scaledImage.src = savedImage;

  scaleCanvas.width = canvas.width / (pixel.width * pixel.scale);
  scaleCanvas.height = canvas.height / (pixel.height * pixel.scale);

  scaleCtx.drawImage(scaledImage, 0, 0, 8, 8);

  return scaleCanvas;
};

const defaultPalette = {
    0: {
      name: 'white',
      hex: 0x30,
      web: '#ffffff',
      rgb: [255, 255, 255]
    },
    1: {
      name: 'midPinkPurple',
      hex: 0x20,
      web: '#e562ff',
      rgb: [229, 98, 255]
    },
    2: {
      name: 'midOrange',
      hex: 0x10,
      web: '#ff8300',
      rgb: [255, 131, 0]
    },
    3: {
      name: '0FBlack',
      hex: 0x0F,
      web: '#000',
      rgb: [0, 0, 0]
    }
  };

const applyPalette = (canvas = document.createElement('canvas'), palette = defaultPalette) => {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let data = imageData.data;
  let paletteIndex = 0;

  // iterate by 4 (rgba)
  for(let i = 0; i < data.length; i += 4) {
    if(data[i] === 255) {
      // index color 0
      paletteIndex = 0;
    }

    if(data[i + 1] === 255) {
      paletteIndex = 1;
    }

    if(data[i + 2] === 255) {
      paletteIndex = 2;
    }

    if(data[i + 3] === 0) {
      // transparent
      paletteIndex = 3;
    }

    data[i] = palette[paletteIndex].rgb[0]; // red
    data[i + 1] = palette[paletteIndex].rgb[1]; // blue
    data[i + 2] = palette[paletteIndex].rgb[2]; // green
    data[i + 3] = 255; // alpha
  }

  return imageData;
};

module.exports = {
  snapToGrid,
  drawGrid,
  drawPixel,
  getCanvasData,
  restoreCanvas,
  saveCanvas,
  scaleCanvas,
  getMousePos,
  groupBy,
  indexPixels,
  convertToBitPlane,
  planesToBinary,
  getChrFromCanvas,
  savePixelInfo,
  applyPalette
}
