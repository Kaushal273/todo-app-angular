import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,DatePipe,PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
  newTask="";
  taskList: any[] = [];
  httpService = inject(HttpService);
  ngOnInit(){
    this.getAllTask();
  }
  addTask(){
    console.log('addTask',this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTask();
    })
  }
  getAllTask(){
    this.httpService.getAllTask().subscribe((result: any) =>{
      console.log(result);
      this.taskList = result;
      
    } )
  }
}
