window.addEventListener('message', (event) => {
    if (event.data.action === 'Notify') {
        createNotify(event.data.desc);
    }
});

function createNotify(desc) {
    const notifyHtml = `    <div class="notify">
        <div class="data">
            <div class="header">Powiadomienie</div>
            <div class="desc">${desc}</div>
        </div>
        <div class="icon">
            <i class="fa-solid fa-bell"></i>
        </div>
    </div>`


    let $notify = $(notifyHtml);

    $('.notify-container').append($notify)

    $notify.animate({'right': '0vw' }, 300)

    setTimeout(() => {
        $notify.animate({'right': '-20vw' }, 300)
        setTimeout(() => {
            $notify.remove();
        }, 300);
    }, 5000);
}
