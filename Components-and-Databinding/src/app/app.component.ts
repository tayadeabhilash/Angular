import { Component, ViewChild } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CockpitComponent)
  cockpit: CockpitComponent;
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: this.cockpit.newServerContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
