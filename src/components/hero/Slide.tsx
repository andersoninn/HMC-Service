export default function Slide({
  data: { title, text, index, bgImage },
}: {
  data: { title: string; text: string; index: number; bgImage: string };
}) {
  return (
    <div>
      <div
  className={`keen-slider__slide number-slide${index + 1}`}
  style={{
    backgroundImage: `url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(55, 65, 81, 0.8)', // Tailwind gray-700 com opacidade
    backgroundBlendMode: 'multiply',
  }}
  key={index}
>

        <section className="container max-w-[1000px] px-6 h-full lg:h-[500px]  m-auto flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-center ">{title}</h1>
          <article className="!text-center text-brand-text-primary">
            <p className="text-medium">{text}</p>
          </article>
        </section>
      </div>
    </div>
  );
}
