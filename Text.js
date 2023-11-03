let readlineSync = require('readline-sync')
text0()

function text(){
    let answer = ''
    while (answer != 'a' && answer != 'b'){
        answer = readlineSync.question('Welke kies jij? (A / B) :').tolowerCase()
    }
     return answer
}




function text0(){
     console.log("Het was vanacht weer eens laat de 4 vrienden waren aan het gamen tot diep in de nacht.");
     console.log("De tijd vloog voorbij na heel wat potjes shipment in call of duty modenwarver was het al weer 4 uur snacht's");
     console.log("Jullie besloten maar te gaan slapen en de volgende dag veder te gaan.");
     console.log("Opeens ging het lucht alarm af je shrikt wakker en beseft je nog niet wat er allemaal gebeurd aangezien je net een uur lag te slapen.");
     console.log("|                              ");
     console.log("|                              ");
     console.log("|                              ");
     console.log("|______                      | ");
     console.log("|______|_____________________| ");
     console.log("|                            | ");
     console.log("|                            | ");
     console.log("|                            | ");
     console.log("a. je blijft liggen.  b. Je gaat kijken naar het nieuws en een plan verzinnen.");
     answer = readlineSync.question()
    if (answer == 'a'){
        text7()
    }
    else{
        text1()
    }
}




function text7(){
     console.log("Het boeit je allemaal niet zo veel wat er gaande is dus doet het licht weer uit en gaat veder slapen. Je hoort buiten wat geschreeuw en paniek maar omdat je zo moe bent heb je daar maar 5 minuten naar geluisterd en ben je inslaap gevallen. Je hebt heel wat telefoontjes gemist en het nieuws staat op zen kop");
     console.log("Je word wakker wat ga je doen?");
     console.log("a. je gaat gewoon veder alsof er niets aan de hand is. b. Je gaat toch maar buien kijken wat er aan de hand is.");
     answer = readlineSync.question()
    if (answer == 'a'){
        text8()
    }
    else{
        text18()    
    }
}



function text18(){
     console.log("Je kleed je aan en gaat nog wat eten voor je naar buiten gaat je hebt nog niet naar buiten gekeken of iets.");
     console.log("Het is erg stil je doet de deur open en ziet een grote ravage");
     console.log("a. Je gaat terug naar binnen  b. Je blijft buiten en gaat een rondje lopen.");
     answer = readlineSync.question()
    if (answer == 'a'){
        text8()
    }
    else{
        text14()
    }
}
    



function text8(){
     console.log("Het boeit je allemaal niet zoveel je hebt beneden nog wat planken liggen dus je pakt die en timmert alles dicht en je wilt niks meer te maken hebben met de buiten wereld.");
     console.log("Het enige probleem is dat je niet zo veel eten meer in huis hebt en rustig aan moet doen.");
     console.log("Je start je computer op om weer call of dutty met de boys te gaan doen alleen krijg je geen reactie op je berichtjes en zie je dat ze je gebelt hebben.");
     console.log("a. Het zit wel goed. b. Je probeert ze te bereiken.");
     answer = readlineSync.question()
   if (answer == 'a'){
       text9()
   }
   else{
    text3()   
   }

}





function text9(){
     console.log("Je wou ze gaan zoeken maar je vond het toch te gevaarlijk buiten wat begrijpelijk is want er is een apokolips je blijft je wel heel de dag zorgen maken en je hebt geen idee wat er buiten gaande is en wilt stiekem naar buiten kijken maar dat kan helaas niet.");
     console.log("a. je haalt de planken weg b. Je laat het zitten voor je eigen veiligheid.");
     answer = readlineSync.question()
    if (answer == 'a'){
        text16()       
       }
    else{
        text10()
    }
    
}



function text16(){
    console.log("Je haalt de planken weg er komt een heel vel licht binnen je ogen doen erg pijn en je ziet helemaal niks.");
    console.log("Je schiet in paniek om dat je niets kon zien.");
    console.log("Je Komt weer een beetje bij na 10 minuten je kijkt nog een keer goed naar buiten het ziet er heel uitgestorven uit.");
    console.log("Je twijfelt om naar buien te gaan want je eten is bijna op.");
    console.log("a. Je blijft nog binnen want je vind ht te eng om naar buiten te gaan. b. Je gaat naar buiten om eten te halen");
    answer = readlineSync.question()
    if (answer == 'a'){
        text19()
    }
    else{
        text11()
    }
}    




