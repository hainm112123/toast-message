var icons = {
    success: 'fa-solid fa-circle-check',
    info: 'fa-solid fa-circle-info',
    warning: 'fa-solid fa-circle-exclamation',
    error: 'fa-solid fa-circle-exclamation',
};

function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000,
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        var timeoutId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        toast.onclick = function(position) {
            if (position.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(timeoutId);
            }
            // console.log(position.target);
        }

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${(duration/1000).toFixed(1)}s forwards`;
        
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title"> ${title} </h3> 
                <p class="toast__msg"> ${message} </p>
            </div>
        
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;  

        main.appendChild(toast);  
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Any one with access can view your invited visitors',
        type: 'success',
        duration: 5000,
    });
}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Any one with access can view your invited visitors',
        type: 'info',
        duration: 5000,
    });
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Any one with access can view your invited visitors',
        type: 'warning',
        duration: 5000,
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Any one with access can view your invited visitors',
        type: 'error',
        duration: 5000,
    });
}