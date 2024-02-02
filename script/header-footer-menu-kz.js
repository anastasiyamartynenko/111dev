document.getElementById("header").innerHTML = `

<header class="bg-white visible">
   <div class="container">
    <div class="uk-navbar-container tm-navbar-container uk-sticky" >
      <div class="container uk-container-expand">
        <nav class="" uk-dropnav="mode: click">
          <div class="uk-flex nav-top">
            <div class="uk-navbar-left">
              <a href="/kz/main" class="d-lg-block"><img src="./../assets/img/icons/ji-logo.svg"  alt="logo"></a>
            </div>
            <div class="uk-navbar-right">  
              <div class="lang-contact d-flex uk-flex-between uk-flex-middle">
                <div class="uk-inline">
                  <button class="uk-button btn-language" type="button">KZ</button>
                  <div uk-dropdown="pos: top-left" class="nav-language">
                    <ul class="uk-nav uk-dropdown-nav">
                      <li><a href="/"><div class="bag-lang">RU</div> орыс</a></li>
                      <li><a href="/kz/main"><div class="bag-lang">KZ</div> қазақша</a></li>                
                    </ul>
                  </div>
                </div>
                <div class="contact"><a href="https://www.jusaninvest.kz/kz/contacts" class="uk-icon-button contact-btn" uk-icon="location"></a></div>
              </div>  
              <a class="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon" uk-navbar-toggle-icon href="#offcanvas" uk-toggle="target: #offcanvas-flip"></a>          
            </div>
          </div>
            <ul class="uk-subnav header-links-cont uk-visible@m">
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/tariffs" class="header-links"><img src="../assets/img/tariff-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/tariff-icon.svg" alt=""> Тарифтер</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/demo" class="header-links"><img src="../assets/img/icon-demo.svg" alt=""><img class="img-hide" src="../assets/img/hover/icon-demo.svg" alt="">Демо-счет</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/ipif" class="header-links"><img src="../assets/img/pif-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/pif-icon.svg" alt=""> ИПҚ-лар</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/pension" class="header-links"><img src="../assets/img/icon-pension.svg" alt=""> <img class="img-hide" src="../assets/img/hover/icon-pension.svg" alt="">Зейнетақы активтері</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/academy" class="header-links"><img src="../assets/img/academy-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/academy-icon.svg" alt=""> Academy</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/junior" class="header-links"><img src="../assets/img/junior-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/junior-icon.svg" alt=""> Junior</a></li> 
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/kz/radar" class="header-links"><img src="../assets/img/radar-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/radar-icon.svg" alt=""> Radar</a></li>
              <li class="uk-parent"><a href="https://www.jusaninvest.kz/analytic" class="header-links"><img src="../assets/img/idea_icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/idea_icon.svg" alt=""> Аналитика</a></li> 
              <li class="uk-parent"><a href="#" class="header-links"><img src="../assets/img/more-icon.svg" alt=""><img class="img-hide" src="../assets/img/hover/more-icon.svg" alt=""> Көбірек</a>
              <div class="uk-dropdown header-links-dropdown">
                  <div class="uk-child-width-1-2 uk-flex" >
                      <div>
                          <ul class="uk-nav uk-dropdown-nav">
                              <li class="ji-midle header-links-link">Ивестору</li>
                              <li><a href="https://trading.jusaninvest.kz" class="ji-body-s ji-link">Веб-платформа</a></li>
                              <li><a href="https://www.jusaninvest.kz/kz/how-to-top-up" class="ji-body-s ji-link">Көбірек</a></li>
                              <li><a href="https://www.jusaninvest.kz/kz/trading" class="ji-body-s ji-link">Трейдинг</a></li>
                              <li><a href="https://www.jusaninvest.kz/kz/gift-shares" class="ji-body-s ji-link">Акция сыйлау</a></li>
                          </ul>
                      </div>
                      <div>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="ji-midle header-links-link">Информация</li>
                            <li><a href="https://www.jusaninvest.kz/kz/about" class="ji-body-s ji-link">Компания туралы</a></li>                 
                            <li><a href="https://www.jusaninvest.kz/kz/company-news" class="ji-body-s ji-link">Жаңалықтар</a></li>
                            <li><a href="https://www.jusaninvest.kz/kz/corporate-documents" class="ji-body-s ji-link">Құжаттар</a></li>  
                            <li><a href="https://www.jusaninvest.kz/kz/esg" class="ji-body-s ji-link">ESG </a></li>
                            <li><a href="https://www.jusaninvest.kz/kz/contacts" class="ji-link ji-body-s">Байланысу үшін </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>            
        </nav>
      </div>
    </div>
  </div>  
</header>
    <header id="scroll-header" class="header scroll-block">
      <div class="container bg-white">
        <div class="">
          <div class="uk-flex-middle uk-flex-between d-flex header-logo">

            <div class="logo">
              <a href="/" class="d-lg-block"><img src="../assets/img/icons/ji-logo.svg"  alt="logo"></a>
              <a href="/" class="d-lg-none" >
                <svg width="34px" height="34px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1365 0H2.86348C1.28488 0 0 1.28488 0 2.86348V18.1365C0 19.7151 1.28488 21 2.86348 21H18.1365C19.716 21 21 19.7151 21 18.1365V2.86348C21 1.28488 19.716 0 18.1365 0ZM9.62241 14.6821C9.62241 15.3467 9.24706 15.9545 8.65165 16.2518L6.11117 17.5225V13.7796C6.11117 13.115 6.48652 12.5063 7.08193 12.209L9.62241 10.9392V14.6821ZM14.8897 12.0484C14.8897 12.713 14.5135 13.3209 13.919 13.619L11.3785 14.8888V6.31792C11.3785 5.6533 11.7538 5.04547 12.3483 4.74732L14.8897 3.47752V12.0484Z" fill="white"/>
                </svg>
              </a>
            </div>
            <a uk-toggle="target: #modal-example" class="ji-btn-border-org">
              <div class="btn-open">
              Брокерлік шот ашыңыз
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>   
    
    
    <!-- nav menu offcanvas-->
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true" class="uk-offcanvas" tabindex="-1">
        <div class="uk-offcanvas-bar" role="dialog" aria-modal="true">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <div class="uk-panel">
                <div class="mobile-nav">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <div class="accordion-header footer-color-h ji-body-xs">
                                <a href="https://www.jusaninvest.kz/kz/tariffs" class="header-links d-flex">
                                    <img src="../assets/img/tariff-icon.svg" alt="" /><img class="img-hide-tp" src="../assets/img/hover/tariff-icon.svg" alt="" />
                                    <span>Тарифтер</span>
                                </a>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <div class="accordion-header footer-color-h ji-body-xs">
                                <a href="https://www.jusaninvest.kz/demo" class="header-links d-flex">
                                    <img src="../assets/img/icon-demo.svg" alt=""><img class="img-hide-tp" src="../assets/img/hover/icon-demo.svg" alt="">
                                    <span>Демо-счет</span>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h">
                                <a href="https://www.jusaninvest.kz/kz/academy" class="header-links d-flex" style="font-size: 1rem; font-weight: 500;">
                                    <img src="../assets/img/academy-icon.svg" alt=""><img class="img-hide-tp" src="../assets/img/hover/academy-icon.svg" alt="">
                                    <span>Academy</span>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h" id="headingTwo">
                                <button class="header-links accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <img src="../assets/img/pif-icon.svg" alt="" /><img class="img-hide-tp" src="../assets/img/hover/pif-icon.svg" alt="" />
                                   <span>ИПҚ-лар</span>  
                                </button>
                            </div>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body ji-body-xs">
                                    <ul class="p-0">
                                        <li class="p-0"><a href="ipif">ИПҚ-лар қалай жұмыс істейді?</a></li>
                                        <li><a href="allga">allGA</a></li>
                                        <li><a href="abyroi">abyROI</a></li>
                                        <li><a href="allem">allEM</a></li>
                                        <li><a href="harmoney">harMONEY</a></li>
                                        <li><a href="dostar">doSTAR</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h" id="headingFive">
                                <button class="accordion-button collapsed header-links" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                   <img src="../assets/img/icon-pension.svg" alt=""> <img class="img-hide-tp" src="../assets/img/hover/icon-pension.svg" alt="">
                                   <span>Pension</span>     
                                </button>
                            </div>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body ji-body-xs">
                                    <ul class="p-0">
                                        <li class="p-0"><a href="pension#pension1">«Jusan Invest» АҚ-ға аударудың артықшылықтары</a></li>
                                        <li><a href="pension#pension2">Инвестициялау стратегиясы</a></li>
                                        <li><a href="pension#pension3">Табыс</a></li>
                                        <li><a href="pension#pension4">«Jusan Invest» АҚ-ға қалай аударуға болады?</a></li>
                                        <li><a href="pension#pension5">Жиі қойылатын сұрақтар</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h" >
                                <a href="https://www.jusaninvest.kz/kz/junior" class="header-links d-flex" style="font-size: 1rem; font-weight: 500;">
                                    <img src="../assets/img/junior-icon.svg" alt="" /><img class="img-hide-tp" src="../assets/img/hover/junior-icon.svg" alt="" />
                                    <span>Junior</span>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h">
                                <a href="https://www.jusaninvest.kz/kz/radar" class="header-links d-flex" style="font-size: 1rem; font-weight: 500;">
                                    <img src="../assets/img/radar-icon.svg" alt="" /><img class="img-hide-tp" src="../assets/img/hover/radar-icon.svg" alt="" />
                                    <span>Radar</span>
                                </a>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header ji-body-xs footer-color-h">
                                <a href="https://www.jusaninvest.kz/analytic" class="header-links d-flex" style="font-size: 1rem; font-weight: 500;">
                                    <img src="../assets/img/idea_icon.svg" alt=""><img class="img-hide-tp" src="../assets/img/hover/idea_icon.svg" alt="">
                                    <span>Аналитика</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END-- nav menu offcanvas-->
    


<div id="modal-example" uk-modal>
        <div class="modal-content modal-qr modal-new uk-modal-dialog uk-modal-body"> 
            <div class="modal-header">   
                <button type="button" class="uk-modal-close btn-close close"></button>
             </div>  
            <div class="modal-body">
                <img src="../assets/img/gift-shares/qr.svg" alt="qr">
                <div class="info-block">
                <p class="info-block-title">Камераны QR-кодқа қаратыңыз</p><p class="info-block-text">Jusan мобильді қосымшасын жүктеп алу үшін</p>
                </div>
            </div> 
        </div>
    </div>  

    `;

    document.getElementById("footer").innerHTML = `
    <section class="section footer-nav">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 ji-body">
          <div class="footer-color-h">ИНВЕСТОРҒА</div>
          <ul class="p-0">
            <li><a href="start" class="ji-link">Шот ашу</a></li>
            <li><a href="how-to-top-up" class="ji-link">Шотты толтыру</a></li>
            <li><a href="tariffs" class="ji-link">Тарифтер</a></li>
            <li><a href="trading" class="ji-link">Брокерлік қызмет көрсету</a></li>
            <li><a href="platform" class="ji-link">Сауда платформасы</a></li>
            <li><a href="magazine" class="ji-link">Журналдар</a></li>
            <li><a href="academy" class="ji-link">Academy</a></li>
            <li><a href="https://trading.jusaninvest.kz" class="ji-link">Веб-платформа</a></li>
            <li><a href="radar" class="ji-link">Radar</a></li>
            <li><a href="https://www.jusaninvest.kz/kz/ipo.html" class="ji-link">IPO</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="footer-color-h">ИПҚ-лар</div>
          <ul class="p-0">
            <li><a href="ipif" class="ji-link">ИПҚ-лар қалай жұмыс істейді?</a></li>
            <li><a href="allga" class="ji-link">aIIGA</a></li>
            <li><a href="abyroi" class="ji-link">abyROI</a></li>
            <li><a href="allem" class="ji-link">allEM
</a></li>
            <li><a href="harmoney" class="ji-link">harMONEY</a></li>
            <li><a href="dostar" class="ji-link">doSTAR</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="footer-color-h">ЗЕЙНЕТАҚЫ АКТИВТЕРІ</div>
          <ul class="p-0">
            <li><a href="pension#pension0" class="ji-link">Зейнетақы активтері туралы не білу керек?</a></li>
            <li><a href="pension#pension1" class="ji-link">«Jusan Invest» АҚ-ға аударудың артықшылықтары</a></li>
            <li><a href="pension#pension2" class="ji-link">Инвестициялау стратегиясы</a></li>
            <li><a href="pension#pension3" class="ji-link">Табыс</a></li>
            <li><a href="pension#pension4" class="ji-link">«Jusan Invest» АҚ-ға қалай аударуға болады?</a></li>
            <li><a href="pension#pension5" class="ji-link">Жиі қойылатын сұрақтар</a></li>
          </ul>
        </div>
        <div class="col-3 ji-body">
          <div class="footer-color-h">АҚПАРАТ</div>
          <ul class="p-0">
            <li><a href="about" class="ji-link">Компания туралы</a></li>
            <li><a href="corporate-documents" class="ji-link">Құжаттар</a></li>
            <li><a href="about#managment" class="ji-link">Басқару</a></li>
            <li><a href="financial-statements" class="ji-link">Қаржы есебі</a></li>
          <!-- <li><a href="otchety-predstavitelya-derzhateley-obligaciy">Отчеты ПДО</a></li> -->
            <li><a href="company-news" class="ji-link">Жаңалықтар</a></li>
            <li><a href="esg" class="ji-link leaf">ESG </a></li>
            <li><a href="contacts" class="ji-link">Байланысу үшін</a></li>
          </ul>
        </div>
      </div>
    </div>
</section>

<section class="section footer-nav-mobile">
    <div class="container container-max_1240">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <div class="accordion-header footer-color-h ji-body-xs" id="headingOne">
            <button class="accordion-button check-accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Инвесторға
            </button>
          </div>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
            <ul class="p-0">
              <li class="pt-0"><a href="start">Шот ашу</a></li>
              <li><a href="how-to-top-up">Шотты толтыру</a></li>
              <li><a href="tariffs">Тарифтер</a></li>
              <li><a href="trading">Брокерлік қызмет көрсету</a></li>
              <li><a href="platform">Сауда платформасы</a></li>
              <!-- <li><a href="documents">Типтік формалар</a></li> -->
              <li><a href="magazine" class="ji-link">Журналдар</a></li>
              <li><a href="academy">Academy</a></li>
              <li><a href="radar">Radar</a></li>
              <li><a href="https://trading.jusaninvest.kz">Веб-платформа</a></li>
            </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ИПҚ-лар
            </button>
          </div>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="ipif">ИПҚ-лар қалай жұмыс істейді?</a></li>
                <li><a href="allga">allGA</a></li>
                <li><a href="abyroi">abyROI</a></li>
                <li><a href="allem">allEM
</a></li>
                <li><a href="harmoney">harMONEY</a></li>
                <li><a href="dostar">doSTAR</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Зейнетақы активтері
            </button>
          </div>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="pension#pension1">«Jusan Invest» АҚ-ға аударудың артықшылықтары</a></li>
                <li><a href="pension#pension2">Инвестициялау стратегиясы</a></li>
                <li><a href="pension#pension3">Табыс</a></li>
                <li><a href="pension#pension4">«Jusan Invest» АҚ-ға қалай аударуға болады?</a></li>
                <li><a href="pension#pension5">Жиі қойылатын сұрақтар</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Ақпарат
            </button>
          </div>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"><a href="about">Компания туралы</a></li>
                <li><a href="corporate-documents">Құжаттар</a></li>
                <li><a href="about#managment">Басқару</a></li>
                <li><a href="financial-statements">Қаржы есебі</a></li>
               <!-- <li><a href="otchety-predstavitelya-derzhateley-obligaciy">Отчеты ПДО</a></li> -->
                <li><a href="company-news">Жаңалықтар</a></li>
                <li><a href="esg" class="leaf">ESG</a></li>                    
                <li><a href="contacts">Байланысу үшін</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header ji-body-xs footer-color-h" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
               Басқа
            </button>
          </div>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body ji-body-xs">
              <ul class="p-0">
                <li class="p-0"> <a href="consent-to-data-processing">Мәліметтерді жинауға және өңдеуге келісім беру</a></li>
                <li> <a href="disclaimer">Дисклеймер</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>


<section > <!--footer-info section -->
    <div class="container"> <!--footer-info-c -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center social new">
        <div class="d-flex flex-column flex-md-row text-center text-md-start align-items-md-center ji-body-m-15-b">
            <a class="d-flex align-items-center ji-cool_grey ji-link" href="https://wa.me/+77072644000/?text=Добрый день!" target="_blank">
              <img src="../assets/img/index/whatsapp.svg" alt="whatsapp">
              <span class="ms-2">+7 (707) 264 4000           </span>    
            </a>
            <a class="d-flex align-items-center ji-cool_grey ji-link ms-md-4 mt-2 mt-md-0" href="mailto:info@jusaninvest.com" target="_blank">
              <img src="../assets/img/index/mailing.svg" alt="mail">
              <span class="ms-2">info@jusaninvest.com          </span>    
            </a>
        </div>
        <div class="d-flex">
          <a class="social__icon" target="_blank" href="https://www.facebook.com/jusaninvestkz">
            <img src="../assets/img/icons/facebook-footer.svg" alt="facebook" class="img-showsocial-svg">    
            <img src="../assets/img/facebook-footer.svg" alt="facebook" class="img-hide social-svg">   
          </a> 
          <a class="social__icon ms-3" target="_blank" href="https://www.instagram.com/jusaninvestkz/">
              <img src="../assets/img/icons/instagram-footer.svg" alt="instagram" class="img-show social-svg">
              <img src="../assets/img/instagram-footer.svg" alt="instagram"  class="img-hide social-svg">
          </a>
          <a class="social__icon ms-3" target="_blank" href="https://t.me/jysaninvest">
            <img src="../assets/img/icons/telegram-footer.svg" alt="telegram" class="img-show social-svg">
            <img src="../assets/img/telegram-footer.svg" alt="telegram" class="img-hide social-svg">
          </a>  
          <a class="social__icon ms-3" target="_blank" href="https://www.youtube.com/channel/UCo2nrMAz-qALwXTqQslt2jA">
            <img src="../assets/img/icons/youtube-footer.svg" alt="youtube" class="img-show social-svg">
            <img src="../assets/img/youtube-footer.svg" alt="youtube" class="img-hide social-svg">
          </a>        
        </div>
      </div>        
    </div>
      <div class="container footer-copyright">
        <div class="d-flex flex-column-reverse justify-content-between align-items-start flex-md-row"> <!--footer-copyright-c-->
          <div class="footer-copyright-text">
              <div class="ji-body-xxs ji-cool_grey"> “First Heartland Jusan Invest” Акционерлік Қоғамы 2004-2023  <br> ҚНРДА №3.2.239/16 лицензиясы, 25.06.2021 жыл   </div>
            </div>
          <div class="footer-after-nav-text text-center d-none d-xs-block d-lg-block">
            <a href="disclaimer" class="ji-body-xs ms-2 ji-cool_grey ji-link">Дисклеймер</a>
            <a href="consent-to-data-processing" class="ji-body-xs ms-2 ji-cool_grey ji-link">Мәліметтерді жинауға және өңдеуге келісім беру</a>
          </div>
        </div>
      </div>
    </section>
`