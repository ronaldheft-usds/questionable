/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable max-len */
export const Footer = (): JSX.Element => (
  <div>
    <footer className="usa-footer">
      <div className="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer__primary-section">

      </div>

      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div className="mobile-lg:grid-col-auto">
                <img className="height-10" src="assets/img/SBA-Logo-Horizontal-RGB.svg" alt="" />
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <h3 className="usa-footer__contact-heading">
                SBA Answer Desk
              </h3>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:1-800-827-5722"> 800-827-5722</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:answerdesk@sba.gov">
                      answerdesk@sba.gov
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
