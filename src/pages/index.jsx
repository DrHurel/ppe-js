import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { imagesLink } from '@/lib/imageslink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(anim, [])



  return (
    <>
      <Head>
        <title>Metier des mathématiques</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='flex a-center space-between'>
        <div className='logo flex a-center'>
          <img src="logo.png" />
        </div>
        <div className='menu'>
          <ul className='flex a-center space-around'>
            <li>
              <a href="#intro">Introduction</a>
            </li>
            <li>
              <a href="#scene">Cursus et qualités</a>
            </li>
            <li>
              <a href="#job-options">Métiers</a>
            </li>
            <li>
              <a href="#up-down">Avantages et inconvénients</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
          </ul>
        </div>

      </nav>
      <section className='hero flex column' >
        <img src="assets/img/image-hero.png" />
        <h1>
          CHERCHEUR EN PERFORMANCES SPORTIVES
        </h1>

      </section>
      <section className='intro flex space-between a-center' id='intro'>


        <p>
          Les mathématiques sont présentes dans de nombreux domaines, y compris le sport. En effet, les professionnels du sport ont souvent besoin de mathématiques pour rechercher la performance. Les sportifs de haut niveau ont accès à un grand nombre de données et ont donc besoin d'un spécialiste en statistiques pour les comprendre et les exploiter.Les résultats obtenus peuvent conduire à de nouvelles méthodes d'entraînement, par exemple. Les mathématiques peuvent également aider à anticiper d'éventuelles blessures ou aider un entraîneur à décider entre deux joueurs pour un match. La recherche en performance sportive va même jusqu'à développer des outils pour prédire les événements d'un match en particulier. Aujourd'hui, dans des sports comme le football ou le rugby, toutes les clubs utilisent les mathématiques pour identifier les points forts/faibles de leurs adversaires ou de leur propre équipe.        </p>
        <img src="assets/img/image-1.png" />
      </section>

      <section className='trigger' id='scene'></section>

      <section className='scene flex column a-center' >
        <canvas id='hero' />
        <h2>
          CURSUS ET QUALITES NECESSAIRES
        </h2>
        <div className='flex space-around' >
          <p>
            Pour accéder a un poste dans le sport un bac +5 est souvent nécessaire
            et une bonne maitrise des statistiques et de l’informatique.
            Le master Statistique et Science des Données à l’université de
            Montpellier est très adapté par exemple.
            <br /><br />
            Après vos études vous pourrez toucher un salaire de 2000€ à 2500€ par mois et finir votre carrière avec un salaire de 3000€ à 3500€ par mois.
          </p>
          <p>
            En plus de ces compétences techniques,
            un chercheur en performance sportive a besoin de ces qualités:<br /><br />
            Capacité à travailler en équipe<br /><br />
            Curiosité et créativité<br /><br />
            Capacité à communiquer efficacement<br /><br />
            Persévérance
          </p>
        </div>
      </section>

      <section className='job-options flex a-center' id='job-options'>
        <div  className='flex column'>

          <img id='i1' src="assets/img/image 7.png" />
          <img id='i2' src="assets/img/image 8.png" />
          <img id='i3' src="assets/img/image 9.png" />
        </div>
        <p>
          Les chercheurs en performance sportive peuvent travailler dans une variété d'organisations:<br /><br />
          Que ça soit dans la recherche pure, comme enseignant-chercheur (CNRS, INSERM, INRP, etc.).<br /><br />
          Au sein de Clubs et de Fédérations Sportives.<br /><br />
          Au sein des Collectivités Territoriales ou du Ministère de La Jeunesse et des Sports, pour intervenir dans la politique sportive. (service culturel d’une grande Mairie, etc.).<br /><br />
          Comme éducateur sportif (après un deuxième diplôme à acquérir par voie professionnelle dans le secteur du social).<br /><br />
          Comme délégué médical au sein de laboratoires.<br /><br />
          Comme diététicien après la validation d’un deuxième diplôme en règle générale.<br /><br />
          Les postes sont diverses et variés permettant à un chercheur en performance sportive de réorienté professionnellement au cours de sa carrière.<br /><br />
        </p>

      </section >
      <section className='up-down flex column' id='up-down'>
        <div className='img-h2 flex'>
          <img src="assets/img/image-up-down.png" alt="up-down" />
          <div>
            <h2>Avantages et Inconvénients </h2>
            <p>
              Comme tout métier, chercheur en performance sportive a des avantages comme des inconvénients.
              C’est important d’avoir connaissance de ceux-ci avant de se spécialiser dans un domaine.
            </p>
          </div>
        </div>
        <div className='text-up-down flex'>
          <div>
            <h3>Avantages</h3>
            <p>
              Le métier de chercheur en performance sportive permet de travailler dans un domaine passionnant qui peut avoir un impact réel sur la vie des athlètes. Les chercheurs ont l'opportunité de contribuer à la recherche scientifique dans un domaine en constante évolution et de collaborer avec des experts en sciences du sport et en biomécanique. Ils travaillent généralement dans un environnement de laboratoire stimulant et collaboratif.            </p>
          </div>
          <div>
            <h3>Inconvénients </h3>
            <p>
              Les salaires peuvent être relativement bas pour les chercheurs débutants et les emplois de chercheur en performance sportive peuvent être rares et très compétitifs. Le travail peut être stressant et exigeant, car les chercheurs doivent souvent travailler sur des délais serrés pour répondre aux besoins des athlètes et des entraîneurs. Les chercheurs doivent souvent travailler de longues heures pour mener à bien leurs projets de recherche.           </p>
          </div>

        </div>

      </section>

      <section className='impact flex space-between' id='impact'>
        <div className='flex column'>
          <h2>
            IMPACT
          </h2>

          <p>
            Comme illustré dans “Le Stratège”, le rôle de chercheur en performances sportive à eu un impact majeur dans le monde de l’industrie du sport.<br /><br />
            Tiré d'une histoire vraie, le film "Le Stratège" suit une équipe moyenne de baseball aux États-Unis qui va complètement changer sa stratégie de recrutement en choisissant ses joueurs uniquement sur des critères statistiques. Cette stratégie a connu un grand succès car l'équipe en question a remporté la ligue de baseball cette année-là. Cette histoire a révolutionné complètement le baseball et le sport en général, car dans les années qui ont suivi, les anciennes méthodes de recrutement ont été abandonnées au profit d'un recrutement plus rationnel et basé sur les statistiques dans de nombreux clubs. En France, par exemple, le Toulouse Football Club utilise uniquement les statistiques pour recruter ses joueurs. Cette stratégie s'appelle maintenant le "Moneyball" et est utilisée partout à des niveaux différents.        </p>
        </div>

        <img src="assets/img/image 10.png" />
      </section>


    </>
  )
}


