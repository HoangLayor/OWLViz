function copyToClipboard() {
  const citationText = document.getElementById('citation-text').textContent;
  const button = document.getElementById('copy-button');
  
  navigator.clipboard.writeText(citationText).then(function() {
    // Simple feedback
    button.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Copied!
    `;
    button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
    button.classList.add('bg-green-500');
    
    setTimeout(function() {
      button.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
        Copy
      `;
      button.classList.remove('bg-green-500');
      button.classList.add('bg-blue-500', 'hover:bg-blue-600');
    }, 1500);
  }).catch(function(err) {
    console.error('Could not copy text: ', err);
    alert('Failed to copy citation. Please copy manually.');
  });
}

function showTab(tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab content
  const selectedContent = document.getElementById(tabName + '-tab');
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
  
  // Add active class to clicked button
  const selectedButton = event.target.closest('.tab-button');
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
}

// Initialize first tab as active on page load
document.addEventListener('DOMContentLoaded', function() {
  showTab('vlms');
});
