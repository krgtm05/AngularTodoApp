import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  list:any[]=[];

  addtask(item:any){
    if(item ==''){

    }
    else{
      this.list.push({name:item});
    }
    // console.warn(item);
  }
  removeItem(item:any){
    let index  = this.list.indexOf(item);
    if(index > -1){

      this.list.splice(index,1);
    }
  }
  deleteAll(){
    if(this.list.length ===0){
      alert("No Task added :)")
    }
    this.list.splice(0);
  }
  uper(item:any){
    let index  = this.list.indexOf(item);
    if(index>=1){
      let temp = this.list[index];
      this.list.splice(index,1,this.list[index-1]);
      this.list.splice(index-1,1,temp);
    }
  }
  down(item:any){
    let index  = this.list.indexOf(item);
    if(index<this.list.length-1){
      let temp = this.list[index];
      this.list.splice(index,1,this.list[index+1]);
      this.list.splice(index+1,1,temp);
    }
  }
}
