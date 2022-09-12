import { Component, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { UserService } from './user.service';
interface type{
  title:string;
  note:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Note-Project';
  searchNote:any;
  isSearch=false;
  noteData:any='';
  allNoteValue:type[]=[];
  showAllNoteData:type[]=[];
  constructor(public dialog: MatDialog,
    private userService: UserService
    ){}
  
  ngOnInit(): void {
    // this.userService.getAll().subscribe((allData)=>{
    //   console.warn("received service data: ",allData);
    //   this.noteData=allData;
    // });
    this.allNoteValue=this.showAllNoteData;
     this.showAllNoteData= JSON.parse(localStorage.getItem('saveData') || '{}');
     console.log("show all data: ",this.showAllNoteData);
     this.allNoteValue=this.showAllNoteData;
  }
  addNoteModal(){
    const dialogRef=this.dialog.open(AddNoteDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      if(this.noteData!=this.userService.getAll()){
      this.noteData=this.userService.getAll();
      console.log("data from service: ",this.noteData);
      this.allNoteValue.push(this.noteData);
      localStorage.setItem("saveData", JSON.stringify(this.allNoteValue));
      this.showAllNoteData= JSON.parse(localStorage.getItem('saveData') || '{}');
      console.log("all note value: ",this.allNoteValue);
      console.log("show all data: ",this.showAllNoteData);
      }
    });
    this.ngOnInit();
  }
  deleteUser(noteTitle:any){
    console.log("delete title note : ",noteTitle);
    this.allNoteValue.forEach((element,index)=>{
      if(element.title==noteTitle) {
        this.allNoteValue[index].title='';
        this.allNoteValue[index].note='';
      }
   });
   localStorage.setItem("saveData", JSON.stringify(this.allNoteValue));
   this.showAllNoteData= JSON.parse(localStorage.getItem('saveData') || '{}');
   console.log("all note value delete section: ",this.allNoteValue);

  }
  noteSearch(){
    console.log("search Note: ",this.searchNote);
    // if(this.searchNote=='') this.isSearch=false;
    // else this.isSearch=true;
    if (this.searchNote != '') {
      this.allNoteValue = this.allNoteValue.filter((res) => {
        return res.title.match(this.searchNote);
      });
    } else if (this.searchNote == '') {
      this.ngOnInit();
    }
  }
}
