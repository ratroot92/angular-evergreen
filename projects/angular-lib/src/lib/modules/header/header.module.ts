import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './header.component';
@NgModule({
  imports: [CommonModule],
  declarations: [SharedHeaderComponent],
  exports: [SharedHeaderComponent],
})
class SharedHeaderModule {}

export default SharedHeaderModule;
