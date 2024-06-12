const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mcu.db');

// Mock data for projects
const projectsData = [
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
  { projectCount: '123', projectName: 'Project A', projectClient: '1', clientName: 'Client A', projectStatus: 'Active', projectComment: 'This is a sample project' },
  { projectCount: '456', projectName: 'Project B', projectClient: '2', clientName: 'Client B', projectStatus: 'Completed', projectComment: 'This is another sample project' },
  { projectCount: '789', projectName: 'Project C', projectClient: '3', clientName: 'Client C', projectStatus: 'Inactive', projectComment: 'This is a third sample project' },
];

// Mock data for clients
const clientsData = [
  { clientName: 'Client A', clientAddress: '123 Main St', isClient: true, isContractor: false },
  { clientName: 'Client B', clientAddress: '456 Oak Rd', isClient: true, isContractor: true },
  { clientName: 'Client C', clientAddress: '789 Elm St', isClient: true, isContractor: false },
  { clientName: 'Client A', clientAddress: '123 Main St', isClient: true, isContractor: false },
  { clientName: 'Client B', clientAddress: '456 Oak Rd', isClient: true, isContractor: true },
  { clientName: 'Client C', clientAddress: '789 Elm St', isClient: true, isContractor: false },
  { clientName: 'Client A', clientAddress: '123 Main St', isClient: true, isContractor: false },
  { clientName: 'Client B', clientAddress: '456 Oak Rd', isClient: true, isContractor: true },
  { clientName: 'Client C', clientAddress: '789 Elm St', isClient: true, isContractor: false },
  { clientName: 'Client A', clientAddress: '123 Main St', isClient: true, isContractor: false },
  { clientName: 'Client B', clientAddress: '456 Oak Rd', isClient: true, isContractor: true },
  { clientName: 'Client C', clientAddress: '789 Elm St', isClient: true, isContractor: false },
  { clientName: 'Client A', clientAddress: '123 Main St', isClient: true, isContractor: false },
  { clientName: 'Client B', clientAddress: '456 Oak Rd', isClient: true, isContractor: true },
  { clientName: 'Client C', clientAddress: '789 Elm St', isClient: true, isContractor: false },
];

db.serialize(() => {
  // Insert mock data into the projects table
  const projectsInsertStmt = db.prepare(`
    INSERT INTO projects (projectCount, projectName, projectClient, clientName, projectStatus, projectComment)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  for (const project of projectsData) {
    projectsInsertStmt.run(
      project.projectCount,
      project.projectName,
      project.projectClient,
      project.clientName,
      project.projectStatus,
      project.projectComment
    );
  }

  projectsInsertStmt.finalize();

  // Insert mock data into the clients table
  const clientsInsertStmt = db.prepare(`
    INSERT INTO clients (clientName, clientAddress, isClient, isContractor)
    VALUES (?, ?, ?, ?)
  `);

  for (const client of clientsData) {
    clientsInsertStmt.run(
      client.clientName,
      client.clientAddress,
      client.isClient,
      client.isContractor
    );
  }

  clientsInsertStmt.finalize();

  console.log('Mock data inserted successfully!');
});

db.close();
