import React,{useEffect} from 'react'
import './FinalPage.css'
import audioFile from './Asset2/Audio.mp3';
import Angulam from './AssetPhoto/angulam.jpg';
import Calls from './AssetPhoto/calls.jpg';
import ChinnaPapa from './AssetPhoto/chinnapapa.jpg';
import Cuteu from './AssetPhoto/cuteu.jpg';
import Dayyam from './AssetPhoto/dayyam.jpg';
import Devudu from './AssetPhoto/devudu.jpg';
import Dog from './AssetPhoto/dog.jpg';
import Doll from './AssetPhoto/doll.jpg';
import Draw from './AssetPhoto/draw.jpg';
import Kj from './AssetPhoto/kj.jpg';
import Meflower from './AssetPhoto/meflower.jpg';
import Onlymeflower from './AssetPhoto/onlymeflower.jpg';
import Pony from './AssetPhoto/pony.jpg';
import Sketch from './AssetPhoto/sketch.jpg';
import SS from './AssetPhoto/ss.jpg';
import SS2 from './AssetPhoto/ss2.jpg';
import Vidd from './AssetPhoto/viddd.mp4';
import Moon from './AssetPhoto/moon.jpg';
import Nakralu from './AssetPhoto/nakralu.jpg';
import Hate from './AssetPhoto/hate.jpg';
import Lj from './AssetPhoto/ljjj.jpg';


const FinalPage = () => {

    useEffect(() => {
         // Create a new audio object with the imported audio file
    const audio = new Audio(audioFile);

    // Set the audio to loop
    audio.loop = true;

    // Play the audio when the component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        console.log('Audio is playing in a loop');
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    };

    playAudio();

    // Cleanup function to pause and reset audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  return (
    <div className='finalcont'>


            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Lj} alt="error" />
                </div>
                <div className='sodhi'>
                      Wish you many more 
                    Happy Returns of the Day Srinidhi... Gurtundaa manam LJ lo digina first photo
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      Entha chinnagunnav chudu full cute, ante ippud kooda anko, ilage cuteness maintain chestavu future lo ani once again hbd
                </div>
                <div>
                     <img className='fhoto' src={ChinnaPapa} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Dayyam} alt="error" />
                </div>
                <div className='sodhi'>
                      Enni problems ochina bhayapadakunda face chestavu, technical ga kani life lo kaani, ilage ni problems (nannu kaadu) ni bhayapedtu untavu ani ashistu HBD
                </div>
                  
            </div>

            <div className='leftp all except'>
                <span className='sodhi'>
                      HBD from PRANAYAMA fans assosiaction. Same ilage ni nakralu bharistu unta
                </span>
                <div>
                     <img className='fhoto' src={Nakralu} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Cuteu} alt="error" />
                </div>
                <div className='sodhi'>
                      I wish you to click sooo soo soo many pictures and let the universe heal by looking at this pretty
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      ummm e bomma enduk petnano telidu (haha)
                      Happy Birth Day
                </div>
                <div>
                     <img className='fhoto' src={Doll} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Kj} alt="error" />
                </div>
                <div className='sodhi'>
                      Like every door has a key. Find the key for you every locked opportunity and prove everyone what you are. OK na SIRI DON?
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      E sketch gurtundaa...? you asked me to draw 
                </div>
                <div>
                     <img className='fhoto' src={Sketch} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Draw} alt="error" />
                </div>
                <div className='sodhi'>
                      So I drew the most beautiful thing I know. Danni chustuuu gadpeyochu rojulu samachralu. HBD
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      This was the first screenshot I clicked and you scolded me. Mastu doladina e photo kosam ekkadekkado
                </div>
                <div>
                     <img className='fhoto' src={SS} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={SS2} alt="error" />
                </div>
                <div className='sodhi'>
                      And this one bymistake ani chepte nammalekunde nuvv (haha). Kani ah mukkupulla petkutte same devatha laage unde nuu. 
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      I removed this so called irritated personality from the picture. Ante nik chudabuddi aitale annav ka. HBD
                </div>
                <div>
                     <img className='fhoto' src={Hate} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Moon} alt="error" />
                </div>
                <div className='sodhi'>
                      Nivi assal photos eh levu na deggara.
                      Edo konni unnai chaala takva. photos kosam google ni adgute they showed this . HBD 
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      idi gurtundaa nu annav o sari nak e poola jada kaaval ani eskobuddaitundi ani. Only I can afford is posting this picture anthe.
                </div>
                <div>
                     <img className='fhoto' src={Pony} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Devudu} alt="error" />
                </div>
                <div className='sodhi'>
                      You changed me alot and ilage nu velle prathi chotu positivity tho nindi povali ani nen devunki mokkutunna. Cheppalante nen chaalanee mokkina devunki
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      Look at this ela chustundo chudu. I am also waiting for you like this. Chaala cheppali niku. Kopam takkvayyaka chepta. Appatvaraku HBD
                </div>
                <div>
                     <img className='fhoto' src={Dog} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Meflower} alt="error" />
                </div>
                <div className='sodhi'>
                      I have very less photos with you but have many many memories. Etla ante pratidi special eh, aree nak Srinidhi antene special. HBD
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      Edemaina nen delete cheyyani photo edana undi ante adi ide. Niku e birthday ki gift lekka nen e SMILE istunna tiskovaaaa
                </div>
                <div>
                     <img className='fhoto' src={Onlymeflower} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                    <video className="exampleVideo" controls autoPlay loop muted>
                    <source src={Vidd} type="video/mp4" />
                   </video>
                </div>
                <div className='sodhi'>
                      It's ok to be ok. Ante kotladtuu untam nen emo anta nu emo antav but we are good. Ante alaa ani kaadu. Ummm anni ememo alochistav assal normal ga undochu ka. I request you to stop overthinking
                </div>
                  
            </div>

            <div className='leftp all'>
                <div className='sodhi'>
                      E photo enduk petna ante itlane, Anteee normally blessing your feed with your dad.Happy Birthday Kanmani.
                </div>
                <div>
                     <img className='fhoto' src={Angulam} alt="error" />
                </div>
                  
            </div>
            <div className='leftp all'>
                <div>
                     <img className='fhoto' src={Calls} alt="error" />
                </div>
                <div className='sodhi'>
                      Actually nik 21 kada ala ani 21 photos petna ememo pettina nevermind. Be focused endukante nalantollu disturb cheyyanike untar antav ka. ala niku nu priority ichko and always make yourself first. NEN EPPUDU UNTA - a chota sa wish from a chota sa ladka HAPPY BIRTHDAY
                </div>
                  
            </div>

    </div>
  )
}

export default FinalPage
