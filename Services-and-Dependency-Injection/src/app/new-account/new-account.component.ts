import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName,accountStatus);
    this.loggingService.logToConsole(accountStatus);
  }
}
