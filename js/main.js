'use strict'

$(onInit)
$('.submit-btn').click(sendEmail)

function onInit() {
    var projects = getProj()
    renderPortfolio(projects)
    renderPopup(projects)
}

function renderPortfolio(projects) {
    var strHTML = projects.map(proj =>
        `   <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#${proj.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid little-img" src="img/new portfolio/${proj.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`)
    $("#portfolio-container").html(strHTML)

}

function renderPopup(projects) {
    var strHTML = projects.map(proj => `
        <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                    <!-- Project Details Go Here -->
                                    <h2>${proj.name}</h2>
                                    <p class="item-intro text-muted">${proj.title}</p>
                                    <img class="img-fluid d-block mx-auto" src="img/new portfolio/${proj.id}.png" alt="">
                                        <p>${proj.desc}</p>
                                        <ul class="list-inline">
                                            <li><a href="${proj.url}" target="_blank"><button class="btn btn-primary mb-2">Check it Out</button></li></a>
                                            <li>Date: ${proj.publishedAt}</li>
                                            <li>Client: Threads</li>
                                            <li>Category: ${proj.labels}</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fa fa-times"></i>
                                            Close Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )
    $("#modal-container").html(strHTML)
}

function sendEmail() {
    var emailAdress = $('#email-adress').val().trim()
    var subject = $('#subject').val().trim()
    var message = $('#message').val().trim()
    open('https://mail.google.com/mail/?view=cm&fs=1&to='+emailAdress+'&su='+subject+'&body = '+message)
}
