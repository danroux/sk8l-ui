describe('Unschedulable CronJobs, Jobs, and Pods', () => {
  const namespace = 'sk8l';

  const cases = [
    {
      name: 'unschedulable-nodeselector',
      messageSnippet: 'node affinity/selector',
      assertSidebar: () => {
        cy.contains('.BorderGrid-cell', 'Spec').within(() => {
          cy.contains('nodeSelector:').should('be.visible');
          cy.contains('sk8l.io/does-not-exist=true').should('be.visible');
        });
      },
    },
    {
      name: 'unschedulable-resources',
      messageSnippet: 'Insufficient cpu',
      assertSidebar: () => {
        cy.contains('.BorderGrid-cell', 'Resources').within(() => {
          cy.contains('worker').should('be.visible');
          cy.contains('Requests:').should('contain', 'cpu=9999').and('contain', 'memory=9999Gi');
          cy.contains('Limits:').should('contain', 'cpu=9999').and('contain', 'memory=9999Gi');
        });
      },
    },
  ];

  it('shows Unschedulable badge and status on the CronJobs list page', () => {
    cy.visit('/');

    cases.forEach(({ name }) => {
      cy.get(`#cronjob-${name}`, { timeout: 15000 }).within(() => {
        cy.get('.Label.Label--attention').should('contain', 'Unschedulable');
        cy.get('.status-row .item-pop--attention').should('exist');
        cy.get('.status-row').should('contain', 'Unschedulable');
      });
    });
  });

  cases.forEach(({ name, messageSnippet, assertSidebar }) => {
    describe(`CronJob ${name}`, () => {
      it('aligns ProgressBar, Overview, JobCounter, JobRow, and sidebar details', () => {
        cy.visit(`/cronjob/${namespace}/${name}`);

        // ProgressBar: amber 100% bar + legend
        cy.get('.Progress .Progress-item.color-bg-attention-emphasis', { timeout: 15000 })
          .should('be.visible')
          .and('have.attr', 'style')
          .and('include', 'width: 100%');
        cy.contains('Unschedulable 100%').should('be.visible');
        cy.contains('Active 0%').should('be.visible');

        // Overview Active Jobs tile: 0 active + amber icon + "1 unschedulable"
        cy.contains('li', 'Active Jobs').within(() => {
          cy.get('svg.octicon-issue-draft.color-fg-attention').should('exist');
          cy.get('.h5').should('contain', '0');
          cy.get('span.color-fg-attention').should('contain', '1 unschedulable');
        });

        // JobCounter: amber 1 counter, blue 0 active counter
        cy.contains('.Box-header', 'Jobs').within(() => {
          cy.get('.Counter.color-bg-attention-emphasis').should('contain', '1');
          cy.get('.Counter.color-bg-accent-emphasis').should('contain', '0');
        });

        // JobRow: attention border, badge, scheduling message, footer status
        cy.get('li.job-row.Box-row--attention').first().within(() => {
          cy.get('.Label.Label--attention').should('contain', 'Unschedulable');
          cy.get('.job-unschedulable-condition')
            .should('contain', 'Unschedulable:')
            .and('contain', messageSnippet);
          cy.get('.job-row-footer .status-row .item-pop--attention').should('exist');
          cy.get('.job-row-footer .status-row').should('contain', 'Unschedulable');
        });

        // Sidebar: nodeSelector or Resources (Requests & Limits)
        assertSidebar();
      });

      it('shows Unschedulable status and message on the Pods page', () => {
        cy.visit(`/cronjob/${namespace}/${name}/pods/`);

        cy.get('li.Box-row.Box-row--attention', { timeout: 15000 }).first().within(() => {
          cy.contains('Status: Unschedulable').should('be.visible');
          cy.contains('Message:').should('contain', messageSnippet);
          cy.get('.status-row .item-pop--attention').should('exist');
          cy.get('.status-row').should('contain', 'Unschedulable');
        });
      });
    });
  });
});
