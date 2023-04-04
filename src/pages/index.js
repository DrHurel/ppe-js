import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      console.clear();

      const canvas = document.getElementById("hero");
      const context = canvas.getContext("2d");

      canvas.width = 1158;
      canvas.height = 770;

      const frameCount = 92;
      const currentFrame = index => `/api/images/${index}`

      const images = []
      const airpods = {
        frame: 0
      };

      for (let i = 1; i < frameCount + 1; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          return 0
        };
        images.push(img);

      }

      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: ".scene",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        },
        onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
      });

      images[0].onload = render;


      function render() {
        const image = images[airpods.frame]
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, canvas.width / 2 - image.width / 2,
          canvas.height / 2 - image.height / 2);

      }







      return () => ctx.revert();


    })


  }, [])



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='hero' >
        <img src="assets/img/image-hero.png" />
        <h1>
          CHERCHEUR EN PERFORMANCES SPORTIVES
        </h1>

      </section>
      <section className='intro' >


        <p>
          Ce professionnel travaille souvent au sein d’un institut de recherche et tente d’identifier les paramètres qui peuvent déterminer la réussite des athlètes de haut niveau.
          Ses recherches en science du sport sont concomitantes avec la physique, la statistique et les mathématiques.
          Comme nous l’explique Geoffroy Berthelot, chercheur à l’INSEP*, « j’essaie de comprendre quel déterminant fait perdre ou réussir un athlète.
          Est-ce que la chaleur, le froid, la pression, l’altitude, le mental, les volumes d’entraînements, etc. peuvent déterminer une réussite ? ».
          En somme, il cherche à connaître l’impact de la science sur la performance et la longévité d’un sportif.
        </p>
        <img src="assets/img/image-1.png" />
      </section>



      <section className='scene'>
        <canvas id='hero' />
        <h2>
          CURSUS ET QUALITES NECESSAIRES
        </h2>
        <div >
          <p>
            Passer par un cursus à bac+5 (master universitaire, école d’ingénieurs) en informatique, mathématiques et statistiques ou spécialisé en biomédical ou en santé est la voie adéquate.
          </p>
          <p>
            Autonomie, ténacité, rigueur, curiosité sont les qualités principales pour exercer ce métier.
          </p>
        </div>
      </section>

      <section className='job-options'>
        <div >

          <img src="assets/img/image-1.png" />
          <img src="assets/img/image-1.png" />
          <img src="assets/img/image-1.png" />
        </div>
        <p>
          Dans des organismes publics ou parapublics de recherche (CNRS, INSERM, INRP, etc.)
          Au sein de Clubs et de Fédérations Sportives
          Au sein des Collectivités Territoriales ou du Ministère de La Jeunesse et des Sports comme contractuel ou comme titulaire (après la réussite d’un concours) pour intervenir dans la politique sportive ou d’animation (service culturel d’une grande Mairie, etc.)
          Comme éducateur sportif (après un deuxième diplôme à acquérir par voie professionnelle dans le secteur du social)
          Comme agent commercial (agent sportif, gestion de l’image d’un club ou d’un sportif, gestion de boutiques, etc.)
          Comme délégué médical au sein de laboratoires
          Comme diététicien après la validation d’un deuxième diplôme en règle générale
          Comme enseignants ou comme enseignants-chercheurs
        </p>

      </section >
      <section className='impact' >
        <div>
          <h2>
            IMPACT
          </h2>

          <p>
            Comme illustré dans Le Stratege, le rôle de chercheur en performances sportive à eu un impact majeur dans le monde de l’industrie du sport.

            Alors que la saison 2002 se profile, Billy Beane, le manager général des Oakland Athletics, est confronté à une situation difficile : sa petite équipe a encore perdu ses meilleurs joueurs, attirés par les grands clubs et leurs gros salaires. Bien décidé à gagner malgré tout, il cherche des solutions qui ne coûtent rien et auxquelles personne n’aurait pensé avant… Il va s’appuyer sur des théories statistiques et engager Peter Brand, un économiste amateur de chiffres issu de Yale. Ensemble, contre tous les principes, ils reconsidèrent la valeur de chaque joueur sur la base des statistiques et réunissent une brochette de laissés-pour-compte oubliés par l’establishment du baseball.
          </p>
        </div>

        <img src="assets/img/image-1.png" />
      </section>
    </>
  )
}
