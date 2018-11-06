import { NgModule } from '@angular/core';
import { AssistantsValidatorDirective } from './assistant-validator/assistant-validator';
import { EmailValidatorDirective } from './email-validator/email-validator';
import { EqualValidatorDirective } from './equal-validator/equal-validator';
import { WebviewDirective } from './webview/webview';
@NgModule({
  declarations: [
    AssistantsValidatorDirective,
    EmailValidatorDirective,
    EqualValidatorDirective,
    WebviewDirective,
  ],
  imports: [],
  exports: [
    AssistantsValidatorDirective,
    EmailValidatorDirective,
    EqualValidatorDirective,
    WebviewDirective,
  ],
})
export class DirectivesModule {}
