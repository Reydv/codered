import { useSearchParams } from "react-router-dom";
import HeadingPost from "../components/HeadingPost";
import pertamina from "../assets/logo/pertamina.jpeg";

export default function Post() {
  const [searchParams] = useSearchParams();
  const judul = searchParams.get("judul");

  let pertaminaimg = pertamina;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <HeadingPost judul={judul} />
        <div className="py-4 px-2 sm:text-lg text-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            egestas, velit nec maximus ullamcorper, leo tortor fringilla ante,
            tincidunt viverra enim eros et nisl. Vivamus eg
          </p>
          <br />
          <img
            className="mx-auto w-full max-w-md"
            src={pertaminaimg}
            alt="Pertamina Logo"
          />
          <br />
          <p>
            Vestibulum mollis quam ut quam pretium, et euismod enim faucibus.
            Duis nec nunc urna. Duis a ligula sed libero efficitur luctus.
            Aliquam in massa id velit molestie pulvinar in id tortor. Mauris non
            dapibus nulla, vitae viverra ante. Suspendisse nulla justo, mollis
            quis arcu quis, bibendum egestas est. Phasellus in lacus magna.
            Mauris eget arcu in nisi tincidunt dignissim vitae vitae eros.
          </p>

          <h4>snxin</h4>

          <br />

          <h4 className="text-2xl font-bold">
            Pre data{" "}
            <a
              href="https://nasional.kompas.com/read/2025/03/04/11310641/kasus-dugaan-pertamax-oplosan-pertamina-diminta-beri-kompensasi-konsumen?page=all"
              className="underline text-blue-500"
            >
              kumparan siaran
            </a>{" "}
            magnicia ipsum:
          </h4>

          <br />
          <ol className="list-decimal list-inside">
            <li>
              Estibulum mollis quam ut quam pretium, et euismod enim faucibus.
              Duis nec nunc urna. Duis a ligula sed libero efficitur luctus.
              Aliquam in massa id velit molestie pulvinar in id tortor. Mauris
              non{" "}
            </li>
            <br />
            <li>
              Phasellus in lacus magna:
              <ul className="list-disc ps-10">
                <li>Sic</li>
                <li>Temper</li>
                <li>Tyranis</li>
              </ul>
            </li>
          </ol>
          <br />
          <br />

          <p>Referencia:</p>
          <ol className="list-decimal list-inside ps-5">
            <li>https://memento.mori</li>
            <li>https://.com</li>
            <li>https://lorem.com</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