function text10(){
    console.log("Je zit nu al 3 maanden binnen en het is erg rustig buiten en je hebt de afgelopen weken geen rare geluiden gehoord.");
    console.log("Het probleem is dat je zo juist je 1 naar laatste maaltijd op hebt dus je zou tot morgen kunnen eten.");
    console.log("Je brengt de avond door net zoals elke andere avond maar toch blijf je erg bezorgt over je vrienden maar het al vast goed met hun gaan");
    console.log("a. je gaat naar buiten om eten te halen. b. Je blijft binnen en doet het met het eten dat je hebt.");
    answer = readlineSync.question()
    if (answer == 'a'){
        text11()
       }
    else{
        text19()
    }
}    



function text19(){
    console.log("Je kleed je aan en haalt de planken voor de deur weg.");
    console.log("Je loopt naar buiten richting de supper markt.");
    console.log("Je loopt een steegje in omdat je het gevoel hebt dat je achtervolgd word je kijkt achter om en ziet 5 zombies je achter volgen. ");
    console.log("Je rent zo snel mogelijk en je komt aan het einde van de steeg normaal is die altijd open maar er staat een ontplofte auto bij de uitgang.");
    console.log("Je probeert over de ontplofte auto te klimmen je bent er bijna over heen tot je terug getrokken word aan je been je valt lelijk op de grond en word gebeten je bent helaas niet meer te reden.");
    console.log("Helaas heb je de apocalyps niet overleefd.");
    console.log("######################################################################################################################################################################################################");
    console.log("Dit was het dan het einden van dit verhaal.");
    console.log("a. als je op nieuw wilt beginen. b. Om naar het einde te gaan.");
    answer = readlineSync.question()
     if (answer == 'a'){
        text0()
    }
    else{
        text24()
    }
}




function text11(){
    console.log("Je moet toch echt naar buiten om eten te gaan halen maar ja wat neem je precies mee?");
    console.log("Je gaat de berging in en vind een honkbalknuppel, een verslete bezem, een toetsen bord en een hand pistool.");
    console.log("je hebt besloten om setjes bij elkaar te leggen dus de bezem en het toetsen bord gaan samen en de honkbalknuppel en het hand pistool.");
    console.log("welke neem je?");
    console.log("a.  de bezem en het toetsenbord. b. Honkbal en het hand pistool");
    answer = readlineSync.question()
    if (answer == 'a'){
        text13()
    }
    else{
        text12()
    }
}



function text13(){
    console.log("De bezem gooi je weg en je pakt het toetsenbord.");
    console.log("Je hebt nog waat spijkers en lijm.");
    console.log("Je doed al het lijm over je toetsenbord al het lijk gaat tussen de toetsen zitten je duwt de achter kant van de spijkers in het toetsenbord met lijk zo dat de punten uit steken.");
    console.log("Je opend de deur en het lijkt rustig tot er op eens zombie's op je af komen rennen je slaat in het rond met je teotsenbord en het werkt verbazingwekend goed.");
    console.log("a. Je gaat veder naar buiten om eten te zoeken.  b. Je gaat weer terug naar binnen om dat je je daar veiliger voelt");
    answer = readlineSync.question()
    if (answer == 'a'){
        text14()
    }
    else{
        text10()
    }
}    
    



function text14(){
    console.log("Je loopt richting de super markt waar in het erg rustig was er liep niemand op straat.");
    console.log("Je komt aan bij de supper mark waar niemand is het is er erg stil de deur zit op slot.");
    console.log("Je ziet de sleutel liggen en probeert de deur open te maken tot er heel wat zombies op je af komen je pakt je toetsenbord en slaat op ze in.");
    console.log("Je ziet heel veel eten liggen dus je pakt alles mee je hebt nu voorlopig genoeg eten.")
    console.log("Je hebt thuis alles op ge borgen ga je veder nog een rondje lopen of blijf je binnen.");
    console.log("a. Je loopt veder nog een rondje. b. Je gaat weer terug naar binnen omdat dat veiliger voelt.");
    answer = readlineSync.question()
    if (answer == 'a'){
        text23()
    }
    else{
        text10()
    }
}    


    



