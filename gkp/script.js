function handleImageUpload() {
    const input = document.getElementById('image-input');
    const uploadedImage = document.getElementById('uploaded-image');
    const noImageMsg = document.getElementById('no-image-msg');
    
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        uploadedImage.src = e.target.result;
        uploadedImage.classList.remove('hidden');
        noImageMsg.classList.add('hidden');
      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  function detectWeapon() {
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    
    // Simulate weapon detection logic (mock)
    const weaponDetected = Math.random() < 0.5; // 50% chance for simulation
    
    resultDiv.classList.remove('hidden');
    if (weaponDetected) {
      resultText.textContent = 'Weapon Detected!';
      resultDiv.style.backgroundColor = '#d4edda';  // Green background
      resultDiv.style.borderColor = '#c3e6cb';
      resultText.style.color = '#155724'; // Dark green
    } else {
      resultText.textContent = 'No Weapon Detected.';
      resultDiv.style.backgroundColor = '#f8d7da';  // Red background
      resultDiv.style.borderColor = '#f5c6cb';
      resultText.style.color = '#721c24'; // Dark red
    }
  }
  