const onDragStart = (e, setMousePos)=> {
  console.log('start drag');
  const elem = e.target;
  const parent = elem.parentElement;
  const mouse = { x: e.pageX, y: e.pageY };

  setMousePos(mouse);

  if(elem.classList.contains('draggable') && parent.dataset.draggable) {
    console.log(parent.dataset.draggable);
    parent.classList.add('dragging');
  }
};

const onDrag = (e, mouse = { x: 0, y: 0}) => {
  console.log('dragging', mouse);
  const elem = e.target;
  const parent = elem.parentElement;
  const parentStyle = getComputedStyle(parent);
  const parentLeft = parentStyle.getPropertyValue('left').replace(/\D/g, '');
  const parentTop = parentStyle.getPropertyValue('top').replace(/\D/g, '');

  if(elem.classList.contains('draggable') && parent.classList.contains('dragging')) {
    parent.style.position = 'absolute';
    parent.style.left = `${ e.offsetX }px`;
    parent.style.top = `${ e.offsetY }px`;
  }

  console.log(`
    Computed: ${ parentLeft }, ${ parentTop }
    offset: ${ parent.offsetLeft }, ${ parent.offsetTop }
  `);
};

const onDragEnd = (e) => {
 console.log('stop drag');
  const elem = e.target;
  const parent = elem.parentElement;

  console.log('elem ', elem);
  console.log('parent ', parent);


  if(elem.classList.contains('draggable') && parent.classList.contains('dragging')) {
    parent.classList.remove('dragging');
    console.log('remove drag status');
  }
};

const setupEvents = () => {
  document.addEventListener('mousedown', onDragStart, false);
  document.addEventListener('mousemove', onDrag, false);
  document.addEventListener('mouseup', onDragEnd, false);
};

module.exports = {
  onDragStart,
  onDrag,
  onDragEnd,
  setupEvents
};