function text12(){
    console.log("Perfect we hebben ergens nog een holster vandaan kunnen halen het pistool zit vast in zijn holster en houd de honkbalknuppel goed stevig vast.");
    console.log("Je maakt de deur open en schrikt van de ravage buiten je word aangevallen door wel 10 zombies je probeert ze nog weg te slaan");
    console.log("Maar het heeft allemaal geen zin meer jeword mee gesleurd en je hebt apokolips niet overleefd.");
    console.log("###################################################################################################################################################");
    console.log("Dit was het dan het einden van dit verhaal.");
    console.log("a. als je op nieuw wilt beginen. b. Om naar het einde te gaan.");
    answer = readlineSync.question
     if (answer == 'a'){
        text0()
    }
    else{
        text24()
    }    
}


    



function text1(){
    console.log("Je kleed je snel aan en kijkt op je telefoon wat er aan de hand is. Op het nieuws staat er dat er een apokolips is uitgebroken en je zo snel mogelijk weg moet.");
    console.log("Je telefoon word overspoeld met berichten je pakt snel een grote tas om er wat spullen te pakken.");
    console.log("Stiekem heb je hier al vaker over ge droomd en weet precies wat je moet pakken je pakt zo snel mogelijk je pakt een zaklamp, compas, wat kleding, een deken voor snacht's.");
    console.log("Ook pak je zoveel mogelijk elektronica mee je telefoon, al je powerbanks die opgeladen zijn, je stekkers voor als je moet opladen.");
    console.log("Je rent naar de keuken en pakt heel wat eten mee en met namen lang houd baar eten. Je pakt een grote tree met flesjes water mee 24 flesjes zullen wel genoeg zijn toch?");
    console.log("a. ja ik heb meer dan genoeg flesjes mee. b. Nee het is veel ste veel");
    answer = readlineSync.question()
    if (answer == 'a'){
        text2()
    }
    else{
        text15()
    }
}



function text15(){
    console.log("Je vind 24 flesjes toch iets te veel en neemt er 12 mee zo nu past er wel een extra jerrycan in, je rent naar de auto en begint hem vol te stoppen met al je spullen je gaat naar de schuur om wapens te vinden.");
    console.log("Gelukkig heb je dat wapen van je vader bewaart helaas wel maar 10 clips maar beter iets dan niets. Je neemt ook je oude honkbal knuppel mee zal vast van pas komen.");
    console.log("Ook liggen er nog heel wat gefulde jerrycans die gefulld zijn je zet de laatste jerrycan er in en krijgt een belletje een belletje van Bradley.");
    console.log("Hij vroeg of je hem wou ophalen met de Toyota landrover je word ook door Lars, Koen en Remke gebeld of je hun kan ophalen je benterg aan het twijvelen heb ik wel genoeg plek gaat het wel allemaal passen?");
    console.log("Tuurlijk je haalt de rest op en begint met rijden je komt langs wat mensen die stil staan ga je stoppen?");
    console.log("a. Je stopt en gaat de mensen helpen b. Je rijd door want je weet maar nooit wat er gebeurt.");
    answer = readlineSync.question()
    if(answer == 'a'){
        text17()
    }
    else{
        text4()
    }
}





function text2(){
    console.log("Je rent naar de auto en begint hem vol te stoppen met al je spullen je gaat naar de schuur om wapens te vinden.");
    console.log("Gelukkig heb je dat wapen van je vader bewaart helaas wel maar 10 clips maar beter iets dan niets.");
    console.log("Je neemt ook je oude honkbal knuppel mee zal vast van pas komen.");
    console.log("ok liggen er nog heel wat gefulde jerrycans die gefulld zijn je zet de laatste jerrycan er in en krijgt een belletje een belletje van Bradley.");
    console.log("Hij vroeg of je hem wou ophalen met de Toyota landrover je word ook door Lars, Koen en Remke gebeld of je hun kan ophalen je bent erg aan het twijvelen heb ik wel genoeg plek gaat het wel allemaal passen.");
    console.log("a. je hebt genoeg plek dus waarom ook niet. b. je beseft je dat het geen zin heeft en blijft thuis.");
    answer = readlineSync.question()
    if(answer == 'a'){
        text3()
    }
    else{
        text8()
    }
}



