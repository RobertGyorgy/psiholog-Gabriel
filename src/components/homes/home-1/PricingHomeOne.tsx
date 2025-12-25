"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
}

export default function PricingHomeOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Cum să-mi fac bărbatul sa mă asculte, chiar dacă nu vrea sa mă asculte?",
      date: "December 15, 2024",
      excerpt: " Sună familiar? Începi să-i spui ceva important, observi că privirea lui se pierde undeva în gol, răspunde mecanic cu „da, da” și simți că vorbești de parcă ai fi invizibilă. Nu ești singura. Mii de femei se confruntă cu această frustrare: senzația că partenerul lor nu le mai ascultă cu adevărat, ci doar așteaptă să termine de vorbit.",
      fullContent: "Problema: când mintea lui e deja „pe pauză”Aici intervine o capcană periculoasă în care cad multe cupluri după ani de relație. Bărbatul tău și-a construit, de-a lungul timpului, niște tipare mentale despre felul în care gândești și comunici. A învățat secvențele tale obișnuite de vorbire, anticipează ce urmează să spui și, fără să-și dea seama, creierul lui intră pe „pilot automat.\nNu e neapărat răutate sau lipsă de interes. Pur și simplu mintea umană caută eficiență – și când crede că știe deja povestea, se deconectează. El consideră, inconștient, că te cunoaște atât de bine încât poate prezice ce vei spune. Rezultatul? Nu mai ascultă cu adevărat, ci doar confirmă ceea ce crede el că știe deja.\nProblema devine și mai complexă când acest comportament se transformă în obișnuință. Tu vorbești, el nu ascultă, te simți ignorată, te enervezi, ridici tonul – și el se retrage și mai mult. Se formează un cerc vicios în care comunicarea devine din ce în ce mai superficială, iar intimitatea emoțională se erodează.\nDe ce se întâmplă asta?\nOamenii funcționează pe bază de tipare. După luni sau ani împreună, partenerul tău a observat că anumite situații declanșează anumite reacții din partea ta. Dacă de fiecare dată când vorbiți despre bani sau despre familie discuția urmează aceleași trasee, mintea lui învață să „sară peste” pentru că „știe deja finalul”. Mai mult, bărbații tind să abordeze conversațiile în mod pragmatic, căutând soluții rapide. Dacă ei percep că „repeți aceleași lucruri”, pot intra în modul „rezolvare automată” fără să mai acorde atenție nuanțelor și emoțiilor din spatele cuvintelor tale.\nSoluții: cum să spargi tiparele și să recâștigi atenția lui\nSchimbă contextul conversației\nse desfășoară mereu în același loc (bucătărie, dormitor, în mașină), mintea lui le va asocia cu rutina. Propune o plimbare, o ieșire la o cafea sau chiar o discuție în parc. Schimbarea mediului îi semnalează creierului că „aceasta e diferit” și va fi mai receptiv. Anunță-l că urmează ceva important\nÎn loc să intri direct în subiect, folosește un „opener” care să-i capteze atenția: „Am nevoie de zece minute din timpul tău, neîntrerupt, pentru ceva care contează foarte mult pentru mine”. Această abordare îi oferă un cadru și îl pregătește mental să fie prezent.\nFolosește tehnica „elementului surpriză”\nDacă el se așteaptă la un anumit tip de reacție, surprinde-l. Schimbă tonul, abordarea sau chiar modul în care îți structurezi gândurile. În loc să îți exprimi nemulțumirea în mod direct, poți începe cu o întrebare: „Ce crezi că simt când se întâmplă X?” Acest lucru îl scoate din automatism și îl face să gândească activ.\nFii concisă și clară\nDeși poate părea contradictoriu, uneori vorbim prea mult și pierdem esența mesajului. Bărbații procesează informația mai bine când e directă. Încearcă să-ți structurezi gândurile înainte: ce vrei să transmiți, ce simți și ce ai nevoie de la el. O comunicare clară și la obiect poate fi mai eficientă decât o expunere lungă.\nImplică-l activ în conversație\n În loc să monologhezi, transformă discuția într-un dialog adevărat. Pune întrebări, cere părerea lui, lasă-l să contribuie. Când se simte parte din conversație, nu doar spectator, nivelul de angajare crește dramatic.\nAbordează meta-problema\nUneori, cel mai bun lucru pe care îl poți face este să vorbești deschis despre problemă. „Am observat că atunci când încerc să-ți spun ceva, pare că nu mă asculți cu adevărat. Cum putem schimba asta împreună?” Transformarea problemei într-o provocare comună vă apropie, în loc să vă îndepărteze.\nConcluzie\nComunicarea într-o relație nu trebuie să fie o luptă pentru atenție. Când bărbatul tău și-a format tipare despre tine, sarcina ta nu e să te schimbi, ci să-l ajuți să te vadă din nou – cu ochii proaspeți, cu mintea deschisă și cu inima receptivă. Și amintiți-vă: ascultarea adevărată e o formă de iubire. Merită efortul de a o recâștiga"
    },
    {
      id: 2,
      title: "Când \"destul de bun\" nu e niciodată suficient: perfecționismul care te epuizează până la os",
      date: "December 12, 2024",
      excerpt: "Ai impresia că, indiferent cât muncești, nu e niciodată destul? Că orice lucru pe care îl faci trebuie să fie impecabil, altfel e un eșec total? Că dacă nu ești perfect, ești o dezamăgire? Atunci ai toate șansele să te afli în capcana perfecționismului toxic – acea formă subtilă de autosabotaj care te consumă zi de zi, până când te trezești complet epuizat, fără să înțelegi cum ai ajuns acolo.",
      fullContent: "Raluca se trezea în fiecare dimineață cu un nod în stomac. Lista ei de \"lucruri de făcut\" era mereu prea lungă, standardele ei mereu prea înalte. La serviciu, muncea până târziu pentru că \"trebuia să fie perfect\". Acasă, își critica fiecare gest: \"De ce nu am gătit ceva mai special? De ce casa nu arată impecabil?\"\nPrietenii îi spuneau că exagerează, că e prea dură cu ea însăși. Dar Raluca nu putea să se oprească. În mintea ei răsuna mereu o voce: \"Nu e destul. Poți mai mult. Trebuie să fie perfect.\" Și apoi, într-o zi obișnuită de luni, trupul ei a spus \"stop\". Nu mai putea să se ridice din pat. Fiecare fibră a corpului ei era atât de epuizată, încât pur și simplu refuza să mai coopereze. Raluca ajunsese în stadiul de burnout total – rezultatul direct a anilor de perfecționism neîntrerupt.\n\nPerfecționismul toxic: când standardele îți distrug viața\nNu vorbim despre dorința de a face lucrurile bine. Vorbim despre ceva mult mai periculos: standarde excesiv de înalte, însoțite de critică de sine severă. În cultura românească, perfecționismul toxic are un teren foarte fertil. \"Ce o să zică lumea?\", \"Trebuie să fii mai bun decat altii\", \"Rușine să-ti fie!\" – toate aceste mesaje ne învață de mici că nu avem voie să greșim.\n\nIată cum funcționează cercul vicios:\nStabilești standarde imposibile. \nRaluca își pune obiective pe care e imposibil să le atingă simultan: mamă perfectă, angajată perfectă, soție perfectă, prietenă perfectă. Chiar și 99% devine un eșec în ochii ei.\nCritica internă nu tace niciodată. \"Nu e destul. Puteai mai bine. Ești o dezamăgire.\" Această voce constantă este mai epuizantă decât orice muncă fizică.\nFrica de eșec te paralizează. Pentru perfecționiști, eșecul nu e o lecție – e o condamnare. Așa că fie amâni, fie muncești fără oprire. Ambele variante te consumă.\nNu poți delega nimic. \"Dacă nu fac eu, nu va fi bine făcut.\" Rezultatul? Ești copleșit constant de sarcini pe care alții le-ar fi putut face la fel de bine.\n\nNiciodată nu te bucuri de reușite. \nCând finalizezi un proiect, nu simți mândrie. Simți doar ușurare temporară și gânduri de genul \"puteam face mai bine\".\nCercetările arată că acest tip de perfecționism duce direct la epuizare mentală și fizică. Creierul și corpul nu pot funcționa la parametri maximali în permanență. Au nevoie de pauze. Au nevoie să știe că \"destul de bun\" este, de fapt, suficient.\nSemnele că perfecționismul te epuizează\nRecunoști aceste simptome?\n\t∙\tOboseală cronică pe care somnul nu o ameliorează\n\t∙\tGânduri obsesive despre greșelile tale\n\t∙\tSentiment constant că \"nu faci destul\"\n\t∙\tAnxietate și iritabilitate crescute\n\t∙\tVinovăție atunci când te odihnești\n\t∙\tProcrastinare din frică că nu va fi perfect\n\t∙\tRenunțare la activități plăcute pentru că \"nu ai timp\"\nDacă ți se întâmplă acestea și afectează viața ta zilnică, relațiile tale sau sănătatea ta, este momentul să apelez la un psihoterapeut.\n\nDe ce ai nevoie de terapie?\nPerfecționismul toxic nu este ceva cu care trebuie să te lupți singur. Este o trăsătură profund înrădăcinată, adesea formată în copilărie prin aprobarea condiționată, criticismul constant sau comparații neîncetate. \"De ce nu ești ca Mihai din vecini?\" \"Nu e suficient să iei 9, trebuie să iei 10.\"\n\nUn psihoterapeut specializat te va ajuta să:\nIdentifici originea perfecționismului tău. De unde vin aceste standarde? Ce îți spun vocile critice din minte și ale cui sunt acele voci de fapt?\nReconstruiești sistemul tău de valori. Valoarea ta nu depinde de performanța ta. Tu ești valoros pur și simplu pentru că exiști. Pentru un perfecționist, acest lucru e revoluționar.\nÎnveți să tolerezi imperfecțiunea. Prin expunere graduală, vei descoperi că \"suficient de bun\" este, de fapt, suficient. Că lumea nu se prăbușește dacă faci o greșeală.\nDezvoltă auto-compasiunea. În loc să te critici constant, vei învăța să îți vorbești cu bunătate, așa cum ai face cu un prieten drag.\n\nPrimul pas: recunoaște că ai nevoie de ajutor\nRaluca a avut nevoie de luni de terapie pentru a înțelege ceva fundamental: nu trebuia să fie perfectă pentru a fi iubită, apreciată sau valoroasă. Încet, a învățat să își coboare standardele de la \"imposibil\" la \"realist\". A învățat să își permită greșeli.\nȘi, surprinzător, când a renunțat la perfecționism, performanța ei nu a scăzut – s-a îmbunătățit. Pentru că nu mai era paralizată de frică. Nu mai era epuizată de critică constantă. Putea, în sfârșit, să trăiască."
    },
    {
      id: 3,
      title: "Trauma: cand semnificatia devine identitate",
      date: "December 10, 2024",
      excerpt: "Când vorbim despre traumă, ne gândim imediat la evenimente: abuzul, accidentul, pierderea, violența. Dar trauma adevărată nu locuiește în eveniment. Locuiește în felul în care tu ai interpretat acel eveniment și, mai ales, în ceea ce ai crezut despre tine în acel moment. Două persoane pot trăi același eveniment – una rămâne marcată pe viață, cealaltă trece mai departe. De ce? Pentru că trauma nu este evenimentul. Trauma este povestea pe care ți-o spui despre acel eveniment.",
      fullContent: "Andrei avea unsprezece ani când a fost umilit în fața întregii clase. Profesorul de matematică, frustrat de greșeala lui la tablă, i-a spus: \"Cu creierul ăsta, o să ajungi la săpat de șanțuri.\" Clasa a râs. Andrei a simțit că se topește.\nEvenimentul a durat mai puțin de un minut. Dar interpretarea pe care Andrei și-a construit-o în acel moment a durat treizeci de ani: \"Sunt prost. Nu sunt capabil. Oricât m-aș strădui, nu voi fi niciodată destul de inteligent.\"\nAceastă convingere – nu cuvintele profesorului – a devenit trauma lui. A renunțat la facultatea pe care o dorea, considerând că \"oricum nu e pentru el\". A acceptat slujbe sub potentialul lui, convins că \"ăsta e plafonul lui\". Și-a sabotat fiecare oportunitate, pentru că în adâncul lui credea povestea formată la unsprezece ani.\nTrauma ca interpretare: ce ne arată cercetarile\nPsihiatrul Gabor Maté, unul dintre cei mai respectați experți în traumă, afirmă ceva revoluționar: trauma nu este evenimentul în sine, ci răspunsul intern al individului la acel eveniment. Trauma apare când, în fața unui eveniment copleșitor, persoana ajunge să creadă ceva fundamental negativ despre propria sa valoare.\n\"M-au umilit\" devine \"Sunt jalnic.\"\n\"M-au neglijat\" devine \"Nu sunt demn de atenție.\"\n\"M-au lovit\" devine \"Sunt rău și merit pedeapsa.\"\nEllen Langer, psiholog la Harvard și pionier în studiul mindfulness-ului, demonstrează că modul în care percepem și interpretăm propriile experiențe determină impactul lor asupra noastră mai mult decât natura obiectivă a evenimentelor. Cercetările ei arată că atunci când schimbăm perspectiva asupra trecutului – nu negând ce s-a întâmplat, dar reinterpretând semnificația – ne putem elibera de puterea pe care acel eveniment o are asupra noastră. Aceasta explică de ce doi frați care cresc în aceeași familie abuzivă pot avea traiectorii complet diferite în viață: unul dezvoltă tulburare de stres post-traumatic severă, celălalt devine rezilient. Nu pentru că au trăit lucruri diferite, ci pentru că au interpretat diferit ceea ce spune acel eveniment despre ei.\n\nAnatomia traumei: cum se formează interpretarea\nMaté relatează că trauma apare când sunt prezente trei elemente:\nEvenimentul te copleșește complet. Sistemul tău nervos intră în supraîncărcare. Nu mai poți procesa ce se întâmplă.\nEști singur cu acea copleșire. Nu există nimeni să te ajute să dai sens evenimentului. Nimeni să îți spună \"Nu e vina ta.\" Nimeni să îți valideze durerea. Îți construiești o narațiune toxică. În absența unei explicații externe, copilul sau adultul își creează propria explicație – și aproape întotdeauna această explicație implică ceva negativ despre sine: \"Sunt neîmportant. Sunt prost. Nu merit să fiu protejat.\" Această narațiune devine apoi nucleul identității. \n\nCum se perpetuează trauma\nCeea ce face trauma cu adevărat devastatoare nu este doar evenimentul inițial – este faptul că interpretarea ta devine un filtru prin care vezi tot restul vieții.\nAndrei a trăit decenii confirmând povestea \"Sunt prost\" în fiecare interacțiune. Când primea o promovare: \"Au greșit persoana.\" Când cineva îi recunoștea valoarea: \"Nu mă cunoaște cu adevărat.\" Când avea o idee bună: \"Probabil e stupidă, mai bine tac.\"\nTrauma nu trăiește în trecut. Trăiește în prezent, în fiecare moment în care interpretezi experiențele noi prin lentila acelei povești vechi.\n\nVindecarea: rescrierea narațiunii\nDacă trauma este interpretarea ta, atunci vindecarea înseamnă reinterpretarea acelei experiențe. Nu prin negare – evenimentul dureros s-a întâmplat cu adevărat. Ci prin schimbarea a ceea ce crezi că înseamnă acel eveniment despre tine.\nAndrei a avut nevoie de ani de terapie pentru a înțelege ceva fundamental: profesorul lui nu a rostit acele cuvinte pentru că Andrei era prost. Le-a rostit pentru că profesorul era un om frustrat, care își descărca propria durere asupra unui copil vulnerabil. Umilința nu spunea nimic despre inteligența lui Andrei – spunea totul despre caracterul profesorului. Această reinterpretare nu a șters durerea. Dar l-a eliberat de rușine. De convingerea profundă că el este, în esență, incapabil.\nDe ce ai nevoie de terapie pentru traumă?\nSingur, e aproape imposibil să vezi cum propriile tale interpretări te țin prizonier. Traumatizat, creierul tău operează din supraviețuire, nu din claritate. Un psihoterapeut specializat în traumă te ajută să:\nIdentifici narațiunea toxică care s-a format în momentele tale cele mai vulnerabile.\nContexttualizezi evenimentul – să vezi că ceea ce ți s-a întâmplat nu definește cine ești.\nReconstruiești o narațiune sănătoasă – una în care evenimentul rămâne real, dar semnificația lui se schimbă: \"Mi s-a întâmplat ceva teribil\" în loc de \"Sunt teribil.\"\nProcesezi emoțiile nerezolvate care au rămas blocate în corp de când evenimentul s-a întâmplat.\nConcluzie\nTrauma nu este o condamnare permanentă. Este o interpretare – și interpretările pot fi schimbate. Andrei nu și-a recuperat copilăria pierdută. Dar și-a recuperat prezentul. Și-a recuperat capacitatea de a-și respecta inteligența și valoarea. S-a recuperat pe el însuși.\nDacă trăiești cu povești vechi care îți spun că ești prea mult sau prea puțin, că nu meriți, că ești permanent marcat – știi că aceste povești pot fi rescrise. Nu singur. Dar cu ajutor profesionist, cu compasiune și cu timp, poți transforma trauma din cine ești în ceva ce ți s-a întâmplat. Și aceasta face toată diferența."
    },
    {
      id: 4,
      title: "Sindromul \"Da\"-ului automat: când nu poți spune \"Nu\" și ajungi să te urăști pe tine",
      date: "December 8, 2024",
      excerpt: "\"Da, sigur, fac eu.\" \"Nicio problemă, mă ocup.\" \"Desigur, pot să ajut.\" Sună familiar? Dacă spui permanent \"da\" chiar când vrei să spui \"nu\", dacă îți este mai greu să dezamăgești pe cineva decât să te epuizezi pe tine, atunci te confrunți cu sindromul \"da\"-ului automat - acea nevoie compulsivā de a fi pe plac care te consumă încet, până când te trezești furios pe toată lumea, dar mai ales pe tine.",
      fullContent: "Mihai a ajuns la psihoterapeut la treizeci și opt de ani, complet epuizat. \"Nu mai pot\", a spus el. \"Toată lumea mă caută când are nevoie de ceva. Șeful mă sună în weekend. Prietenii știu că eu rezolv. Familia mea e convinsă că eu sunt banca și taxiul oficial. Și eu spun mereu da. Dar acum… acum îi urăsc pe toți. Și mă urăsc cel mai mult pe mine.\"\nMihai nu avea o problemă de management al timpului. Avea o problemă mult mai profundă: nu știa cum să spună \"nu\" fără să simtă că e un om rău.\n\nCe este sindromul \"da\"-ului automat?\nPeople-pleasing înseamnă prioritizarea constantă a nevoilor altora în detrimentul propriilor nevoi, de cele mai multe ori din frică de respingere, conflict sau dezamăgire. Nu vorbim despre a fi amabil sau generos. Vorbim despre un tipar comportamental în care:\n\t∙Spui \"da\" automat, înainte să te gândești dacă chiar vrei sau poți\n\t∙Te simți vinovat când refuzi pe cineva, chiar și pentru lucruri neimportante\n\t∙Îți sacrifici timpul, energia și nevoile pentru a nu dezamăgi\n\t∙Ascunzi ce simți cu adevărat pentru a menține \"armonia\"\n\t∙Ești \"persoana de încredere\" pentru toată lumea - și epuizat pentru tine\nÎn cultura românească, people-pleasing-ul este hrănit de mesaje puternice: \"Ce o să zică lumea?\", \"Trebuie să fii bun cu toată lumea\", \"Dacă nu ajuți, ești egoist.\" Aceste convingeri transformă \"nu\"-ul într-un act de trădare, nu într-un drept firesc.\n\nDe unde vine frica de \"nu\"?\nNimeni nu se naște people-pleaser. Acest tipar se învață, adesea din copilărie. Mulți oameni au învățat că iubirea e condiționată - primești afecțiune doar când ești util, cuminte, disponibil. Dacă ai crescut într-un mediu cu tensiuni constante, ai învățat că pacea vine prin sacrificiu de sine. Când stima de sine e fragilă, aprobarea altora devine oxigenul emoțional.\n\nPrețul people-pleasing-ului\nCând spui mereu \"da\", pierzi mult mai mult decât timpul:\nEpuizare totală. Corpul și mintea nu pot funcționa în regim de suprasarcină permanentă. Mihai dormea cinci ore pe noapte, sărea peste mese și nu mai avea energie pentru nimic care îi făcea plăcere.\nResentimente profunde. Când dai constant fără reciprocitate, furia se acumulează. Începi să urăști oamenii pe care îi ajuți - nu pentru că ei sunt răi, ci pentru că tu nu ai știut să te protejezi.\nPierderea identității. Când valoarea ta vine doar din utilitatea pentru alții, cine ești când ești singur? Mulți people-pleasers nu mai știu ce le place, ce vor, cine sunt de fapt.\nRelații superficiale. Oamenii te iubesc pentru ce faci, nu pentru cine ești. Iar când încerci să spui \"nu\", unii dispar - pentru că nu era o relație reală, ci o relație de utilizare.\nAnxietate și depresie. Stresul cronic, neglijarea propriilor nevoi și sentimentul că ești prins în capcană duc direct la probleme grave de sănătate mentală.\n\nCum te ajută terapia?\nUn psihoterapeut specializat te va ajuta să:\nIdentifici originea tiparului - De unde vine frica ta de \"nu\"? Ce ai învățat despre iubire și valoare?\nReconstruiești valoarea de sine - Să înțelegi că nu trebuie să fii util pentru a fi iubit. Că valoarea ta este intrinsecă, nu condiționată.\nÎnveți să stabilești limite sănătoase - Să spui \"nu\" fără vinovăție și să comunici nevoile tale clar.\nProcesezi fricile de abandon - Să descoperi că oamenii care te părăsesc când spui \"nu\" nu erau relații autentice.\nDezvoltă toleranță la disconfort - Vinovăția care vine când spui \"no\" nu înseamnă că faci ceva greșit - înseamnă că faci ceva nou.\n\nCe s-a întâmplat cu Mihai?\nDupă șase luni de terapie, Mihai a învățat ceva revoluționar: \"nu\"-ul lui nu ucide pe nimeni. A început cu puțin - a refuzat să mai lucreze în weekend. Apoi a spus unui prieten că nu poate să-l împrumute din nou. La început, vinovăția era copleșitoare. Dar cei care s-au supărat când a spus \"nu\" erau exact oamenii care profitau de \"da\"-ul lui automat. Cei care l-au respectat au rămas.\nAstăzi, Mihai nu mai e \"omul la care alergi când ai nevoie\". E omul care știe să spună \"da\" când vrea cu adevărat și \"nu\" când trebuie. Și, surprinzător, relațiile lui s-au îmbunătățit,  pentru că acum sunt autentice.\n\nConcluzie: \"Nu\"-ul tău te salvează\nPeople-pleasing-ul nu este generozitate. Este auto-abandon. Este sacrificarea ta pentru a evita disconfortul temporar al altor oameni. Și nu este sustenabil.\nDacă simți că trăiești pentru alții, că nu mai ai voie să dezamăgești pe nimeni, că \"da\"-ul tău este automat indiferent de cost - caută ajutor profesionist. Nu este slăbiciune. Este curaj.\nPentru că tu meriți să fii mai mult decât util. Meriți să fii iubit pentru cine ești, nu pentru ce faci. Și poti să spui \"nu\" fără să simți că trădezi pe cineva. Începe cu tine."
    },
    {
      id: 5,
      title: "Cum poți să ierți pe cineva, atunci când \"îți vine să-l omori\"?",
      date: "December 5, 2024",
      excerpt: "Există momente în viață când furia este atât de mare, încât iertarea pare imposibilă. Când persoana care te-a rănit este chiar cineva pe care iubești – un părinte, un partener, un prieten apropiat – durerea devine dublă. Și totuși, uneori, singura cale de a merge înainte este prin iertare. Nu pentru celălalt. Ci pentru tine.",
      fullContent: "Maria a simțit că pământul se clatină sub picioarele ei când mama ei a rostit acele cuvinte: \\\"L-am dat. Nu-l vei mai vedea niciodată.\\\"\\nPandantivul acela cu diamant nu era doar o bijuterie. Era ultimul lucru pe care sora ei îl purtase la gât înainte să plece dintre cei vii. Era un fir invizibil care o lega pe Maria de sora pe care o pierduse cu un an înainte. Și acum, mama ei – femeia care ar fi trebuit să înțeleagă cel mai bine ce înseamnă acea pierdere – îl dăruise unei străine, de parcă ar fi fost un obiect oarecare.\\nFuria care a cuprins-o pe Maria a fost vie, fierbinte, imposibil de stăpânit. În acea clipă, ea nu mai vedea o mamă în durere. Vedea o trădătoare. Vedea insensibilitate. Vedea motivul perfect pentru a pune capăt unei relații care, oricum, în ultimul an, fusese tensionată, plină de tăceri grele și de cuvinte nespuse.\\n\\nCând durerea se transformă în furie\\nCe nu știa Maria în acel moment era că mama ei nu acționase din răutate. Acționase dintr-un instinct de auto-protectie.\\nDoliul nu vine cu un manual de instrucțiuni. Nu există un ghid care să-ți spună cum să gestionezi obiectele personale ale copilului tău mort. Pentru unii, acele obiecte devin relicve sfinte, de neatins. Pentru alții, devin poveri insuportabile – amintiri fizice ale unei absențe pe care nu o pot accepta.\\nMama Mariei se afla undeva între aceste extreme, navigând haotic printre stadiile durerii. Într-o zi, strângea la piept hainele fiicei ei, incapabilă sa le dea drumul. În alta, dădea lucruri în stânga și-n dreapta, încercând disperat să scape de greul amintirilor care o sufocau. Nu era logică. Era supraviețuire instinctivă.\\nDar pentru Maria, nimic din toate acestea nu conta în acea clipă. Ea vedea doar pierderea – nu doar a surorii, ci acum și a ultimelor urme tangibile ale ei.\\n\\nIertarea nu înseamnă să fii de acord\\nSă ierți pe cineva care ți-a făcut un rău profund nu înseamnă să spui \\\"ce-ai făcut este acceptabil\\\". Nu înseamnă să minimalizezi durerea sau să justifici comportamentul celuilalt. Iertarea înseamnă ceva mult mai complex și eliberator: să recunoști că persoana care ți-a greșit este umană, imperfectă și, adesea, pierdută în propria ei suferință.\\nMama Mariei nu a dat acel pandantiv ca să o rănească pe fiica ei. L-a dat pentru că, în acel moment, nu mai putea să respire sub greutatea obiectelor care îi reaminteau de pierdere. A fost un gest impulsiv, haotic, al unei femei care încă nu înțelegea propriile ei reacții. Dar Maria nu putea vedea asta. Nu încă.\\n\\nDrumul către iertare începe cu înțelegerea\\nAu trecut luni de tăcere între ele. Maria și-a ținut promisiunea – nu a mai vorbit cu mama ei. Dar tăcerea nu i-a adus pacea pe care o căuta. Dimpotrivă, furia s-a transformat în ceva mai greu: o tristețe adâncă, o epuizare emoțională. Pierduseră deja un membru al familiei. Acum au pierdut și legătura una cu cealaltă.\\nA fost nevoie de timpul ei, de conversații cu o prietenă apropiată și, în cele din urmă, de mai multe ședințe cu un psiholog, ca Maria să realizeze ceva esențial: mama ei nu fusese ea însăși în ultimul an. Doliul o schimbase. O făcuse imprevizibilă, instabilă, incapabilă să ia decizii raționale. Nu era o scuză, dar era o explicație. Și mai important, Maria și-a dat seama că, ținând loc furiei, își pierdea și ultima legătură vie cu sora ei – relația cu mama.\\n\\nIertarea ca act de eliberare\\nCând Maria a sunat-o în cele din urmă pe mama ei, vocea i-a tremurat. Nu era pregătită să spună \\\"îți iert tot\\\". Dar a fost pregătită să spună: \\\"Vreau să înțeleg. Vreau să vorbim.\\\" Și au vorbit. Pentru prima dată în luni de zile, mama i-a explicat – prin lacrimi – haosul din mintea ei, teroarea de a privi obiectele fiicei ei decedate, impulsurile de a da totul sau de a păstra totul, fără să existe justificare logica. I-a spus Mariei că regreta acel gest, că ar fi dorit să poată controla reacțiile ei, dar nu a putut.\\nMaria nu a simțit iertarea ca pe un moment de revelație divină. A simțit-o ca pe o oboseală care, în sfârșit, se retrage. Ca pe o respirație adâncă după ce ai țipat prea mult timp.Iertarea nu a șters durerea. Dar a făcut loc pentru vindecare.\\n\\nCe ne învață povestea Mariei\\nCând cineva pe care iubești te rănește profund, prima reacție e să construiești ziduri. Să te protejezi. Să tai legătura. Și uneori, acesta e un lucru necesar. Alteori, iertarea – nu pentru celălalt, ci pentru tine – devine actul cel mai curajos. Pentru că a ierta nu înseamnă a uita. Înseamnă a alege să nu mai porți greul acelei furii în fiecare zi. Înseamnă a recunoaște că oamenii greșesc, mai ales când suferă. Și că, uneori, singura cale înainte este prin compasiune – pentru celălalt, dar mai ales pentru tine.\\nPandantivul nu s-a întors. Dar relația lor, încetul cu încetul, a început să se vindece."
    }
  ];

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  }; 
  return (
    <div id="portfolio" className="azzle-section-padding2 position-r" style={{ paddingTop: "200px" }}>
      <div className="azzle-pricing-shape" style={{ backgroundColor: "#f5f5f5", minHeight: "100px" }}>
      </div>
      <div className="container" style={{ paddingTop: "40px" }}>
        <div
          className="azzle-section-title center"
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ marginBottom: "100px", marginTop: "0" }}
        >
          <h2>Articole</h2>
        </div>

        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>{blogPosts[0].title}</h3>
                <p>{blogPosts[0].date}</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>{blogPosts[0].excerpt}</p>
              </div>
              <div className="azzle-pricing-footer mt-50" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => openModal(blogPosts[0])}
                  style={{ 
                    background: 'white', 
                    border: 'none', 
                    cursor: 'pointer', 
                    padding: '12px 28px',
                    borderRadius: '50px',
                    color: 'rgba(36, 41, 60)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#24293c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'rgba(36, 41, 60)';
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap active"
              data-aos="fade-up"
              data-aos-delay="700"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>{blogPosts[1].title}</h3>
                <p>{blogPosts[1].date}</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>{blogPosts[1].excerpt}</p>
              </div>
              <div className="azzle-pricing-footer mt-50" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => openModal(blogPosts[1])}
                  style={{ 
                    background: 'rgba(197, 166, 99, 1)', 
                    border: 'none', 
                    cursor: 'pointer', 
                    padding: '12px 28px',
                    borderRadius: '50px',
                    color: 'rgba(36, 41, 60)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#24293c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(197, 166, 99, 1)';
                    e.currentTarget.style.color = 'rgba(36, 41, 60)';
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="900"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>{blogPosts[2].title}</h3>
                <p>{blogPosts[2].date}</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>{blogPosts[2].excerpt}</p>
              </div>
              <div className="azzle-pricing-footer mt-50" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => openModal(blogPosts[2])}
                  style={{ 
                    background: 'white', 
                    border: 'none', 
                    cursor: 'pointer', 
                    padding: '12px 28px',
                    borderRadius: '50px',
                    color: 'rgba(36, 41, 60)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#24293c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'rgba(36, 41, 60)';
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Centered 2 Posts */}
        <div className="row justify-content-center" style={{ marginTop: "30px" }}>
          {/* Blog Post 4 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>{blogPosts[3].title}</h3>
                <p>{blogPosts[3].date}</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>{blogPosts[3].excerpt}</p>
              </div>
              <div className="azzle-pricing-footer mt-50" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => openModal(blogPosts[3])}
                  style={{ 
                    background: 'white', 
                    border: 'none', 
                    cursor: 'pointer', 
                    padding: '12px 28px',
                    borderRadius: '50px',
                    color: 'rgba(36, 41, 60)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#24293c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'rgba(36, 41, 60)';
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="col-xl-4 col-md-6">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="700"
              style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "400px" }}
            >
              <div className="azzle-pricing-header">
                <h3>{blogPosts[4].title}</h3>
                <p>{blogPosts[4].date}</p>
              </div>
              <div className="azzle-pricing-body" style={{ flex: 1 }}>
                <p>{blogPosts[4].excerpt}</p>
              </div>
              <div className="azzle-pricing-footer mt-50" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => openModal(blogPosts[4])}
                  style={{ 
                    background: 'white', 
                    border: 'none', 
                    cursor: 'pointer', 
                    padding: '12px 28px',
                    borderRadius: '50px',
                    color: 'rgba(36, 41, 60)',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#24293c';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'rgba(36, 41, 60)';
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {mounted && isModalOpen && selectedPost && createPortal(
          (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
              animation: 'fadeIn 0.3s ease-out',
              backdropFilter: 'blur(4px)'
            }}
            onClick={closeModal}
          >
            <div 
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(197, 166, 99, 1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#24293c',
                  transition: 'transform 0.2s',
                  zIndex: 1
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                ×
              </button>

              {/* Modal content */}
              <div style={{ padding: '40px' }}>
                <h2 style={{ margin: '0 0 10px 0', color: '#24293c', fontSize: '32px' }}>{selectedPost.title}</h2>
                <p style={{ color: '#999', fontSize: '14px', marginBottom: '30px' }}>{selectedPost.date}</p>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  color: '#333',
                  marginBottom: '0',
                  whiteSpace: 'pre-wrap'
                }}>
                  {selectedPost.fullContent}
                </p>
              </div>
            </div>
          </div>
          ),
          document.body
        )}
      </div>
    </div>
  );
}
