const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

// A profile photo is optional. Add assets/profile.jpg to display it automatically.
const profilePhoto = document.querySelector('#profile-photo');
const photoPlaceholder = document.querySelector('#photo-placeholder');
profilePhoto.addEventListener('load', () => {
  profilePhoto.hidden = false;
  photoPlaceholder.hidden = true;
});
profilePhoto.addEventListener('error', () => {
  profilePhoto.hidden = true;
  photoPlaceholder.hidden = false;
});
profilePhoto.src = 'assets/profile.jpg';

document.querySelector('#year').textContent = new Date().getFullYear();
