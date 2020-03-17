// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  userApiURL:'http://localhost:8086/users',

  registerURL:'register',
  loginURL:'login',
  userActivURL:'register/activ',
  forgotPasswordURL:'verify-user',
  resetPasswordURL:'reset-password',

  notesApiURL:'http://localhost:8088/notes',
  createNote:'create',
  trashNote:'trash',
  pinNote:'pin',
  getpinnedNotes:'pinned/notes',
  getNotes:'allnotes',
  updateNotes:'update',
  deleteNote:'delete',
  archiveNote:'archive',
  getTrashNotes:'trash/notes',
  getArchiveNotes:'archive/notes',
  addcolor:'notes/color',
  addreminder:'notes/reminder',

  labelApiURL:'http://localhost:8088/labels',
  getLabels:'note/lable',
  getLabelsList:'label',
  addLabel:'add',
  getNotesByLabelId:'notes',
  getLabelsByNoteId:'note/lable',
  createLabel:'create',
  deleteLabel:'delete',

  
  collaboratorApi:'http://localhost:8086/collaborators',
  addCollaborator:'add',
  getCollaborator:'users',
  removecolaborator:'remove',

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
