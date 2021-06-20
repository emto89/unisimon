import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit {
  panelOpenState = false;
  public itemList: Item[] = [
    {
      header: 'Curabitur a turpis et enim convallis accumsan nec in purus. ',
      content: 'Content',
      selected: true,
    },
    {
      header: 'Praesent tincidunt metus vel molestie rhoncus. ',
      content: 'Content',
      selected: true,
    },
    {
      header: 'In feugiat massa non ligula interdum congue. ',
      content: 'Content',
      selected: true,
    },
    {
      header: 'Praesent dictum neque iaculis rutrum venenatis. ',
      content: 'Content',
      selected: true,
    },
    {
      header:
        'Sed elementum metus ut ipsum lacinia, ac scelerisque lacus auctor.',
      content: 'Content',
      selected: true,
    },
    {
      header: 'Etiam iaculis turpis id tincidunt euismod. ',
      content: 'Content',
      selected: true,
    },
    {
      header: 'Maecenas tincidunt metus sit amet volutpat fringilla.',
      content: 'Content',
      selected: true,
    },
    {
      header: 'Morbi eu arcu auctor, elementum erat vitae, imperdiet nunc.',
      content: 'Content',
      selected: true,
    },
    {
      header:
        'Quisque dapibus elit ut sapien ultrices, sed blandit nibh ultricies.',
      content: 'Content',
      selected: true,
    },
  ];

  ngAfterViewInit() {}
}

interface Item {
  header: string;
  content: string;
  selected: boolean;
}
