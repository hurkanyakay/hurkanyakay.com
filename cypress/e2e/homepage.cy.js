// / <reference types="Cypress" />

const MenuNumber = 3;
const baseUrl = Cypress.config('baseUrl')
// const resume = require('../../src/data/resume.json')
// const urls = resume[0].experience.filter((e) => e.projectLink ).map(e => e.projectLink)
const urls = [
  "/project/yoreevo",
  "/project/availyst",
  "/project/baumeister",
  "/project/bitcastfm",
];

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

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
    cy.get('#MenuList [href="/projects"]').click();
    cy.location('pathname').should('include', 'projects');
  });

  it('Projects Page', () => {
    cy.get('#PageTitle').should('contain', 'Projects');
  });

  it('Projects Wrapper', () => {
    cy.get('#ProjectsWrapper')
      .children()
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('have.attr', 'href')
      })
  });

  it('404 Page', () => {
    cy.visit(`${baseUrl  }/404`);
    cy.get('#PageTitle').should('contain', '404');
  });

  it('Resume Page', () => {
    cy.visit(`${baseUrl  }/cv`);
    cy.get('#PageTitle').should('contain', 'Résumé');
  });

});

describe('Each Project', function()
{
    urls.forEach(url => {
      it(`Should display footer on ${url} screen`, () => {
        this.timeout(5000);
        cy.visit(baseUrl + url);
        cy.get('#PageTitle').should('be.visible');
      });
    });
})