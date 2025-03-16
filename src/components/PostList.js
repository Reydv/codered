export default function PostList({ judul, rel = 0 }) {
  const relevansi = [
    "Codered",
    "Negatif Menengah",
    "Negatif Tinggi",
    "Positif Rendah",
    "Positif Menengah",
    "Positif Tinggi",
  ];
  return (
    <a className="bg-primary w-full" href={`/post/?judul=${judul}`}>
      <div className={`py-2 bg-rel-${rel}`}></div>
      <div className="py-4 lg:px-20 sm:px-6 px-1">
        <h1 className="font-anonymous text-2xl font-bold"> {judul} </h1>
        <h2 className="text-center my-3 text-sm">
          Relevansi :{" "}
          <span className={`text-rel-${rel}`}>{relevansi[rel]}</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          egestas, velit nec maximus ullam corper, leo tortor fringilla ante,
          tincidunt viverra enim eros et nisl. Vivamus eg ...
        </p>
        <div className="flex justify-center gap-6 mt-5">
          {/* Upvote */}
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
            23
          </div>
          {/* Downvote */}
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
            23
          </div>
          {/* Comment */}
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
            23
          </div>
        </div>
      </div>
    </a>
  );
}
