import Image from "next/image";

export default function Testimonials() {
  const clients = [
    {
      name: "Client 1",
      description: "CEO of My Company",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra tellus id suscipit posuere.",
    },
    {
      name: "Client 2",
      description: "CEO of Another Company",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      name: "Client 3",
      description: "CEO of Last Company",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Quis tellus eget adipiscing convallis sit sit eget aliquet quis.",
    },
  ];

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Testimonials
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 lg:max-w-6xl lg:grid-cols-3 gap-x-8">
        {clients.map((client, id) => (
          <div
            key={client.name}
            className="relative flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-red-400/40 sm:p-10"
          >
            <p className="text-lg text-gray-500 mb-3">“{client.quote}”</p>
            <div className="flex pt-3 mt-auto border-t border-gray-900/10 dark:border-gray-100/30">
              <div className="relative self-center h-[50px] w-full max-w-[50px] mr-4 overflow-hidden rounded-full">
                <Image
                  src={`/testimonial-${id}.png`}
                  alt="Testimonio"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h3 className="text-red-400 text-base/7 font-semibold">
                  {client.name}
                </h3>
                <p className="mt-0.5 text-base/7">{client.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
