import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  angka1 :number;
  angka2 :number;
  hasil : number;
  baris : number;
  isDone : boolean = false;
  isGenap : boolean = false;
  data = new String("");
  
  show()
  {
    this.hasil = 1;
    this.angka1 = parseInt((document.getElementById("bilangan1")as HTMLInputElement).value);
    this.angka2 = parseInt((document.getElementById("bilangan2")as HTMLInputElement).value);
    
    for(let i = 0; i < this.angka2; i++)
    {
      this.hasil = this.hasil * this.angka1;
    }

    if(this.hasil % 2 == 0)
    {
      this.isGenap = true;
      
      for(let i = this.angka1; i< this.hasil + 1;i++ )
      {
        for(let j = 0; j< i + 1;j++ )
        {
          this.data.concat("*");
          if(j == i)
          {
            this.data.concat("\n");
          }
        }
      }

      for(let i = 0; i< this.data.length + 1;i++ )
      {
        console.log(this.data[i]);
      }
    }

    else
    {
      
    }

    this.isDone = true;
  }
}
