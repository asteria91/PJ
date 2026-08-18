<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Find all table instances
    const cards = document.querySelectorAll('.sea-card');
    cards.forEach(function(card) {
      // Get the two content panels
      const textPanel = card.querySelector('.seatext-content');
      const imgPanel  = card.querySelector('.seaimg-content');
      if (!textPanel || !imgPanel) return;

      // Get the two navigation labels (icons)
      const textLabel = card.querySelector('.label-text');
      const imgLabel  = card.querySelector('.label-image');
      if (!textLabel || !imgLabel) return;

      // Remove the original 'for' attributes so they don't interfere
      textLabel.removeAttribute('for');
      imgLabel.removeAttribute('for');

      // Determine initial state from the radio buttons
      const radioText = card.querySelector('#tab-seatext');
      const radioImg  = card.querySelector('#tab-seaimage');
      let showText = true;
      if (radioText && radioImg) {
        showText = radioText.checked; // default is checked
      }

      // Function to switch tabs
      function showTab(showTextPanel) {
        if (showTextPanel) {
          textPanel.style.display = '';
          imgPanel.style.display = 'none';
          // Optional: add active class to labels for styling
          textLabel.classList.add('active');
          imgLabel.classList.remove('active');
        } else {
          textPanel.style.display = 'none';
          imgPanel.style.display = '';
          textLabel.classList.remove('active');
          imgLabel.classList.add('active');
        }
      }

      // Initial display
      showTab(showText);

      // Attach click events
      textLabel.addEventListener('click', function(e) {
        e.preventDefault();
        showTab(true);
      });
      imgLabel.addEventListener('click', function(e) {
        e.preventDefault();
        showTab(false);
      });
    });
  });
</script>