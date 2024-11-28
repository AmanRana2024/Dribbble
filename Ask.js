document.addEventListener('DOMContentLoaded', function() {
    var labels = document.querySelectorAll('form label.option');
    labels.forEach(function(label) {
        label.addEventListener('click', function() {
            var checkbox = label.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked; // Toggle checkbox state
        });
    });
});

