
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
// interface MyObject {
//   title: string;
//   note: string;
// }
@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss']
})
export class AddNoteDialogComponent implements OnInit {
    addData=new FormGroup({
      title:new FormControl(''),
      note: new FormControl('')
    })
   
  constructor(private userService: UserService,private router: Router) { }
    
  ngOnInit(): void {
  
  }

  saveNote(){
    console.log("object: ",this.addData.value)
    // this.userService.saveAllData(this.addData.value).subscribe((result)=>{
    //   console.log(result);
    // });
    // this.router.navigate(['home']);
    this.userService.saveAllData(this.addData.value);
  }

}