import { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";

const QA: React.FC<QAProps> = ({ question, answer }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col border-b py-3">
      <div className="flex justify-between pb-1 items-start">
        <p className="text-lg lg:text-xl font-bold">{question}</p>
        <button className="p-2" onClick={() => setHidden((prev) => !prev)}>
          {hidden ? (
            <ChevronDownIcon className="h-6 w-6" />
          ) : (
            <ChevronUpIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          hidden ? "h-1" : "h-full"
        } transition-all  duration-100 overflow-hidden pl-4`}
      >
        {answer.split("\n").map((paragraph, index) => (
          <p key={index} className="pb-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

interface QAProps {
  question: string;
  answer: string;
}

const FAQS = () => {
  return (
    <div
      className="flex flex-col items-center w-full relative min-h-[800px] py-10 font-woodland"
    >
      <h1 className="text-4xl lg:text-5xl font-woodland font-bold text-center py-4 lg:pb-16 px-10">
        MGA TANONG
      </h1>
      <div className="w-full max-w-[1200px] shadow-lg p-10">
        <QA
          question="Ano ang RSVP?"
          answer="Ang kahulugan ng RSVP ay kapag hiniling namin sa iyo na mag-RSVP, hinihiling namin sa iyo na kumpirmahin kung makakadalo ka sa kasal o hindi."
        />
        <QA
          question="Kailan ang nakatakdang pahon para sa amin upang sumagot sa RSVP?"
          answer={`Mangyaring mag-RSVP nang hindi lalampas sa _____ 
          Kung wala kaming marinig mula sa iyo sa petsa sa itaas, ikinalulungkot naming ipagpalagay na hindi ka makakadalo at ang iyong mga puwesto ay muling bibigyan ng naaayon.
          Muli ka naming papaalalahanin nang mas malapit sa petsang ito upang ipaalala sa iyo na tumugon kung makakadalo ka ba sa petsang ito.`}
        />
        <QA
          question="Nailagay ko sa RSVP ay OO, pero sa hindi inaasahang pag kakataon ay nag ka aberya at hindi na ako makakadalo, ano ang dapat kong gawin?"
          answer={`Nauunawaan namin na maaaring may mga ganitong pangyayari, hinihiling namin na ipaalam mo sa amin sa lalong madaling panahon:
          Danica Luna | 0917-843-2494
          Mar Pineda | 0977-253-9939
          `}
        />
        <QA
          question="Nailagay ko sa RSVP ay HINDI, ngunit ang aking iskedyul ay nagbago na at maaari na akong dumalo, ano ang dapat kong gawin?"
          answer={`Mangyaring mag mensahe sa amin sa lalong madaling panahon upang masuri namin kung mayroon pang nakalaan na upuan para sa iyo:
          Danica Luna | 0917-843-2494
          Mar Pineda | 0977-253-9939`}
        />
        <QA
          question="Anong ang dapat kong i-suot?"
          answer={`Mangyaring sumangguni sa seksyon ng kasuotan para sa rekomendasyon.`}
        />
        <QA
          question="Maaari ba namin dalhin ang mga bata sa seremonya?"
          answer={`Ikinalulungkot namin, pero maaari lamang nating payagan ang mga bata na bahagi ng Entourage dahil sa limitadong kapasidad ng mga upuan.`}
        />
        <QA
          question="Ma-aari bang magdala ng ibang kasama?"
          answer={`Hangga't gusto nating imbitahan ang lahat, maaari lamang nating tanggapin ang mga nakatanggap ng imbitasyon. Mangyaring sumangguni sa iyong imbitasyon para sa bilang ng mga upuan na inilaan sa iyong partido.`}
        />
        <QA
          question="Paano ako makakapunta sa resepyon?"
          answer={`Isinama namin ang mapa sa seksyon ng Resepyon.
          Maaari mo ring gamitin ang Waze/Google Maps, i-type lamang ang Blue Gardens Weddings and Events Venue`}
        />
        <QA
          question="Saan maaring mag parada ng sasakyan?"
          answer={`Maraming mga parking space sa resepyon at ito ay LIBRE!`}
        />
        <QA
          question="Maari ba akong kumuha ng litrato at vidyo?"
          answer={`Hinihiling namin sa iyo na mangyaring iwasan ang paggamit ng iyong mga mobile phone at camera sa panahon ng seremonya.
          Pagkatapos ng seremonya, huwag mag-atubiling kumuha ng maraming larawan at vidyo mo sa resepyon. Huwag kalimutan ang aming mga opisyal na hashtag!
          #NICAtadhanakayMAR`}
        />
        <QA
          question="Anong oras magsisimula ang resepyon?"
          answer={`Ang resepyon ay magsisimula nang eksakto sa Alas-kwatro ng hapon.`}
        />
      </div>
    </div>
  );
};

export default FAQS;
