import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from "../user/user.component";
import { SharedModule } from "../shared/shared.module";
import { TasksModule } from "../tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
    ], // Angular Modules 
    bootstrap: [AppComponent ],
    imports: [BrowserModule, SharedModule, TasksModule] // To be use for standalone components 
})
export class AppModule {}