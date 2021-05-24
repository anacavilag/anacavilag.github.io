(function () {
    const showImageElements = document.querySelectorAll('a.show-image');
    const modalShowImage = document.getElementById('modal-show-image');
    const bsModalShowImage = new bootstrap.Modal(modalShowImage);
    showImageElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const modalTitle = modalShowImage.querySelector('.modal-title');
            modalTitle.textContent = el.title;
            const img = modalShowImage.querySelector('img');
            img.src = el.href;
            bsModalShowImage.show();
        });
    });
    
    const showPdfElements = document.querySelectorAll('a.show-pdf');
    const modalShowPdf = document.getElementById('modal-show-pdf');
    const bsModalShowPdf = new bootstrap.Modal(modalShowPdf);
    showPdfElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const modalTitle = modalShowPdf.querySelector('.modal-title');
            modalTitle.textContent = el.title;
            const iframe = modalShowPdf.querySelector('iframe');
            iframe.src = el.href;
            bsModalShowPdf.show();
        });
    });
})();