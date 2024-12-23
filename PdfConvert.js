// PdfConvert.js

// Toggle between light and dark modes
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Initialize conversion
const fileInput = document.getElementById('fileInput');
const convertButton = document.getElementById('convertButton');
const conversionType = document.getElementById('conversionType');
const outputMessage = document.getElementById('outputMessage');
const downloadLink = document.getElementById('downloadLink');

convertButton.addEventListener('click', () => {
  const file = fileInput.files[0];
  const convertTo = conversionType.value;

  if (!file) {
    outputMessage.textContent = 'Please select a file to convert!';
    return;
  }

  const fileType = file.name.split('.').pop().toLowerCase();
  if ((fileType === 'pdf' && convertTo === 'docx') || (fileType === 'docx' && convertTo === 'pdf')) {
    outputMessage.textContent = `Converting ${fileType.toUpperCase()} to ${convertTo.toUpperCase()}...`;

    // Simulate a download link
    setTimeout(() => {
      const blob = new Blob([`Converted ${file.name} to ${convertTo.toUpperCase()}`], { type: 'text/plain' });
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.style.display = 'block';
      downloadLink.textContent = `Download ${convertTo.toUpperCase()} File`;
      outputMessage.textContent = 'Conversion successful!';
    }, 2000);
  } else {
    outputMessage.textContent = 'Unsupported file type for this conversion.';
  }
});

// Light mode styles
document.body.classList.add('dark-mode'); // Initialize with dark mode

const lightModeStyles = `
  body.light-mode {
    --bg-color: #ffffff;
    --text-color: #000000;
    --button-bg: #007bff;
    --button-text: #ffffff;
    --input-bg: #f8f9fa;
    --input-border: #ced4da;
    --highlight-color: #007bff;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent =
