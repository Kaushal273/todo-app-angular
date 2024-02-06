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
  onComplete(task:any){
    task.complete = true;
    console.log(`complete task: ${task}`);
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask();
    })
    
  }

  onImportant(task:any){
    task.important = true;
    console.log(`important task: ${JSON.stringify(task,null,2)}`);
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask();
    })
    
  }
}
