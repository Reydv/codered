import { useSearchParams } from "react-router-dom";

import HeadingPost from "../components/HeadingPost";

export default function Post() {
  const [searchParams] = useSearchParams();
  const judul = searchParams.get("judul"); // Get 'name' param
  return (
    <div className="lg:w-1/2 md:mx-auto md:w-3/4 w-full mx-4 ">
      <HeadingPost judul={judul} />
      <div className="py-4 px-2 text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          egestas, velit nec maximus ullamcorper, leo tortor fringilla ante,
          tincidunt viverra enim eros et nisl. Vivamus eg
        </p>
        <br />
        <p>
          Vestibulum mollis quam ut quam pretium, et euismod enim faucibus. Duis
          nec nunc urna. Duis a ligula sed libero efficitur luctus. Aliquam in
          massa id velit molestie pulvinar in id tortor. Mauris non dapibus
          nulla, vitae viverra ante. Suspendisse nulla justo, mollis quis arcu
          quis, bibendum egestas est. Phasellus in lacus magna. Mauris eget arcu
          in nisi tincidunt dignissim vitae vitae eros.
        </p>

        <br />

        <ol className="list-decimal list-inside">
          <li>
            Estibulum mollis quam ut quam pretium, et euismod enim faucibus.
            Duis nec nunc urna. Duis a ligula sed libero efficitur luctus.
            Aliquam in massa id velit molestie pulvinar in id tortor. Mauris non{" "}
          </li>
          <li>
            Phasellus in lacus magna:
            <ul className="list-disc ps-10">
              <li>Sic</li>
              <li>Temper</li>
              <li>Tyranis</li>
            </ul>
          </li>
        </ol>

        <p>Referencia:</p>
        <ol className="list-decimal list-inside ps-5">
          <li>https://memento.mori</li>
          <li>https://.com</li>
          <li>https://lorem.com</li>
        </ol>
      </div>
    </div>
  );
}
