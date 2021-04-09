const modal = () => {
  const button = document.querySelector('#folderBtn');
  if (button) {
    button.addEventListener('click', function() {
      console.log('111');
    });
  }
};

export default modal;