const anim = () => {
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const nav = document.querySelector('nav');
    if (scroll > 0) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  })  

  gsap.registerPlugin(ScrollTrigger);
  let ctx = gsap.context(() => {
    console.clear();

    const canvas = document.getElementById("hero");
    const context = canvas.getContext("2d");



    const frameCount = 92;

    const images = []
    const toDraw = {
      frame: 0
    };

    for (let i = 0; i < imagesLink.length; i++) {
      const img = new Image();
      img.src = imagesLink[i]

      img.onload = () => {
        return 0
      };
      images.push(img);

    }


    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.5, yoyo: false, yoyoEase: true, ease: "none" })




    gsap.to(toDraw, {
      frame: frameCount - 1,
      snap: "frame",

      ease: "none",
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "+=50vh",
        scrub: true,
      },
      onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    tl.to(
      '#i1',
      {
        scrollTrigger: {
          trigger: '#i1',
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,


        },
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "easeinOut",

      }

    )
    tl.to(
      '#i2',
      {
        scrollTrigger: {
          trigger: '#i2',
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "easeinOut",

      }

    )
    tl.to(
      '#i3',
      {
        scrollTrigger: {
          trigger: '#i3',
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "easeinOut",

      }

    )




    images[0].onload = render;


    function render() {
      const image = images[toDraw.frame]
      //context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, canvas.width / 2 - image.width / 2,
        canvas.height / 2 - image.height / 2);

    }







    return () => ctx.revert();


  })


}