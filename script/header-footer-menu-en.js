document.getElementById("header").innerHTML = `
    <header class="header d-none d-md-block">
        <div class="ji-container-header">
          <div class="logo d-none d-lg-block">
            <a href="/en/main"><img src="../assets/img/ji-logo-horizontal-white.svg" width="240px" alt=""></a>
          </div>
            <a href="/en/main" class="d-block d-lg-none" >
              <svg width="34px" height="34px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1365 0H2.86348C1.28488 0 0 1.28488 0 2.86348V18.1365C0 19.7151 1.28488 21 2.86348 21H18.1365C19.716 21 21 19.7151 21 18.1365V2.86348C21 1.28488 19.716 0 18.1365 0ZM9.62241 14.6821C9.62241 15.3467 9.24706 15.9545 8.65165 16.2518L6.11117 17.5225V13.7796C6.11117 13.115 6.48652 12.5063 7.08193 12.209L9.62241 10.9392V14.6821ZM14.8897 12.0484C14.8897 12.713 14.5135 13.3209 13.919 13.619L11.3785 14.8888V6.31792C11.3785 5.6533 11.7538 5.04547 12.3483 4.74732L14.8897 3.47752V12.0484Z" fill="white"/>
              </svg>
              </a>
          <div class="header-links d-none d-md-block">
            <div class="d-flex">
              <div class=""><a href="trading" class="header-link">TRADING</a></div>
              <div class="ms-5"><a href="ipif" class="header-link"> MUTUAL FUNDS</a></div>
              <div class="ms-5"><a href="pension" class="header-link">PENSION</a> 
                <!-- <sup style="background-color: rgb(61, 197, 94); color: rgb(255, 255, 255);font-size: 11px; padding: 1px 6px 3px; border-radius: 12px;">new</sup> -->
              </div>
              <div class="ms-5"><a href="academy" class="header-link">ACADEMY</a></div>
    
              <div class="ms-5"><a href="radar" class="header-link"> Radar</a><sup style="background-color:  #F56148; color: rgb(255, 255, 255);font-size: 11px; padding: 1px 6px 3px; border-radius: 12px;"> Соцсеть</sup></div>
              
              <div class="ms-5">
                <div class='ji-drop-rel'>
                    <a class="dropdown-toggle header-link" style="border-bottom: 0px;" href="#" title="Menu">ENG</a>
                    <ul class="dropdown">
                    <li><a href="/" class="header-link" style="border-bottom: 0px;">RUS</a></li>
                    <li><a href="/kz/main" class="header-link" style="border-bottom: 0px;">KAZ</a></li>
                    </ul>
                </div>
              </div>
    
            </div>
          </div>
          <a href="start" class="d-none d-md-block">
            <div class="ji-btn ji-btn-pd ji-btn-primary">
                Open an account
            </div>
          </a>
        </div>
      </header>
    
      <header class="header d-block d-md-none" >
        <div class="topnav">
          <a href="/en/main"><img src="../assets/img/ji-header-logo.svg" alt="" width="40px"></a>
          <div id="myLinks" class="hide-mobileMenu">
            <div class="header-menu-mob">
            <div class="mobile-nav accordion mt-3" id="accordionExample">
              <div class="accordion-item">
                  <a href="trading" class="accordion-button collapsed">
                    <span class="mobile-nav__item">
                      <span class="mobile-nav__icon">
                         <img src="../assets/img/icons/trading.svg" alt="">    
                         <img class="img-hide" src="../assets/img/icons/trading-active.svg" alt="">    
                      </span>
                      TRADING
                    </span>
                  </a>
              </div>          
              <div class="accordion-item">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span class="mobile-nav__item">
                      <span class="mobile-nav__icon">
                         <img src="../assets/img/icons/pif.svg" alt="">    
                         <img class="img-hide" src="../assets/img/icons/pif-active.svg" alt="">    
                      </span>
                          MUTUAL FUNDS
                    </span>
                  </button>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <ul class="p-0">
                      <li class="p-0"><a href="ipif"> How do mutual funds work?</a></li>
                      <li><a href="allga">allGA</a></li>
                      <li><a href="abyroi">abyROI</a></li>
                      <li><a href="allem">allEM
</a></li>
                      <li><a href="harmoney">harMONEY</a></li>
                      <li><a href="dostar">doSTAR</a></li>
                    </ul>
                </div>
              </div>
              <div class="accordion-item">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <span class="mobile-nav__item">
                      <span class="mobile-nav__icon">
                         <img src="../assets/img/icons/pension.svg" alt="">    
                         <img class="img-hide" src="../assets/img/icons/pension-active.svg" alt="">    
                      </span>
                      Pension
                    </span> 
                  </button>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <ul class="p-0">                  
                      <li><a href="pension#pension1"> Benefits of Transfer to Jusan Invest JSC </a></li>
                      <li><a href="pension#pension2">Investment strategy</a></li>
                      <li><a href="pension#pension3">Profitability</a></li>
                      <li><a href="pension#pension4">How to transfer to Jusan Invest JSC?</a></li>
                      <li><a href="pension#pension5">FAQ</a></li>
                    </ul>
                </div>
              </div>
              <div class="accordion-item">
                    <a href="academy" class="accordion-button collapsed" style="font-size: 1rem; font-weight: 500;">
                      <span class="mobile-nav__item">
                        <span class="mobile-nav__icon">
                           <img src="../assets/img/icons/academy.svg" alt="">    
                           <img class="img-hide" src="../assets/img/icons/academy-active.svg" alt="">    
                        </span>
                        Academy
                      </span>
                    </a>
                </div>
                <div class="accordion-item">
                    <a href="radar" class="accordion-button collapsed" style="font-size: 1rem; font-weight: 500;">
                      <span class="mobile-nav__item">
                        <span class="mobile-nav__icon">
                           <img src="../assets/img/icons/radar.svg" alt="">    
                           <img class="img-hide" src="../assets/img/icons/radar-active.svg" alt="">    
                        </span>
                       <span> 
                        Radar
                        <sup style="background-color:  #F56148; color: rgb(255, 255, 255);font-size: 14px; padding: 1px 6px 3px; border-radius: 16px; font-weight: 400;"> Соцсеть</sup>
                       </span>
                      </span>
                    </a>
                </div>
                
                <div class="mobile-nav__lang">
                  <a href="/kz/main" class="mobile-nav__lang-link">KAZ</a>
                  <a href="/" class="mobile-nav__lang-link">RUS</a>
                  <a href="/en/main" class="mobile-nav__lang-link">ENG</a>
                </div>
            </div>
            <div class="onapp">
              <a href="https://play.google.com/store/apps/details?id=kz.tsb.app24&amp;hl=ru" target="_blank"> <img src="../assets/img/gplay-transparent.png" alt="google-play"></a>
              <a href="https://apps.apple.com/kz/app/j%C3%BDsan/id1441936010" target="_blank"> <img src="../assets/img/appstore-transparent.png" alt="app-store"></a>
          </div>
        </div>
          </div>
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    `;
document.getElementById("footer").innerHTML = `
<section class="section footer-nav">
<div class="container">
  <div class="row justify-content-between">
    <div class="col-3 ji-body">
      <div class="footer-color-h">FOR INVESTOR</div>
      <ul class="p-0">
          <li><a href="start" class="ji-link">Open an account</a></li>
          <li><a href="how-to-top-up" class="ji-link">Top up account</a></li>
          <li><a href="tariffs" class="ji-link">Tariffs</a></li>
        <li><a href="trading" class="ji-link">Brokerage service</a></li>
        <li><a href="platform" class="ji-link">Trading platform</a></li>
        <li><a href="documents" class="ji-link">Standard forms</a></li>
        <li><a href="academy" class="ji-link">Academy</a></li>
        <li><a href="radar">Radar</a></li>
        <li><a href="https://trading.jusaninvest.kz" class="ji-link">Web-platform</a></li>
      </ul>
    </div>
    <div class="col-3 ji-body">
      <div class="footer-color-h">MUTUAL FUNDS</div>
      <ul class="p-0">
        <li><a href="ipif" class="ji-link">How do mutual funds work?</a></li>
        <li><a href="allga" class="ji-link">allGA</a></li>
        <li><a href="abyroi" class="ji-link">abyROI</a></li>
        <li><a href="allem" class="ji-link">allEM
</a></li>
        <li><a href="harmoney" class="ji-link">harMONEY</a></li>
        <li><a href="dostar" class="ji-link">doSTAR</a></li>
      </ul>
    </div>
    <div class="col-3 ji-body">
      <div class="footer-color-h">PENSION</div>
      <ul class="p-0">
        <li><a href="pension#pension0" class="ji-link">How it works?</a></li>
        <li><a href="pension#pension1" class="ji-link">Benefits of Transfer to Jusan Invest JSC</a></li>
        <li><a href="pension#pension2" class="ji-link">Investment strategy</a></li>
        <li><a href="pension#pension3" class="ji-link">Profitability</a></li>
        <li><a href="pension#pension4" class="ji-link">How to transfer to Jusan Invest JSC?</a></li>
        <li><a href="pension#pension5" class="ji-link">FAQ</a></li>
      </ul>
    </div>
    <div class="col-3 ji-body">
      <div class="footer-color-h">INFORMATION</div>
      <ul class="p-0">
        <li><a href="about" class="ji-link">About company</a></li>
        <li><a href="corporate-documents" class="ji-link">Documents</a></li>
        <li><a href="about#managment" class="ji-link">Management</a></li>
        <li><a href="financial-statements" class="ji-link">Financial statements</a></li>
        <li><a href="company-news" class="ji-link">News</a></li>
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
          For investor
        </button>
      </div>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body ji-body-xs">
        <ul class="p-0">
            <li class="pt-0"><a href="start">Open an account</a></li>
            <li><a href="how-to-top-up">Top up account</a></li>
            <li><a href="tariffs">Tariffs</a></li>
          <li ><a href="trading">Brokerage service</a></li>
          <li><a href="platform">Trading platform</a></li>
          <li><a href="documents">Documents</a></li>
          <li><a href="academy">Academy</a></li>
          <li><a href="radar">Radar</a></li>
        <li><a href="https://trading.jusaninvest.kz">Web-platform</a></li>
        </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header ji-body-xs footer-color-h" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Mutual funds
        </button>
      </div>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body ji-body-xs">
          <ul class="p-0">
            <li class="p-0"><a href="ipif">How do mutual funds work?</a></li>
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
          PENSION 
          <!-- <sup style="background-color: rgb(61, 197, 94); color: rgb(255, 255, 255);font-size: 10px; padding:10px 8px 10px 8px; border-radius: 12px; margin-left: 5px;">new</sup> -->
        </button>
      </div>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body ji-body-xs">
          <ul class="p-0">
            <li class="p-0"><a href="pension#pension1">Benefits of Transfer to Jusan Invest JSC</a></li>
            <li><a href="pension#pension2">Investment strategy</a></li>
            <li><a href="pension#pension3">Profitability</a></li>
            <li><a href="pension#pension4">How to transfer to Jusan Invest JSC??</a></li>
            <li><a href="pension#pension5">FAQ</a></li>
          </ul>
          
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header ji-body-xs footer-color-h" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Information
        </button>
      </div>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body ji-body-xs">
          <ul class="p-0">
            <li class="p-0"><a href="about">About company</a></li>
            <li><a href="corporate-documents">Documents</a></li>
            <li><a href="about#managment">Management</a></li>
            <li><a href="financial-statements">Financial statements</a></li>
            <li><a href="company-news">News</a></li>
          </ul>
          
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header ji-body-xs footer-color-h" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Others
        </button>
      </div>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body ji-body-xs">
          <ul class="p-0">
            <li class="p-0"> <a href="consent-to-data-processing">Consent to the collection and processing of data</a></li>
            <li> <a href="disclaimer">Disclaimer</a></li>
          </ul>
        </div>
      </div>
    </div>        
  </div>
</div>
</section>
<section class="section footer-info">
<div class="container footer-info-c">
  <div class="d-flex flex-column flex-md-row justify-content-between align-items-center social">
    <div class="text-center text-md-start d-flex flex-row align-items-center social">
      <a class="social__icon" target="_blank" href="https://www.facebook.com/jusaninvestkz">
          <img src="../assets/img/icons/facebook-footer.svg" alt="facebook" class=" img-showsocial-svg">    
          <img src="../assets/img/facebook-footer.svg" alt="facebook" class="img-hide social-svg">   
      </a>
      <a class="social__icon" target="_blank" href="https://www.instagram.com/jusaninvestkz/">
          <img src="../assets/img/icons/instagram-footer.svg" alt="instagram" class="img-show social-svg">
          <img src="../assets/img/instagram-footer.svg" alt="instagram"  class="img-hide social-svg">
      </a>           
      <a class="social__icon" href="https://wa.me/+77072644000/?text=Добрый день!" target="_blank">
        <img src="../assets/img/icons/whatsapp-footer.svg" alt="whatsapp" class="img-show social-svg">                  
        <img src="../assets/img/icons//whatapp-footer-active.svg" alt="whatsapp" class="img-hide social-svg">                  
      </a>
      <a class="social__icon" target="_blank" href="https://t.me/jysaninvest">
        <img src="../assets/img/icons/telegram-footer.svg" alt="telegram" class="img-show social-svg">
        <img src="../assets/img/telegram-footer.svg" alt="telegram" class="img-hide social-svg">
      </a>  
      <a class="social__icon" target="_blank" href="https://www.youtube.com/channel/UCo2nrMAz-qALwXTqQslt2jA">
        <img src="../assets/img/icons/youtube-footer.svg" alt="youtube" class="img-show social-svg">
        <img src="../assets/img/youtube-footer.svg" alt="youtube" class="img-hide social-svg">
      </a>   
    </div>
    <div class="mt-md-0">
      <a href="https://apps.apple.com/kz/app/j%C3%BDsan/id1441936010" target="_blank"> <img src="../assets/img/app-store.svg" alt="" class=""></a>
      <a href="https://play.google.com/store/apps/details?id=kz.tsb.app24&amp;hl=ru" target="_blank" class="ms-4"> <img src="../assets/img/play-market.svg" alt=""></a>           
    </div>
  </div>        
</div>
<div class="container footer-copyright">
    <div class="footer-copyright-c d-flex flex-column-reverse justify-content-between align-items-start flex-md-row">
      <div class="d-flex flex-row mt-md-0">
        <img src="../assets/img/logo-copyright.svg" alt="" class="mb-auto mb-md-0 mt-1 mt-md-0">
        <div class="footer-copyright-text ms-2 ">
          <div class="ji-body-xs ji-cool_grey">Copyright © First Heartland Jusan Invest Joint Stock Company 2004-2023 • All rights reserved</div>
          <div class="ji-body-xs ji-cool_grey">
            ARDFM license № 3.2.239/16 from 25.06.2021 </div>
        </div>
      </div>
      <div class="footer-after-nav-text text-center d-none d-xs-block d-lg-block">
        <a href="consent-to-data-processing" class="ji-body-xs ms-2 ji-cool_grey ji-link">Consent to the collection and processing of data</a>
        <a href="disclaimer" class="ji-body-xs ms-2 ji-cool_grey ji-link">Disclaimer</a>
      </div>
    </div>
</div>
</section>

`