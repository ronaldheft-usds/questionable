/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable max-len */
export const Header = (): JSX.Element => (
    <div>
      <a className="usa-skipnav" href="#main-content">Skip to main content</a>
      <section className="usa-banner" aria-label="Official government website">
          <div className="usa-accordion">
              <header className="usa-banner__header">
                  <div className="usa-banner__inner">
                      <div className="grid-col-auto">
                          <img className="usa-banner__header-flag" src="assets/img/uswds-icons/construction_worker.svg" alt="U.S. flag" />
                      </div>
                      <div className="grid-col-fill tablet:grid-col-auto">
                          <p className="usa-banner__header-text">
                              Not Functional / For Demonstration Purposes Only
                          </p>
                      </div>
                  </div>
              </header>
          </div>
      </section>

      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
          <div className="usa-nav-container">
              <div className="usa-navbar">
                  <div className="usa-logo" id="basic-logo">
                    <div className="mobile-lg:grid-col-auto">
                      <img className="height-10" src="assets/img/SBA-Logo-Horizontal-RGB.svg" alt="" />
                  </div>
                  </div>
                  <button className="usa-menu-btn">Menu</button>
              </div>
              <nav aria-label="Primary navigation" className="usa-nav">
                  <button className="usa-nav__close">
                    <img src="assets/img/usa-icons/close.svg" role="img" alt="Close" />
                  </button>
                  <ul className="usa-nav__primary usa-accordion">
                      <li className="usa-nav__primary-item">
                          <a href="landing.html" className="usa-nav__link">
                              <span>Home</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
    </div>
);
