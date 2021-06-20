import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
})
export class GlossaryComponent implements AfterViewInit {
  public itemList: Item[] = [
    {
      term: 'Movilidad académica.',
      description:
        'Actividades académicas, culturales e investigativas que implican la movilidad nacional, internacional y entre sedes de estudiantes, profesores e investigadores.',
    },
    {
      term: 'Categoría de Movilidad.',
      description:
        'Clasificación de las modalidades de movilidad nacional e internacional donde la comunidad académica participa. Intercambio académico. Es la oportunidad que tiene el estudiante regular de realizar cursos de su programa académico en otra sede de la Universidad o en otra institución de educación superior nacional o extranjera autorizada para el ofrecimiento de educación superior, previa suscripción de convenio interinstitucional. ',
    },
    {
      term: 'Práctica profesional. ',
      description:
        'Curso que desarrolla el estudiante de pregrado en el puesto de trabajo de un campo ocupacional local, nacional o internacional, en el que podrá desempeñarse posteriormente, caracterizado por una relación de intercambio con otros profesionales, que le ayuda a ampliar el campo de conocimiento, habilidades, destrezas, actitudes, valores y experiencias, para aprender juntos mediante este intercambio y contribuir con la formación del futuro profesional. En el programa de Medicina, la práctica profesional se denomina Internado, y en el programa de Derecho se denomina Consultorio Jurídico. ',
    },
    {
      term: 'Doble titulación.',
      description:
        ' Es la opción que tienen los estudiantes para realizar estudios conducentes a la obtención de dos títulos académicos, uno de la Universidad Simón Bolívar y otro de la institución con la cual se ha suscrito convenio.',
    },
    {
      term: 'Co-Titulación. ',
      description:
        'Movilidad mediante la categoría de semestre académico en el exterior y complementado con un convenio interinstitucional suscrito entre la Universidad y otra(s) institución(es), conduce a la obtención de un solo título de educación superior validado en el contexto de los sistemas de educación superior de las instituciones que intervienen. ',
    },
    {
      term: 'Rotación.',
      description:
        'Es la organización académica de las prácticas clínicas en un programa de pregrado o una especialización médica y quirúrgica. Las actividades académicas, profesionales y asistenciales de una rotación, se desarrollan conforme al plan de delegación progresiva definido entre la Universidad y la Institución Prestadora de Servicios de Salud. En algunos programas doctorales, los estudiantes deben trabajar en el laboratorio por lo menos con dos profesores en diferentes temas de investigación, uno cada seis meses, en forma rotativa con el objeto de que se familiaricen con las líneas de investigación de los grupos y con las técnicas experimentales que se usan en cada uno de ellos.',
    },
    {
      term: 'Curso corto. ',
      description:
        'Cursos y asignaturas que los estudiantes pueden cursar en instituciones nacionales o internacionales, a través de convenios o membresías académicas; dentro de los cursos cortos se incluyen los cursos de idiomas y cursos de verano. En general, son cursos que abordan una temática específica con reconocimiento de un espacio académico (Parcial o total) en el plan de estudios de los estudiantes. Se consideran cursos cortos aquellos cuya duración oscila entre una (1) semana y tres (3) meses. Inmersión en idiomas. Programa de movilidad estudiantil en el cual el estudiante profundiza una segunda lengua con institutos o en los centros de idiomas de Instituciones de Educación Superior en convenio. ',
    },
    {
      term: 'Pasantía.',
      description:
        'Es el curso desarrollado en un escenario nacional o internacional de interlocución académica - investigativa que realiza el estudiante con expertos e investigadores en las temáticas relacionadas con su formación y con el trabajo de investigación de maestría o tesis doctoral; permite, además, socializar los avances de investigación. En los programas de pregrado, la pasantía permite intercambiar experiencias y participar en actividades académicas y científicas. ',
    },
    {
      term: 'Misión Académica.',
      description:
        'Experiencia académica, científica, empresarial y/o cultural que realizan estudiantes y profesores por un período corto, que busca ampliar la visión de los estudiantes, mediante el contacto directo con los ámbitos académico, científico, tecnológico, político, cultural y económico del lugar que se visita, como un aporte a la formación profesional que ofrece la Universidad. Esta misión puede ser nacional o internacional. ',
    },
    {
      term: 'Misión técnica. ',
      description:
        'Son acciones de consultoría que se puedan dar o recibir que se hayan detectado y ayuden a la mejora de los procesos Voluntariado. Es un trabajo no remunerado en un área específica. Es útil para los estudiantes que deseen adquirir experiencia laboral y al mismo tiempo deseen adquirir una experiencia internacional. Generalmente un voluntariado es una experiencia social que se realiza mediante organizaciones sin ánimo de lucro, que busca un impacto social en el grupo donde se efectuara. ',
    },
    {
      term: 'Actividades de docencia.',
      description:
        'Este tipo de movilidad pretende fomentar el intercambio de competencias y experiencias sobre métodos pedagógicos. Permite al profesor estar inmerso en un sistema de educación diferente al suyo y, por ende, contribuir al desarrollo curricular propio. Al mismo tiempo, es una forma para que los estudiantes que no tiene la oportunidad de realizar una movilidad internacional, puedan conocer otros sistemas académicos. Dentro de las actividades están como profesor invitado en los niveles de pregrado y posgrados.',
    },
    {
      term: 'Actividades investigativas.',
      description:
        'Los profesores tienen la posibilidad de viajar al extranjero a IES o Institutos de investigación para realizar visitas o estancias de investigación por un tiempo determinado. Las visitas se caracterizan por ser de corta duración, permitiendo conocer al profesor de primera mano, las instalaciones de investigación y tener acercamiento con la institución par. La estancia de investigación es un periodo más largo, en el que el profesor entra a ser parte de un grupo de investigación bien sea para trabajar una línea ya establecida o empezar el desarrollo de un trabajo conjunto.',
    },
  ];
  ngAfterViewInit() {}
}

interface Item {
  term: string;
  description: string;
}
