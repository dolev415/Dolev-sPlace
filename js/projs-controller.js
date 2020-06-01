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

function renderModal(projId) {
    var proj = getProjById(projId);
    var strHTML = `<h2><a href="${proj.url}" target="_blank">${proj.name}</a></li></h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg">
    <p>${proj.desc}</p>
    <ul class="list-inline">
      <li>Date: ${proj.publishedAt}</li>
      <li>Client: <a href="${proj.url}" target="_blank">${proj.url}</a></li>
      <li>Category: <span class="badge badge-secondary">${proj.labels.join('</span> <span class="badge badge-secondary">')}</span></li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>`
    $('.modal-body').html(strHTML);
}

function sendMail() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$('#email').val()}&su=${$('#subject').val()}&body=${$('#msgbody').val()}`);
    $('#email').val('');
    $('#subject').val('');
    $('#msgbody').val('');
}