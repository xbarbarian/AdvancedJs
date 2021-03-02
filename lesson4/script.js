let block = document.querySelector('.text');
        document.querySelector('.text-replace').addEventListener('click', () => {
            block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
        });