function text3(){
    console.log("Waarom ook niet in men eentje ga ik het niet reden je stippelt de route uit en begint met rijden richting Bradley die woont het dichst bij na 5 min rijden kom je aan in een grote ravage.");
    console.log("radley komt naar buiten gerent met nog heel wat spullen jullie laden samen alles in en gaan richting Remke die het verst weg woont onder weg pikken jullie Lars en Koen op die wonen in het zelfde dorp.");
    console.log("Jullie komen aan bij Lars en Koen die gelukkig ook klaar stonden met hun spullen Lars had wapens voor iedereen en heel wat kogels gelukkig maar we gaan snel door richting Remke.");
    console.log("Na een uur zijn we eindelijk bij Remke waar waar de gaos pas echt begon mensen schreeuwde en renden weg.");
    console.log("Ze probeerde auto's te open en er mee weg te rijden ze waren hopeloos ze konden.");
    console.log("Wij kregen er een nare sweer van en zijn zo snel mogelijk weg gegaan.");
    console.log(" Onder weg kwamen we mensen tegen die aan het swaaien waren voor hulp het leek er op deat hun brandstof op was jullie hadden nog 6 jerrycan's vol.");
    console.log("Je twijfelt zullen we ze helpen of rijden we door?");
    console.log("a. Jullie gaan ze helpen. b. Jullie rijden door want je weet maar nooit wat er gebeurt. ");
    answer = readlineSync.question()
    if(answer == 'a'){
        text17()
    }
    else{
        text4()
    }
}





function text17(){
    console.log("Jullie zijn toch maar gestopt om te helpen jij en Lars stappen uit.");
    console.log("Daar voor hebben jullie nog een afspraak gemaakt dat stel ze zouden iets doen dat Bradley, Remke en Koen iets zouden doen en dat er altijd 2 in/ bij de auto blijven met allebij wapens.");
    console.log("Jij en Lars lopen vorzichtig naar hun toe hun auto is uitgevallen jij en Lars proberen een oplozing te bedenken en repareren de auto.");
    console.log("Ze hebben alleen bijna geen benzine meer waar door ze aan ons vroegen of we nog benzine hadden en wij zijden uiteraart nee maar dat geloofde ze niet.");
    console.log("De mensen werden boos en ze richten op eens een wapen op Jouw. Bradley, Koen en Remke zagen het. Koen kwam helpen Lars was snel een bosje in gedoken.");
    console.log("Koen ging richting Lars en gaf hem een gun ze kwamen bij hun van achter wat ze niet door hadden waardoor ze makkelijk allebij uitgeschakelt en jullie pakken de waarde vollen spullen uit de auto van hun en beginnen weer met rijden.");
    console.log("Jullie zijn nu al een dag onder weg en hebben heel veel dingen mee gemaakt de sweer is grauw maar jullie blijven gaan Lars zegt het begint nu wel een beetje te erg op een game te lijken.");
    console.log("Ja ik heb nog nooit een geweer vast gehouden of uber houd geschoten hoe gaan we dit doen je zegt tegen de groep we hebben een plan nodig we kunnen wel eindeloos rijden maar dat gaat hem niet worden anders worden we van zelf gevonden.");
    console.log("Ja je hebt gelijk we moeten een plan maken over een kleine 40 Km zit een klein dorpje als we daar naar toe gaan en dan alles halen wat er te vinden is.");
    console.log("We gaan dan door naar een groot bos waar we met de auto door heen rijden midden in het bos stoppen we en maken we met de tenten die we geen een soort huis in de grond we graven een groot gat wen we gebruiken iets wat we vinden in het dop als dak en we maken een soort luik we gooien er aarden en bladeren over heen zo dat het lijkt als een vloer in het bos.");
    console.log("De auto pakeren we ergens in de bosjes. Er word een stemming gehouden of we het gaan doen of niet jij hebt de door slag gevende stem gaan we eindeloos rondjes rijden of gaan we het plan volgen?");
    console.log("a. Volgen jullie het plan? b. Of volgen jullie het plan niet?");
    answer = readlineSync.question()
     if(answer == 'a'){
        text5()
     }
     else{
        text21()
     }
}




