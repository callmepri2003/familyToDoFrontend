describe('The Dashboard Page', () => {
  
    it('displays all of the user\'s remaining tasks', function () {
        // Log in as the user
        cy.login("tester", "boilingplate1");
      
        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
        
        cy.intercept('GET', '/tasks/?username=tester', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allTasksInitial.json',
        }).as('getAllTasks');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
          
        cy.visit('/');

        cy.wait('@getAllFamilyMembers');
        cy.wait('@getAllTasks');

        cy.get('.task-item').should('contain.text', 'Get basket from door');

    });
      
  
    it('removes tasks that have been completed', function () {
        cy.login("tester", "boilingplate1");
      
        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
        
        cy.intercept('GET', '/tasks/?username=tester', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allTasksInitial.json',
        }).as('getAllTasks');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
          
        cy.visit('/');

        cy.wait('@getAllFamilyMembers');
        cy.wait('@getAllTasks');


        cy.get('.row').click();

        cy.intercept('GET', "tasks/11/reject_task/", {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/rejectTask.json'
        }).as('rejectTask');

        cy.intercept('GET', "/tasks/?username=tester", {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allTasksAfterRejection.json'
        }).as('getAllTasksAfterRejection');

        cy.get(':nth-child(2) > p').click();

        cy.get('.textContainer').should('have.css', 'backgroundColor', 'rgb(203, 76, 78)'); // RGB for red

        cy.get('a > div').should('exist');

        cy.get('a > div').click();

        cy.get('.task-item').should('not.exist');
    })

    it('removes tasks that have been completed', function () {
        cy.login("tester", "boilingplate1");
      
        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
        
        cy.intercept('GET', '/tasks/?username=tester', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allTasksInitial.json',
        }).as('getAllTasks');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');

        cy.intercept('GET', '/familyMembers/', {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allFamilyMembers.json',
        }).as('getAllFamilyMembers');
          
        cy.visit('/');

        cy.wait('@getAllFamilyMembers');
        cy.wait('@getAllTasks');


        cy.get('.row').click();

        cy.intercept('GET', "tasks/11/complete_task/", {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/completeTask.json'
        }).as('completeTask');

        cy.intercept('GET', "/tasks/?username=tester", {
            headers: { 'cache-control': 'no-cache' },
            fixture: 'dashboard-page/allTasksAfterComplete.json'
        }).as('getAllTasksAfterRejection');

        cy.get(':nth-child(3) > p').click();

        cy.get('.textContainer').should('have.css', 'backgroundColor', 'rgb(177, 221, 158)'); // RGB for green

        cy.get('a > div').should('exist');

        cy.get('a > div').click();

        cy.get('.task-item').should('not.exist');
    })
  
  })
  