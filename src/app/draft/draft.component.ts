import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {

  bannerData = [{
    "type": "image_banner",
    "data": {
      "aspectWidth": "1440",
      "aspect_height": "416",
      "small_image_left": "-373px",
      "image_url": "https://s3.amazonaws.com/awsdev-synergy-web/dev/images/top/top-rf-ablation.jpg",
      "image_alt": "Endoscopic Imaging for Multispecialty Surgery"
    }
  }];

  textData = [{
    "type": "text",
    "classes": ["col-6"],
    "data": {
      "header": "4K VIDEO TECHNOLOGY FOR RIGID ENDOSCOPY",
      "text": "Our innovative Synergy<sup><i>UHD4</i>&trade;</sup> imaging system is designed to meet the needs of a variety of surgical specialties.  The Synergy system provides state-of-the-art 4K image quality, a fully integrated <a href=\"/insufflation\" class=\"embedded-link\">insufflator</a> as well as industry-leading data management (video and data integration) options to maximize efficiency, simplify workflow, and decrease turnover time. It sets a new standard for patient education and postoperative surgeon-patient communication."
    }
  },
  {
    "type": "image",
    "classes": ["col-6"],
    "data": {
      "image_url": "https://s3.amazonaws.com/awsdev-synergy-web/dev/images/img-surgical-staff-efficiency.jpg",
      "image_alt": "workflow"
    }
  }];

  constructor() { }

  ngOnInit() {
  }
}
