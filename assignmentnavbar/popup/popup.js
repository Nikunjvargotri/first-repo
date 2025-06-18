 const openModalButton = document.querySelector('.open-modal-btn');
 const modal = document.querySelector('.modal');
 const closeBtn = document.querySelector('.close-btn');
 openModalBtn.addEventListener('click', () => {
  modal.classList.add('active');
 });
 closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
 });
 window.addEventListener('click', (event) => {
  if (event.target === modal) {
 modal.classList.remove('active');
  }
 });
 // Example using operators
//  let modalCount = 0;
//  openModalBtn.addEventListener('click', () => {
//   modalCount++;
//   console.log(`Modal opened ${modalCount} time(s)`);
//   if (modalCount >= 3) {
//  console.log('Modal opened too many times!');
//   }
//  })