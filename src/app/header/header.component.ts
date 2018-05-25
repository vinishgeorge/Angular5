import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private companyName:string="VG Corps";
  private width:number=100;
  private imgURL:string="../../assets/vg2.png";
  private toggleFlag:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
    if(this.toggleFlag){
      
      this.companyName="VG Corps";
      this.imgURL="../../assets/vg2.png";
    }else{
      this.companyName="VG Corp";
      this.imgURL="../../assets/vg.png";
    }
    this.toggleFlag=!this.toggleFlag;
  }

}
