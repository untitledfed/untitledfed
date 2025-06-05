function downloadFile() {
  const link = document.createElement('a');
  link.href = '../../files/uc-extension-v1.0.zip';
  link.download = 'uc-extension-v1.0.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}