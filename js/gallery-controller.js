'use strict';

$('document').ready(initPage);

function initPage() {
    renderProjs();
}


function renderProjs() {
    var projs = getProjs();
    var strHTMLs = projs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
          <a id="${proj.id}" class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal(this.id)">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg">
          </a>
          <div class="portfolio-caption">
            <h6>${proj.name}</h4>
            <p class="text-muted">${proj.labels.join(' ')}</p>
          </div>
        </div>`
    })
    $('.projects').html(strHTMLs.join(''));
}