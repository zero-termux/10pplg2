function updateTime() {
      var time = new Date();
      var hours = String(time.getHours()).padStart(2, '0');
      var minutes = String(time.getMinutes()).padStart(2, '0');
      var seconds = String(time.getSeconds()).padStart(2, '0');
      var formattedTime = hours + ' : ' + minutes + ' : ' + seconds;
      document.getElementById('waktu').innerHTML = formattedTime;
    }
    
    setInterval(updateTime, 1000);
    
    
    

window.addEventListener('scroll', muncul);
function muncul() {
  let elements = document.querySelectorAll('.element');
  for (let i = 0; i < elements.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    let ukuranScroll = 50;
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add('tampil');
    }
    else {
      elements[i].classList.remove('tampil');
    }
  }
}


window.addEventListener('scroll', function() {
  let atsElement = document.querySelector('.ats');
  if (window.scrollY > 400) {
    atsElement.style.display = 'flex';
  } else {
    atsElement.style.display = 'none';
  }
});

// Ketika tombol ats ditekan
let atsButton = document.querySelector('.ats');
atsButton.addEventListener('click', function() {
  let homeSection = document.getElementById('home');
  homeSection.scrollIntoView({ behavior: 'smooth' });
});



// lightbox js
  let carouselImages = document.querySelectorAll('.carousel-item img');
  let lightbox = document.getElementById('lightbox');
  let lightboxImg = document.getElementById('lightbox-img');
  let closeBtn = document.querySelector('.close');

  carouselImages.forEach(function(image) {
 
    image.addEventListener('click', function() {
      lightbox.style.display = 'flex';
      lightboxImg.src = this.src;
    });
  });

  // Tombol close pada lightbox
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  
  
  
  // js dropdown 
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener('click', function (event) {
        const currentDropdown = this.parentElement.querySelector('.dropdown-menu');
        const allDropdownToggles = document.querySelectorAll('.dropdown-toggle');

        if (this.id === 'aktif') {
          this.removeAttribute('id');
          allDropdownToggles.forEach(function (dropdownToggle) {
            dropdownToggle.style.display = '';
          });
        } else {
          
          
          allDropdownToggles.forEach(function (dropdownToggle) {
            if (dropdownToggle !== toggle) {
              dropdownToggle.style.display = 'none';
            }
          });
          
          this.id = 'aktif';
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.dropdown-toggle')) {
        dropdownToggles.forEach(function (dropdownToggle) {
          dropdownToggle.removeAttribute('id');
          dropdownToggle.style.display = '';
        });
      }
    });
  });