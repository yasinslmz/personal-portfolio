import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  responsiveOptions: any[] | undefined;
  projects: any[] = [
    {
      name: 'Flexi',
      type: 'home.projects.mobileApplication',
      description: 'home.projects.flexi.description',
      techs: ['java', 'android', 'gson', 'okhttp'],
      github: 'https://github.com/yasinslmz/FlexiApp',
      image: ['assets/flexi/homepage.PNG','assets/flexi/flashcard.PNG','assets/flexi/multiselect.PNG']
    },
          {
        name: 'Cinema Ticket Booking',
        type: 'home.projects.webApplication',
        description: 'home.projects.cinemaTicketBooking.description',
        techs: ['C#', 'aspnetmvc', 'sqlserver', 'html5', 'css3'],
        github: 'https://github.com/yasinslmz/CinemaTicketBootcampGraduationProject',
        image: ['assets/cinemaTicketBooking/tickethomepage.PNG'],
      },
    {
      name: 'Online Bookstore',
      type: 'home.projects.webApplication',
      description: 'home.projects.bookstore.description',
      techs: ['react',  'html5',  'redux',  'dotnet-core', 'entity-framework', 'sql-server'],
      github: 'https://github.com/yasinslmz/Online-Bookstore',
      image: ['assets/bookstore/bookstorehomepage.PNG'],
    },
    {
      name: 'Travel Blog',
      type: 'home.projects.webApplication',
      description: 'home.projects.travelblog.description',
      techs: ['aspnet-mvc', 'entity-framework', 'sql-server',  'javascript', 'html5'],
      github: 'https://github.com/yasinslmz/TravelBlog',
      image: ['assets/travelblog/travelbloghomepage.PNG'],
    },
  ];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#card',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#card',
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '#projects',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }
}
