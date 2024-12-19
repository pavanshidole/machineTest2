import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../module/stdTable';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  stdArray:Array<Istudent>=[
    // {
    //   fname:'pavan',
    //   lname:'shidole',
    //   email:'ps@gmail.com',
    //   contact:1234567890,
    //   id:'1234',
    // }
  ]


  @ViewChild('fname') fname !:ElementRef;
  @ViewChild('lname') lname !:ElementRef;
  @ViewChild('email') email !:ElementRef;
  @ViewChild('contact') contact !:ElementRef;

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(){
    let newStd:Istudent={
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id:this.uuid()
    }
    
    this.fname.nativeElement.value='';
    this.lname.nativeElement.value='';
    this.email.nativeElement.value='';
    this.contact.nativeElement.value='';
    this.stdArray.push(newStd);
  }

}
