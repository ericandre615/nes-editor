import { getChrFromCanvas } from '../../lib/sprite-functions';

const contextMenuItems = [
  {
    id: 1,
    title: 'Save as...',
    onSelect(e) {
      const canvas = document.getElementById('sprite-canvas');
      const binary = getChrFromCanvas(canvas, this.props.pixel); 
      console.log(binary);

      fetch('http://localhost:9800/api/sprite', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: binary, name: 'sprite1' })
      })
      .then(res => {console.log(res)})
      .then(null, err => {console.log(err)});
    }
  },
  {
    id: 2,
    title: 'Export as...',
    onSelect(e) {
      const canvas = document.getElementById('sprite-canvas');
      const dataURL = canvas.toDataURL();

      window.location.href = dataURL;
      console.log('Exported Sprite ', dataURL);
    }
  },
  {
    id: 3,
    title: 'Set Attributes',
    onSelect(e) {
      console.log('Set Attb state');
      // TODO: fix this
      this.setState({ showSpriteAttrs: true });
    }
  }
];

export default contextMenuItems;
