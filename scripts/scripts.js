
document.addEventListener('DOMContentLoaded', function () {

    var gridCells = document.querySelectorAll('.anim');
    var anchorDiv = document.getElementById('title-div');
    var loremIpsumAnchor = document.querySelector('#title-div a');

    gridCells.forEach(function (item) {
        item.addEventListener('click', doABarrellRoll);
    });

    anchorDiv.addEventListener('click', function () {

        loremIpsumAnchor.click();
    });
});

function doABarrellRoll() {

    this.classList.add('roll');

    this.addEventListener('animationend', function () {
        this.classList.remove('roll');
    }), { once: true };
};
