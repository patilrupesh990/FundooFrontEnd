import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/userservice.service';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { UserModel } from 'src/app/model/User.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  userName;
  ownerName;
  noteId
  users:UserModel[];
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private userService:UserService,private collaboratorService:CollaboratorService,private matSnackBar:MatSnackBar) { 
    this.noteId=data.noteId;
  }

  ngOnInit() {
    this.userName=sessionStorage.uname;
    this.ownerName=sessionStorage.response
    this.getCollaboratorsList();
    this.collaboratorService.autoRefresh$.subscribe(()=>{
        this.getCollaboratorsList();
    });
  }

  writeEmail(email){
     this.collaboratorService.addCollaborator(email,this.noteId).subscribe(data=>{
 
      this.matSnackBar.open(data.response,"OK",{duration:3000});
     })
  }

  getCollaboratorsList(){
    this.collaboratorService.getCollaboratorList(this.noteId).subscribe(data=>{
      console.log("collaborators list:",data.users);
      this.users=data.users;
    })
  }

  removeColab(userid){
    this.collaboratorService.removeCollaborator(this.noteId,userid).subscribe(data=>{
      this.matSnackBar.open(data.response,"OK",{duration:3000});
    })
  }
}