function text4(){
     console.log("Jullie zijn nu al een dag onder weg en hebben heel veel dingen mee gemaakt de sweer is grauw maar jullie blijven gaan Lars zegt het begint nu wel een beetje te erg op een game te lijken.");
     console.log("Ja ik heb nog nooit een geweer vast gehouden of uber houd geschoten hoe gaan we dit doen je zegt tegen de groep we hebben een plan nodig we kunnen wel eindeloos rijden maar dat gaat hem niet worden anders worden we van zelf gevonden.");
     console.log("Ja je hebt gelijk we moeten een plan maken over een kleine 40 Km zit een klein dorpje als we daar naar toe gaan en dan alles halen wat er te vinden is.");
     console.log("We gaan dan door naar een groot bos waar we met de auto door heen rijden midden in het bos stoppen we en maken we met de tenten die we geen een soort huis in de grond we graven een groot gat wen we gebruiken iets wat we vinden in het dop als dak en we maken een soort luik we gooien er aarden en bladeren over heen zo dat het lijkt als een vloer in het bos.");
     console.log("De auto pakeren we ergens in de bosjes. Er word een stemming gehouden of we het gaan doen of niet jij hebt de door slag gevende stem gaan we eindeloos rondjes rijden of gaan we het plan volgen?");
     console.log("a. Volgen jullie het plan? b. Of volgen jullie het plan niet?");
     answer = readlineSync.question()
     if(answer == 'a'){
        text5()
     }
     else{
        text21()
     }
}




function text21(){
     console.log("Jullie Hebben gekozen om niet het plan te volgen.");
     console.log("Jullie zijn wel naar het dorp gegaan en het leeg te halen.");
     console.log("Jullie hebben de spullen voor het plan gaan we dan maar toch het plan uitvoeren?");
     console.log("a. Jullie volgen toch maar het plan. b. Jullie blijven toch maar rijden");
     answer = readlineSync.question()
     if(answer == 'a'){
         text5()
     }
     else{
         text22()
     }
}    




function text22(){
    console.log("Jullie rijden heel lang veder in middels zitten jullie ergens waar jullie het bestaan niet van wisten het plaatsje heet Urk en het licht zoon 5750KM bij jouw huis van daan.");
    console.log("Jullie beginen toch wel er ge heimwee te krijgen en willen graag naar huis toe maar dat kan nog niet helaas.");
    console.log("Het is in middels zoon maand veder en jullie voetsel begint op te raken ");
    console.log("Jullie hebben het lang vol ge houden alleen is er vanacht iets ergs gebeurt Koen is vanacht helaas overleden hij had te weinig gegeten.");
    console.log("Jullie waren er zo kapot van dat jullie zelf niet meer door wouden jullie waren zo met Koen bezig waardoor jullie van achter aan gevallen werden jullie hebben nog geprobeert om jullie te reden maar dat is niet gelukt.");
    console.log("Helaas heb je het niet over leeft je hebt erg je best gedaan maar het is je helaas niet gelukt");
    console.log("               ");
    console.log(" (```````)___  ");
    console.log(" ( x . x )");
    console.log(" _( (x) )_ ");
    console.log("| |     | |   ");
    console.log("|_|_____|_|  ");
    console.log("  | | | |     ");
    console.log("  |_| |_| ");
    console.log("#############################################################################################################################################################################################");
    console.log("Dit was het dan het einden van dit verhaal.");
    console.log("a. als je op nieuw wilt beginen. b. Om naar het einde te gaan.");
    answer = readlineSync.question()
     if (answer == 'a'){
        text0()
    }
    else{
        text24()
    }
}
    






