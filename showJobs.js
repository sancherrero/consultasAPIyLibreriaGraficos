const jobsContainer = document.getElementById("contenedor");

const mostrarJobs = (datos) => {
    const hastag = datos.replace(/\s/g, "");
    const html = `
    <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                      <div class="mainflip">
                          <div class="frontside">
                              <div class="card">
                                  <div class="card-body text-center">
                                      <h4 class="card-title">${datos}</h4>
                                      <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div class="backside">
                              <div class="card">
                                  <div class="card-body text-center mt-4">
                                      <h4 class="card-title">Hashtag #${hastag}</h4>                                    
                                      <ul class="list-inline">
                                          <li class="list-inline-item">
                                              <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                  <i class="fa fa-facebook"></i>
                                              </a>
                                          </li>
                                          <li class="list-inline-item">
                                              <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                  <i class="fa fa-twitter"></i>
                                              </a>
                                          </li>
                                          <li class="list-inline-item">
                                              <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                  <i class="fa fa-skype"></i>
                                              </a>
                                          </li>
                                          <li class="list-inline-item">
                                              <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                  <i class="fa fa-google"></i>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      `;
    jobsContainer.insertAdjacentHTML("beforeend", html);
  }

  export {mostrarJobs};