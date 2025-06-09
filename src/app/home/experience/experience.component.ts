import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experience: any[] = [];

  ngOnInit(): void {
    this.experience = [
      {
        title: 'home.experience.lc_waikiki.title',
        date: 'May 2024 - Present',
        company: 'LC Waikiki',
        current: true,
        gotBulletPoints: true,
        description: [
          'home.experience.lc_waikiki.desc_1',
          'home.experience.lc_waikiki.desc_2',
          'home.experience.lc_waikiki.desc_3',
          'home.experience.lc_waikiki.desc_4',
          'home.experience.lc_waikiki.desc_5',
          'home.experience.lc_waikiki.desc_6',
          'home.experience.lc_waikiki.desc_7',
          'home.experience.lc_waikiki.desc_8',
          'home.experience.lc_waikiki.desc_9',
          'home.experience.lc_waikiki.desc_10',
        ],
        skills: [
          'angular',
          'ASP.NET Core',
          '.NET',
          'RESTful APIs',
          'Redis',
          'RabbitMQ',
          'Kibana',
          'AppDynamics',
          'SSIS',
          'MSSQL',
          'T-SQL',
          'OOP',
          'SOLID',
          'Agile',
          'Azure DevOps',
        ],
      },
      {
        title: 'home.experience.architecht.title',
        date: 'Sep 2023 - Mar 2024',
        company: 'Architecht - KuveytTürk',
        current: false,
        gotBulletPoints: true,
        description: [
          'home.experience.architecht.desc_1',
          'home.experience.architecht.desc_2',
          'home.experience.architecht.desc_3',
          'home.experience.architecht.desc_4',
          'home.experience.architecht.desc_5',
          'home.experience.architecht.desc_6',
          'home.experience.architecht.desc_7',
          'home.experience.architecht.desc_8',
          'home.experience.architecht.desc_9',
          'home.experience.architecht.desc_10',
        ],
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React JS',
          'SQL Server',
          'ASP.NET Core',
          'Web API',
          'Entity Framework',
          'Azure DevOps',
          'TFS',
          'Clean Architecture',
          'C#',
        ],
      },
      {
        title: 'home.experience.pi_works.title',
        date: 'Jul 2021 - Sep 2021',
        company: 'P.I. Works, Inc.',
        current: false,
        gotBulletPoints: false,
        description: 'home.experience.pi_works.description',
        skills: ['Support'],
      },
    ];
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#experience-title',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#experience-title',
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '#icon',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#icon',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }
}
