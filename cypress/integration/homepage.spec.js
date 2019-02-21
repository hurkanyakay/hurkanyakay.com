// / <reference types="Cypress" />

const urls = ['/work/bitcastfm']; // project links
const MenuNumber = 3;
const baseUrl = Cypress.config('baseUrl')

context('homepage', () => {
  before(()=>{
    cy.visit(baseUrl);
  })

  it('Header Buttons', () => {
    cy.get('#Headerbuttons')
      .children()
      .should('have.length', MenuNumber);
  });

  it('Main Big Title', () => {
    cy.get('#MainBigTitle').should('contain', 'Hürkan Yakay');
  });

  it('Scroll Button 1', () => {
    cy.get('#scrollButton1').should('contain', 'View Projects');
  });

  it('Projects Wrapper', () => {
    cy.get('#ProjectsWrapper')
      .children()
      .should('have.length', '4');
  });
  it('View Projects', () => {
    cy.get('#ViewProjects').should('contain', 'View all');
  });

  it('Scrolling', () => {
    cy.get('#ProjectsWrapper')
      .scrollIntoView()
      .should('be.visible')
  });
  it('Ham Menu', () => {
    cy.get('#HamburgerMenu').should('be.visible');
  });
  it('Ham Menu Open', () => {
    cy.get('#HamburgerMenu').click();
    cy.get('#MenuList').should('be.visible');
  });

  it('Navigate Projects', () => {
    cy.get('#MenuList > [href="/projects"]').click();
    cy.location('pathname').should('include', 'projects');
  });

  it('Projects Page', () => {
    cy.get('#PageTitle').should('contain', 'Projects');
  });

  it('Projects Wrapper', () => {
    cy.get('#ProjectsWrapper')
      .children()
      .should('be.gt', '9');

    cy.get('#ProjectsWrapper')
      .children()
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('have.attr', 'href')
          .then(href => {
            urls.push(href);
          });
      })
      .then(() => {});
  });

  it('404 Page', () => {
    cy.visit(`${baseUrl  }/404`);
    cy.get('#PageTitle').should('contain', '404');
  });
});

describe('Each Project', () => {
  urls.forEach(url => {
    it(`Should display footer on ${url} screen`, () => {
      cy.visit(baseUrl + url);
      cy.get('#PageTitle').should('be.visible');
    });
  });
});