function text5(){
     console.log("Jullie volgen het toch maar het plan en gaan naar dat dorp veder op voor jullie gevoel zit er pas een week op maar door dat jullie geen tijd besef meer heben is er al een 3 weken voor bij.");
     console.log("Het lijkt er op dat de zombies al voorbij het dorp zijn gegaan het is er uit gestorven jullie beginnen alles leeg te halen jullie vinden wat extra jerrycans heel wat eten en drinken zo we kunnen hier zeker wel een jaar mee door.");
     console.log("Jullie vinden een aarde achtige kleur verf een een groten metalen plaat jullie nemen dat mee ook hebben jullie een houte plaat gevonden perfect voor het luik.");
     console.log("Ook nemen jullie nog heel wat spullen mee uit huizen die helemaal leeg staan powerbanks oplaad snoeren.")
     console.log("Jullie rijden 125Km door en vinden het bos jullie stoppen in he midden van het bos en beginnen met het uit lijnen van het plan op de grond.");
     console.log("Jullie beginnen  met graven en binnen no time is hele kuil uit ge graven het heeft jullie zoon 10 uur gekost maar dan heb je wat jullie splitsen op jij en Lars zetten de tenten op Koen en Bradley beginnen met verfen.");
     console.log("De tenten staan en de verf is droog.");
     console.log("Jullie pakken de laatste spullen uit de auto.");
     console.log("Lars en jij gaan de auto veerstoppen Koen en Bradley verfen nog een laag en gooien aarden en blaadjes op de natte verf zodat dat blijft zitten de auto is verstopt en jullie leggen samen het dak er op en leggen nog meer aarden en blaadjes er op ook maken jullie het luik vast en gaan allemaal naar binnen.");
     console.log("jullie zijn in middels al 6 maanden veder en alles gaat goed jullie hebben genoeg spellen bij jullie dus jullie vervelen je niet snel. Opeens hoor je een hele hoop geschreeuw en kabaal.");
     console.log(" Je twijfelt om naar buiten te gaan of binnen te blijven wat doe je?");
     console.log("a. Je blijft toch maar binnen. b. je gaat toch maar naar buiten.");
     answer = readlineSync.question()
     if(answer == 'a'){
        text6()
     }
     else{
        text20() 
     }
}




function text20(){
    console.log("Je bent naar buiten gegaan zonder enige voorbereiding.");
    console.log("Je doet de deur open en loopt een stukje je loopt een steegje in en je ziet op eens heel veel zombie's staan.")
    console.log("Je rend zo hard als je kan tot de steeg ophoud.");
    console.log("Je word opgegeten door de zombie's");
    console.log("Helaas heb je de Zombie apokolips niet overleefd");
    console.log("#########################################################################################################################################");
    console.log("Dit was het dan het einden van dit verhaal.");
    console.log("a. als je op nieuw wilt beginen. b. Om naar het einde te gaan.");
    answer = readlineSync.question
     if (answer == 'a'){
        text0()
    }
    else{
        text24()
    }
}






function text6(){
    console.log("Gelukkig ben je binnen gebleven jullie eten en drinken begint op te raken jullie hebben 1 telefoon die het nog doed jullie willen het nieuws checken of jullie weer veilig naar huis kunne");
    console.log("Of jullie nog langer moeten blijven jullie bepalen dat jullie toch gaan kijken je opent het luik en er komt heel vel licht naar binnen maar het ziet er rustig uit je opent de telefoon en krijgt heel even berijk");
    console.log("Maar niet genoeg jullie beseffen jullie dat er in de auto nog een sateliet lag jullie pakken die en zoeken verbinding na een uur zoeken naar een signaal vinden jullie eindelijk een sigaal en opent je telefoon");
    console.log("je begint te lezen na een tijdje vind je uit dat sinds vorige week alles voor bij is en dat de ravage opgeruimd word.");
    console.log("jullie beginen te juigen en pakken alles in jij haalt de auto alvast jullie hebben de auto in gepakt en beginnen aan een toch van 10 dagen rijden.");
    console.log("Een maal thuis aan gekomen pakt iedereen de belangrijkste spullen uit hun huis jullie rijden naar jouw huis en beginnen daar met het schoon maken van alles.");
    console.log("Na alles beslisen jullie samnen te gaan wonen aan gezien alles wat jullie hadden aan familie niet terug te vinden zijn jullie wonen nog lang en gelukkig in het huis en jullie hebben deze vreselijke apokolips oveleefd");
    console.log("a als je op nieuw wilt beginen  b. als je naar het eind wil.");
    console.log("#########################################################################################################################################################################################");
    answer = readlineSync.question
    if (answer == 'a'){
        text0()
    }
    else{
        text24()
    }
}




function text24(){
    console.log("Dit was het dan het einden van deze text base adventare ik hoop dat je het leuk vond.")
    console.log("######################################################################################################################################################################");
}