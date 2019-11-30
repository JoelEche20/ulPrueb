import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  tuneListJSON: any = []
  tuneList: any = []
  tuneQuery : null
  

  constructor(private httpService: HttpService, private router: Router) { }
  

  ngOnInit() {
  }


  searchig(){
    var i;
    var min,sec = String();
    this.httpService.get(this.tuneQuery).subscribe(response => {
        this.tuneListJSON = response;
       this.tuneList = this.tuneListJSON.results;
       for( i=0;i<this.tuneList.length;++i)
       {
       
        min = Math.floor(this.tuneList[i].trackTimeMillis / 60000);
        sec = ((this.tuneList[i].trackTimeMillis % 60000) / 1000).toFixed();
        if(parseInt(sec) < 10)
        {
          sec = "0" + sec;
        }
        this.tuneList[i].trackTimeMillis = min + ":" + sec
        
       }
    });
    
  }
  
}
