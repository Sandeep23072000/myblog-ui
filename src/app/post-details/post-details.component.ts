import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  slugdata: any;
  baseUrl: any;
  dataSources: any;
  is_submit: boolean = false;
  error: string = ''; 
  commentForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    discription: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ){
    this.baseUrl = this.auth.baseUrl;
    this.slugdata = this.route.snapshot.params['slug'];
    console.log(this.slugdata);
    this.auth.getAPI('/post/' + this.slugdata).subscribe (res=>{
      console.log(res);
      this.dataSources = res.data;
      
    });
    
  }

  ngOnInit(): void {
 
  }

  get uc() { return this.commentForm.controls; };

  onCommentSubmit() {
    this.is_submit = true;
    const data = this.commentForm.value
    console.log(data);
    if (this.commentForm.invalid) {
      return
    }
    this.auth.postAPI('/comment',data).subscribe((response: any) => {
      console.log(response);
    });
  }

}
