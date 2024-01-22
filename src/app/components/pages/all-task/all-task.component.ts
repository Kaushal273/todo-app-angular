import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
  newTask=""
  httpService = inject(HttpService);
  addTask(){
    console.log('addTask',this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask=""
    })
    
  }
}
