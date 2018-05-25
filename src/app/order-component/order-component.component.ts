import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  private oDish:string;
  private oTable:number;
  private breakfastDishList:Array<string>= new Array("Garlic Bread","Cheese Ommlette","Chicken Burger","Apple Juice");
  private breakfastPriceList:Array<number>= new Array(50,100,150,100);
  private lunchDishList:Array<string>= new Array("Biriyani","Chicken Tandoor","Murg Mussalam","Mojito");
  private dishList:Array<string>=new Array();
  private menuTitle:string;
  private index:number=0;
  private cnt:number=0;
  private toggleFlag:boolean=false;
  private stopStart:string="Start Toggle"
  private timer:any;
  private selectedDish:string;
  private myStyle:Object;
  private colorCode:string;
  constructor() { 
   
  
  }

  ngOnInit() {
    this.oDish="Maggie";
    this.oTable=1;
    
    
  }

  toggleMenu(){
    if(this.toggleFlag){
      clearInterval(this.timer);
      this.stopStart="Start toggle";
    }else{
      this.setTimer();
      this.stopStart="Stop toggle";
    }

    this.toggleFlag=!this.toggleFlag;
  }

  setTimer(){
    this.timer=setInterval(()=>{
      if(this.cnt%2==0){
        this.menuTitle="Breakfast Menu";
        this.dishList=this.breakfastDishList;
      }else{
        this.menuTitle="Lunch Menu";
        this.dishList=this.lunchDishList;
      }
      this.cnt++;
    },2000);  
  }

  selectDish(dish){
    this.selectedDish=dish;
  }

  setStyle(){
    this.myStyle={
      'font-size':'15px',
      'color':this.setRandomColor(),
      'font-style':'italic'
    }
  }

  setRandomColor(){
    var colArr=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
     this.colorCode="#";
    for(let i=0;i<6;i++){
      this.colorCode+=colArr[Math.floor(Math.random()*10)];
    }

    return this.colorCode;
  }
}
