document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project').forEach(function (project) {
        project.addEventListener('click', function () {
            const url = project.getAttribute('onclick').match(/'(.*)'/)[1];
            window.location.href = url;
        });
    });
});
