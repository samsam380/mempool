import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WebsocketService } from '@app/services/websocket.service';
import { SeoService } from '@app/services/seo.service';
import { StateService } from '@app/services/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  frontendGitCommitHash = this.stateService.env.GIT_COMMIT_HASH;
  packageJsonVersion = this.stateService.env.PACKAGE_JSON_VERSION;

  constructor(
    private websocketService: WebsocketService,
    private seoService: SeoService,
    public stateService: StateService,
  ) { }

  ngOnInit(): void {
    this.seoService.setTitle('About SAM256 Mempool');
    this.seoService.setDescription('SAM256 Mempool is a self-hosted Bitcoin mempool and block explorer operated at mempool.sam256.com.');
    this.websocketService.want(['blocks']);
  }
}
